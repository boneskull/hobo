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

var __$Getters__ = [];
var __$Setters__ = [];
var __$Resetters__ = [];

function __GetDependency__(name) {
  return __$Getters__[name]();
}

function __Rewire__(name, value) {
  __$Setters__[name](value);
}

function __ResetDependency__(name) {
  __$Resetters__[name]();
}

var __RewireAPI__ = {
  '__GetDependency__': __GetDependency__,
  '__get__': __GetDependency__,
  '__Rewire__': __Rewire__,
  '__set__': __Rewire__,
  '__ResetDependency__': __ResetDependency__
};
'use strict';

var Promise = _bluebird2['default'];

__$Getters__['Promise'] = function () {
  return Promise;
};

__$Setters__['Promise'] = function (value) {
  Promise = value;
};

__$Resetters__['Promise'] = function () {
  Promise = _bluebird2['default'];
};

var chalk = _chalk2['default'];

__$Getters__['chalk'] = function () {
  return chalk;
};

__$Setters__['chalk'] = function (value) {
  chalk = value;
};

__$Resetters__['chalk'] = function () {
  chalk = _chalk2['default'];
};

var Command = _command2['default'];

__$Getters__['Command'] = function () {
  return Command;
};

__$Setters__['Command'] = function (value) {
  Command = value;
};

__$Resetters__['Command'] = function () {
  Command = _command2['default'];
};

var coloredPkgNameAndVersion = _meta.coloredPkgNameAndVersion;
var capitalizedPkgName = _meta.capitalizedPkgName;

__$Getters__['coloredPkgNameAndVersion'] = function () {
  return coloredPkgNameAndVersion;
};

__$Setters__['coloredPkgNameAndVersion'] = function (value) {
  coloredPkgNameAndVersion = value;
};

__$Resetters__['coloredPkgNameAndVersion'] = function () {
  coloredPkgNameAndVersion = _meta.coloredPkgNameAndVersion;
};

__$Getters__['capitalizedPkgName'] = function () {
  return capitalizedPkgName;
};

__$Setters__['capitalizedPkgName'] = function (value) {
  capitalizedPkgName = value;
};

__$Resetters__['capitalizedPkgName'] = function () {
  capitalizedPkgName = _meta.capitalizedPkgName;
};

var questions = _questions2['default'];

__$Getters__['questions'] = function () {
  return questions;
};

__$Setters__['questions'] = function (value) {
  questions = value;
};

__$Resetters__['questions'] = function () {
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

if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
  Object.defineProperty(_defaultExport, '__Rewire__', {
    'value': __Rewire__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__set__', {
    'value': __Rewire__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__ResetDependency__', {
    'value': __ResetDependency__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__GetDependency__', {
    'value': __GetDependency__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__get__', {
    'value': __GetDependency__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__RewireAPI__', {
    'value': __RewireAPI__,
    'enumberable': false
  });
}

exports['default'] = _defaultExport;

if (require.main === module) {
  Promise.longStackTraces();
  setup();
}
exports.__GetDependency__ = __GetDependency__;
exports.__get__ = __GetDependency__;
exports.__Rewire__ = __Rewire__;
exports.__set__ = __Rewire__;
exports.__ResetDependency__ = __ResetDependency__;
exports.__RewireAPI__ = __RewireAPI__;
module.exports = exports['default'];
