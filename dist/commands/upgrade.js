'use strict';

var rangeToVersion = _rangeToVersionOrig;
var upgrade = _upgradeOrig;
var __$Getters__ = [];
var __$Setters__ = [];
var __$Resetters__ = [];

function _GetDependency__(name) {
  return __$Getters__[name]();
}

function _Rewire__(name, value) {
  __$Setters__[name](value);
}

function _ResetDependency__(name) {
  __$Resetters__[name]();
}

var _RewireAPI__ = {
  '__GetDependency__': _GetDependency__,
  '__get__': _GetDependency__,
  '__Rewire__': _Rewire__,
  '__set__': _Rewire__,
  '__ResetDependency__': _ResetDependency__
};
'use strict';

var Promise = require('bluebird');
var _Promise = Promise;

__$Getters__['Promise'] = function () {
  return Promise;
};

__$Setters__['Promise'] = function (value) {
  Promise = value;
};

__$Resetters__['Promise'] = function () {
  Promise = _Promise;
};

var which = Promise.promisify(require('which'));
var _which = which;

__$Getters__['which'] = function () {
  return which;
};

__$Setters__['which'] = function (value) {
  which = value;
};

__$Resetters__['which'] = function () {
  which = _which;
};

var logger = require('./../logger');
var _logger = logger;

__$Getters__['logger'] = function () {
  return logger;
};

__$Setters__['logger'] = function (value) {
  logger = value;
};

__$Resetters__['logger'] = function () {
  logger = _logger;
};

var execFile = require('child-process-promise').execFile;
var _execFile = execFile;

__$Getters__['execFile'] = function () {
  return execFile;
};

__$Setters__['execFile'] = function (value) {
  execFile = value;
};

__$Resetters__['execFile'] = function () {
  execFile = _execFile;
};

var semver = require('semver');
var _semver = semver;

__$Getters__['semver'] = function () {
  return semver;
};

__$Setters__['semver'] = function (value) {
  semver = value;
};

__$Resetters__['semver'] = function () {
  semver = _semver;
};

var _ = require('lodash');
var _2 = _;

__$Getters__['_'] = function () {
  return _;
};

__$Setters__['_'] = function (value) {
  _ = value;
};

__$Resetters__['_'] = function () {
  _ = _2;
};

var devDeps = require('../../package.json').devDependencies;
var _devDeps = devDeps;

__$Getters__['devDeps'] = function () {
  return devDeps;
};

__$Setters__['devDeps'] = function (value) {
  devDeps = value;
};

__$Resetters__['devDeps'] = function () {
  devDeps = _devDeps;
};

var utils = require('./../utils');

var _utils = utils;

__$Getters__['utils'] = function () {
  return utils;
};

__$Setters__['utils'] = function (value) {
  utils = value;
};

__$Resetters__['utils'] = function () {
  utils = _utils;
};

function _rangeToVersionOrig(range) {
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

var _rangeToVersion = rangeToVersion;

__$Getters__['rangeToVersion'] = function () {
  return rangeToVersion;
};

__$Setters__['rangeToVersion'] = function (value) {
  rangeToVersion = value;
};

__$Resetters__['rangeToVersion'] = function () {
  rangeToVersion = _rangeToVersion;
};

function _upgradeOrig(cwd, log) {
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

var _upgrade = upgrade;

__$Getters__['upgrade'] = function () {
  return upgrade;
};

__$Setters__['upgrade'] = function (value) {
  upgrade = value;
};

__$Resetters__['upgrade'] = function () {
  upgrade = _upgrade;
};

module.exports = upgrade;

if (typeof module.exports === 'object' || typeof module.exports === 'function') {
  Object.defineProperty(module.exports, '__Rewire__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__set__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__ResetDependency__', {
    'value': _ResetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__GetDependency__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__get__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__RewireAPI__', {
    'value': _RewireAPI__,
    'enumerable': false,
    'configurable': true
  });
}
//# sourceMappingURL=upgrade.js.map
