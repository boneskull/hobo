'use strict';

var distill = _distillOrig;
var execute = _executeOrig;
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

var _ = require('../utils');

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

var log = require('../logger')();

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

function _distillOrig(opts) {
  return _.pick(opts, function (value, name) {
    return name.length > 1;
  });
}

var _distill = distill;

__$Getters__['distill'] = function () {
  return distill;
};

__$Setters__['distill'] = function (value) {
  distill = value;
};

__$Resetters__['distill'] = function () {
  distill = _distill;
};

function _executeOrig(command, argv) {
  log.verbose('Executing command "' + command + '"');
  return execute[command](argv._, distill(argv));
}

var _execute = execute;

__$Getters__['execute'] = function () {
  return execute;
};

__$Setters__['execute'] = function (value) {
  execute = value;
};

__$Resetters__['execute'] = function () {
  execute = _execute;
};

execute.symlink = require('./symlink');
execute.install = require('./install');
execute.upgrade = require('./upgrade');
execute.gitignore = require('./gitignore');

module.exports = execute;

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
