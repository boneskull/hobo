'use strict';

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

var Logger = require('./logger');
var _Logger = Logger;

__$Getters__['Logger'] = function () {
  return Logger;
};

__$Setters__['Logger'] = function (value) {
  Logger = value;
};

__$Resetters__['Logger'] = function () {
  Logger = _Logger;
};

var pkg = require('../package.json');
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

var chalk = require('chalk');

var _chalk = chalk;

__$Getters__['chalk'] = function () {
  return chalk;
};

__$Setters__['chalk'] = function (value) {
  chalk = value;
};

__$Resetters__['chalk'] = function () {
  chalk = _chalk;
};

require('bluebird').longStackTraces();

var log = Logger({
  prefix: '' + chalk.green(pkg.name + '@' + pkg.version)
});

var _log = log;

__$Getters__['log'] = function () {
  return log;
};

__$Setters__['log'] = function (value) {
  log = value;
};

__$Resetters__['log'] = function () {
  log = _log;
};

log.debug('Loaded main module.');

module.exports = require('./commands');

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
//# sourceMappingURL=index.js.map
