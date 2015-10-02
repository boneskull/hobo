'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _command = require('../command');

var _command2 = _interopRequireDefault(_command);

var _meta = require('../../meta');

var _questions = require('./questions');

var _questions2 = _interopRequireDefault(_questions);

/* eslint no-extra-bind:0 */
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

var _Promise$IsLifeBindingActive = true;
var Promise = _bluebird2['default'];

__$Getters__['Promise'] = function () {
  return _Promise$IsLifeBindingActive ? _bluebird2['default'] : Promise;
};

__$Setters__['Promise'] = function (value) {
  _Promise$IsLifeBindingActive = false;
  Promise = value;
};

__$Resetters__['Promise'] = function () {
  _Promise$IsLifeBindingActive = true;
  Promise = _bluebird2['default'];
};

var _chalk$IsLifeBindingActive = true;
var chalk = _chalk2['default'];

__$Getters__['chalk'] = function () {
  return _chalk$IsLifeBindingActive ? _chalk2['default'] : chalk;
};

__$Setters__['chalk'] = function (value) {
  _chalk$IsLifeBindingActive = false;
  chalk = value;
};

__$Resetters__['chalk'] = function () {
  _chalk$IsLifeBindingActive = true;
  chalk = _chalk2['default'];
};

var _Command$IsLifeBindingActive = true;
var Command = _command2['default'];

__$Getters__['Command'] = function () {
  return _Command$IsLifeBindingActive ? _command2['default'] : Command;
};

__$Setters__['Command'] = function (value) {
  _Command$IsLifeBindingActive = false;
  Command = value;
};

__$Resetters__['Command'] = function () {
  _Command$IsLifeBindingActive = true;
  Command = _command2['default'];
};

var _coloredPkgNameAndVersion$IsLifeBindingActive = true;
var coloredPkgNameAndVersion = _meta.coloredPkgNameAndVersion;
var _capitalizedPkgName$IsLifeBindingActive = true;
var capitalizedPkgName = _meta.capitalizedPkgName;

__$Getters__['coloredPkgNameAndVersion'] = function () {
  return _coloredPkgNameAndVersion$IsLifeBindingActive ? _meta.coloredPkgNameAndVersion : coloredPkgNameAndVersion;
};

__$Setters__['coloredPkgNameAndVersion'] = function (value) {
  _coloredPkgNameAndVersion$IsLifeBindingActive = false;
  coloredPkgNameAndVersion = value;
};

__$Resetters__['coloredPkgNameAndVersion'] = function () {
  _coloredPkgNameAndVersion$IsLifeBindingActive = true;
  coloredPkgNameAndVersion = _meta.coloredPkgNameAndVersion;
};

__$Getters__['capitalizedPkgName'] = function () {
  return _capitalizedPkgName$IsLifeBindingActive ? _meta.capitalizedPkgName : capitalizedPkgName;
};

__$Setters__['capitalizedPkgName'] = function (value) {
  _capitalizedPkgName$IsLifeBindingActive = false;
  capitalizedPkgName = value;
};

__$Resetters__['capitalizedPkgName'] = function () {
  _capitalizedPkgName$IsLifeBindingActive = true;
  capitalizedPkgName = _meta.capitalizedPkgName;
};

var _questions$IsLifeBindingActive = true;
var questions = _questions2['default'];

__$Getters__['questions'] = function () {
  return _questions$IsLifeBindingActive ? _questions2['default'] : questions;
};

__$Setters__['questions'] = function (value) {
  _questions$IsLifeBindingActive = false;
  questions = value;
};

__$Resetters__['questions'] = function () {
  _questions$IsLifeBindingActive = true;
  questions = _questions2['default'];
};

var setup = (function setup(done) {
  var _this = this;

  console.log(chalk.green(coloredPkgNameAndVersion) + '\n');
  console.log('Let\'s get you going!');
  return questions().then(function (qs) {
    return _this.prompt(qs);
  })['catch'](function (err) {
    throw new Error(err);
  }).nodeify(done);
}).bind(Command({
  name: 'setup',
  description: 'Configure ' + capitalizedPkgName
}));

var _setup = setup;

__$Getters__['setup'] = function () {
  return setup;
};

__$Setters__['setup'] = function (value) {
  setup = value;
};

__$Resetters__['setup'] = function () {
  setup = _setup;
};

var _defaultExport = setup;

if ((typeof _defaultExport === 'object' || typeof _defaultExport === 'function') && Object.isExtensible(_defaultExport)) {
  Object.defineProperty(_defaultExport, '__Rewire__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__set__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__ResetDependency__', {
    'value': _ResetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__GetDependency__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__get__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__RewireAPI__', {
    'value': _RewireAPI__,
    'enumerable': false,
    'configurable': true
  });
}

exports['default'] = _defaultExport;

if (require.main === module) {
  _GetDependency__('Promise').longStackTraces();
  setup();
}
exports.__GetDependency__ = _GetDependency__;
exports.__get__ = _GetDependency__;
exports.__Rewire__ = _Rewire__;
exports.__set__ = _Rewire__;
exports.__ResetDependency__ = _ResetDependency__;
exports.__RewireAPI__ = _RewireAPI__;
module.exports = exports['default'];
