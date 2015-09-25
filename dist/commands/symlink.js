'use strict';

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var mkdirp = Promise.promisify(require('mkdirp'));
var path = require('path');
var logger = require('./../logger');
var pkg = require('../../package.json');

function symlink(cwd, log) {
  log = log || logger;
  cwd = cwd || process.cwd();
  var config = pkg.config['digs-dev'];
  var symlinks = config.symlink;
  var successes = 0;
  var failures = 0;

  return Promise.map(symlinks, function link(relativeSrc) {
    var dest = path.join(cwd, relativeSrc);
    return fs.lstatAsync(dest).then(function unlinkSymlink(stats) {
      if (!stats.isSymbolicLink()) {
        var target = path.relative(cwd, dest);
        return Promise.reject('Skipping ' + target + '; not a symlink');
      }
      return fs.unlinkAsync(dest);
    }).error(function mkdir() {
      var dir = path.dirname(relativeSrc);
      if (dir !== '.') {
        return mkdirp(path.join(cwd, dir));
      }
    }).then(function doSymlink() {
      var src = path.join(__dirname, '..', relativeSrc);
      return fs.symlinkAsync(src, dest)['return'](src);
    }).then(function report(src) {
      var from = path.relative(cwd, src);
      var to = path.relative(cwd, dest);
      var relativeCwd = path.relative(cwd, process.cwd()) + path.sep;
      log.log('Symlinked ' + from + ' => ' + relativeCwd + to);
      successes++;
    })['catch'](function fail(err) {
      log.warn(err);
      failures++;
    });
  }).then(function done() {
    log.ok('Symlinked ' + successes + ' file(s) with ' + failures + ' ' + 'failure(s).');
  });
}

module.exports = symlink;
//# sourceMappingURL=symlink.js.map
