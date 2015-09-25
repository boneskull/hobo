'use strict';

var Promise = require('bluebird');
var which = Promise.promisify(require('which'));
var logger = require('./../logger');
var execFile = require('child-process-promise').execFile;
var semver = require('semver');
var _ = require('lodash');
var devDeps = require('../../package.json').devDependencies;
var utils = require('./../utils');

function rangeToVersion(range) {
  try {
    var sets = new semver.Range(range, true).set;
    if (sets.length > 1) {
      return String(range);
    }
    return String(_.first(_.first(sets)).semver);
  } catch (ignored) {
    return false;
  }
}

function upgrade(cwd, log) {
  log = log || logger;
  cwd = cwd || process.cwd();

  var parentPkg = undefined;
  var parentDevDeps = undefined;
  var parentName = undefined;
  try {
    parentPkg = require(cwd + '/package.json');
    parentName = parentPkg.name || 'package at ' + cwd;
    parentDevDeps = parentPkg.devDependencies || {};
  } catch (e) {
    throw new Error('No package.json found in ' + cwd);
  }

  log.info('Installing new/upgraded development dependencies.');

  var successes = 0;
  var failures = 0;

  return Promise.all([which('npm'), utils.isGit(cwd)]).spread(function upgradeDeps(npm, isGit) {
    log.log('Using npm at ' + npm);
    if (isGit) {
      log.info('Package is under version control; saving upgrades.');
      log.info('Don\'t forget to index & commit changes to package.json!');
    }
    return Promise.each(_.keys(devDeps), function upgradeDep(dep) {
      var ver = undefined;
      var parentVer = undefined;
      var parentMissingDep = undefined;
      if (!_.startsWith(devDeps[dep], 'github:')) {
        ver = rangeToVersion(devDeps[dep]);
        parentVer = parentDevDeps[dep] && rangeToVersion(parentDevDeps[dep]);
        parentMissingDep = !parentVer;
      } else {
        parentMissingDep = parentDevDeps[dep] !== devDeps[dep];
      }
      if (parentMissingDep || ver && semver.ltr(parentVer, ver)) {
        ver = devDeps[dep];
        if (parentMissingDep) {
          log.info('Package "' + parentName + '" missing devDep "' + dep + '@' + ver + '"');
        } else {
          parentVer = parentDevDeps[dep];
          log.info('Package "' + parentName + '" has "' + dep + '" ' + parentVer + ' < ' + (ver + '; upgrading'));
        }

        var args = ['install', dep + '@' + ver];
        if (isGit) {
          args.push('--save-dev');
        }
        return execFile(npm, args, {
          cwd: cwd
        }).then(function success() {
          if (isGit) {
            log.info('Installed devDep "' + dep + '@' + ver + '" (with "--save-dev")');
          } else {
            log.info('Installed devDep "' + dep + '@' + ver + '"');
          }
          successes++;
        })['catch'](function fail(err) {
          log.warn(err);
          failures++;
        });
      }
    });
  }).then(function report() {
    if (successes || failures) {
      log.ok('Upgraded ' + successes + ' package(s) with ' + failures + ' ' + 'failure(s).');
    } else {
      log.ok('All packages up-to-date!');
    }
  });
}

module.exports = upgrade;
//# sourceMappingURL=upgrade.js.map
