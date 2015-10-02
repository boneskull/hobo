'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

var _fs = require('./fs');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _meta = require('./meta');

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

var _home$IsLifeBindingActive = true;
var home = _fs.home;

__$Getters__['home'] = function () {
  return _home$IsLifeBindingActive ? _fs.home : home;
};

__$Setters__['home'] = function (value) {
  _home$IsLifeBindingActive = false;
  home = value;
};

__$Resetters__['home'] = function () {
  _home$IsLifeBindingActive = true;
  home = _fs.home;
};

var _path$IsLifeBindingActive = true;
var path = _path2['default'];

__$Getters__['path'] = function () {
  return _path$IsLifeBindingActive ? _path2['default'] : path;
};

__$Setters__['path'] = function (value) {
  _path$IsLifeBindingActive = false;
  path = value;
};

__$Resetters__['path'] = function () {
  _path$IsLifeBindingActive = true;
  path = _path2['default'];
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

var _pkgName$IsLifeBindingActive = true;
var pkgName = _meta.pkgName;

__$Getters__['pkgName'] = function () {
  return _pkgName$IsLifeBindingActive ? _meta.pkgName : pkgName;
};

__$Setters__['pkgName'] = function (value) {
  _pkgName$IsLifeBindingActive = false;
  pkgName = value;
};

__$Resetters__['pkgName'] = function () {
  _pkgName$IsLifeBindingActive = true;
  pkgName = _meta.pkgName;
};

var hoboDirpath = _GetDependency__('path').join(_GetDependency__('home'), '.hobo');

var _hoboDirpath = hoboDirpath;

__$Getters__['hoboDirpath'] = function () {
  return hoboDirpath;
};

__$Setters__['hoboDirpath'] = function (value) {
  exports.hoboDirpath = hoboDirpath = value;
};

__$Resetters__['hoboDirpath'] = function () {
  exports.hoboDirpath = hoboDirpath = _hoboDirpath;
};

exports.hoboDirpath = _hoboDirpath;
var props = {
  id: pkgName,
  dirpath: hoboDirpath
};

var _props = props;

__$Getters__['props'] = function () {
  return props;
};

__$Setters__['props'] = function (value) {
  props = value;
};

__$Resetters__['props'] = function () {
  props = _props;
};

var Hobo = stampit({
  props: props,
  methods: {}
}).compose(Store);

var _Hobo = Hobo;

__$Getters__['Hobo'] = function () {
  return Hobo;
};

__$Setters__['Hobo'] = function (value) {
  Hobo = value;
};

__$Resetters__['Hobo'] = function () {
  Hobo = _Hobo;
};

var _defaultExport = Hobo;

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
//# sourceMappingURL=hobo.js.map
