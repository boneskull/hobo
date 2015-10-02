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

var stampit = require('stampit');
var _stampit = stampit;

__$Getters__['stampit'] = function () {
  return stampit;
};

__$Setters__['stampit'] = function (value) {
  stampit = value;
};

__$Resetters__['stampit'] = function () {
  stampit = _stampit;
};

var inquirer = Promise.promisifyAll(require('inquirer'));
var _inquirer = inquirer;

__$Getters__['inquirer'] = function () {
  return inquirer;
};

__$Setters__['inquirer'] = function (value) {
  inquirer = value;
};

__$Resetters__['inquirer'] = function () {
  inquirer = _inquirer;
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

var Command = stampit({
  methods: {
    prompt: function prompt() {
      return inquirer.promptAsync.apply(null, arguments);
    },
    exit: function exit(message, code) {
      if (_.isString(message)) {
        if (code) {
          message = chalk.red(message);
        }
        console.log(message);
      }

      /* eslint no-process-exit:0 */
      process.exit(code);
    }
  },
  init: function init(func) {
    this.execute = func;
  }
});

var _Command = Command;

__$Getters__['Command'] = function () {
  return Command;
};

__$Setters__['Command'] = function (value) {
  Command = value;
};

__$Resetters__['Command'] = function () {
  Command = _Command;
};

module.exports = Command;

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
//# sourceMappingURL=command.js.map
