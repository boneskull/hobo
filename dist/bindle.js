'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _simpleGit = require('simple-git');

var _simpleGit2 = _interopRequireDefault(_simpleGit);

var _domain = require('domain');

var _domain2 = _interopRequireDefault(_domain);

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

var _fs = require('./fs');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

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

var _git$IsLifeBindingActive = true;
var git = _simpleGit2['default'];

__$Getters__['git'] = function () {
  return _git$IsLifeBindingActive ? _simpleGit2['default'] : git;
};

__$Setters__['git'] = function (value) {
  _git$IsLifeBindingActive = false;
  git = value;
};

__$Resetters__['git'] = function () {
  _git$IsLifeBindingActive = true;
  git = _simpleGit2['default'];
};

var _domain$IsLifeBindingActive = true;
var domain = _domain2['default'];

__$Getters__['domain'] = function () {
  return _domain$IsLifeBindingActive ? _domain2['default'] : domain;
};

__$Setters__['domain'] = function (value) {
  _domain$IsLifeBindingActive = false;
  domain = value;
};

__$Resetters__['domain'] = function () {
  _domain$IsLifeBindingActive = true;
  domain = _domain2['default'];
};

var _stampit$IsLifeBindingActive = true;
var stampit = _stampit2['default'];

__$Getters__['stampit'] = function () {
  return _stampit$IsLifeBindingActive ? _stampit2['default'] : stampit;
};

__$Setters__['stampit'] = function (value) {
  _stampit$IsLifeBindingActive = false;
  stampit = value;
};

__$Resetters__['stampit'] = function () {
  _stampit$IsLifeBindingActive = true;
  stampit = _stampit2['default'];
};

var _isGit$IsLifeBindingActive = true;
var isGit = _fs.isGit;

__$Getters__['isGit'] = function () {
  return _isGit$IsLifeBindingActive ? _fs.isGit : isGit;
};

__$Setters__['isGit'] = function (value) {
  _isGit$IsLifeBindingActive = false;
  isGit = value;
};

__$Resetters__['isGit'] = function () {
  _isGit$IsLifeBindingActive = true;
  isGit = _fs.isGit;
};

var _Store$IsLifeBindingActive = true;
var Store = _store2['default'];

__$Getters__['Store'] = function () {
  return _Store$IsLifeBindingActive ? _store2['default'] : Store;
};

__$Setters__['Store'] = function (value) {
  _Store$IsLifeBindingActive = false;
  Store = value;
};

__$Resetters__['Store'] = function () {
  _Store$IsLifeBindingActive = true;
  Store = _store2['default'];
};

var defaults = {
  id: 'default',
  dirpath: null
};

var _defaults = defaults;

__$Getters__['defaults'] = function () {
  return defaults;
};

__$Setters__['defaults'] = function (value) {
  exports.defaults = defaults = value;
};

__$Resetters__['defaults'] = function () {
  exports.defaults = defaults = _defaults;
};

exports.defaults = _defaults;
var Bindle = stampit({
  refs: defaults
}).compose(Store).init(function init() {
  var _git = this._git = Promise.promisifyAll(git(this.dirpath));

  return isGit(this.dirpath).then(function (result) {
    if (!result) {
      return new Promise(function (resolve, reject) {
        domain.create().on('error', reject).run(function () {
          _git.initAsync().then(resolve);
        });
      });
    }
  })['return'](this);
});

var _Bindle = Bindle;

__$Getters__['Bindle'] = function () {
  return Bindle;
};

__$Setters__['Bindle'] = function (value) {
  Bindle = value;
};

__$Resetters__['Bindle'] = function () {
  Bindle = _Bindle;
};

var _defaultExport = Bindle;

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
exports.__GetDependency__ = _GetDependency__;
exports.__get__ = _GetDependency__;
exports.__Rewire__ = _Rewire__;
exports.__set__ = _Rewire__;
exports.__ResetDependency__ = _ResetDependency__;
exports.__RewireAPI__ = _RewireAPI__;
