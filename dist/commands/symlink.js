'use strict';

var symlink = _symlinkOrig;
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

var fs = Promise.promisifyAll(require('fs'));
var _fs = fs;

__$Getters__['fs'] = function () {
  return fs;
};

__$Setters__['fs'] = function (value) {
  fs = value;
};

__$Resetters__['fs'] = function () {
  fs = _fs;
};

var mkdirp = Promise.promisify(require('mkdirp'));
var _mkdirp = mkdirp;

__$Getters__['mkdirp'] = function () {
  return mkdirp;
};

__$Setters__['mkdirp'] = function (value) {
  mkdirp = value;
};

__$Resetters__['mkdirp'] = function () {
  mkdirp = _mkdirp;
};

var path = require('path');
var _path = path;

__$Getters__['path'] = function () {
  return path;
};

__$Setters__['path'] = function (value) {
  path = value;
};

__$Resetters__['path'] = function () {
  path = _path;
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

var pkg = require('../../package.json');

var _pkg = pkg;

__$Getters__['pkg'] = function () {
  return pkg;
};

__$Setters__['pkg'] = function (value) {
  pkg = value;
};

__$Resetters__['pkg'] = function () {
  pkg = _pkg;
};

function _symlinkOrig(cwd, log) {
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

var _symlink = symlink;

__$Getters__['symlink'] = function () {
  return symlink;
};

__$Setters__['symlink'] = function (value) {
  symlink = value;
};

__$Resetters__['symlink'] = function () {
  symlink = _symlink;
};

module.exports = symlink;

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
//# sourceMappingURL=symlink.js.map
