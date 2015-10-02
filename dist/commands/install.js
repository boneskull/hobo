'use strict';

var install = _installOrig;
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

var symlink = require('./symlink');
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

var upgrade = require('./upgrade');
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

var gitignore = require('./gitignore');

var _gitignore = gitignore;

__$Getters__['gitignore'] = function () {
  return gitignore;
};

__$Setters__['gitignore'] = function (value) {
  gitignore = value;
};

__$Resetters__['gitignore'] = function () {
  gitignore = _gitignore;
};

function _installOrig(cwd, log) {
  log = log || logger;
  return upgrade(cwd, log).then(function execSymlink() {
    return symlink(cwd, log);
  }).then(function execGitignore() {
    return gitignore(cwd, log);
  }).then(function report() {
    log.ok('Install complete.');
  });
}

var _install = install;

__$Getters__['install'] = function () {
  return install;
};

__$Setters__['install'] = function (value) {
  install = value;
};

__$Resetters__['install'] = function () {
  install = _install;
};

module.exports = install;

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
//# sourceMappingURL=install.js.map
