'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _packageJson = require('../package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

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

var _pkg$IsLifeBindingActive = true;
var pkg = _packageJson2['default'];

__$Getters__['pkg'] = function () {
  return _pkg$IsLifeBindingActive ? _packageJson2['default'] : pkg;
};

__$Setters__['pkg'] = function (value) {
  _pkg$IsLifeBindingActive = false;
  pkg = value;
};

__$Resetters__['pkg'] = function () {
  _pkg$IsLifeBindingActive = true;
  pkg = _packageJson2['default'];
};

var _$IsLifeBindingActive = true;
var _ = _utils2['default'];

__$Getters__['_'] = function () {
  return _$IsLifeBindingActive ? _utils2['default'] : _;
};

__$Setters__['_'] = function (value) {
  _$IsLifeBindingActive = false;
  _ = value;
};

__$Resetters__['_'] = function () {
  _$IsLifeBindingActive = true;
  _ = _utils2['default'];
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

var pkgName = _GetDependency__('pkg').name;
var _pkgName = pkgName;

__$Getters__['pkgName'] = function () {
  return pkgName;
};

__$Setters__['pkgName'] = function (value) {
  exports.pkgName = pkgName = value;
};

__$Resetters__['pkgName'] = function () {
  exports.pkgName = pkgName = _pkgName;
};

exports.pkgName = _pkgName;
var pkgNamePlural = pkgName + '\'s';
var _pkgNamePlural = pkgNamePlural;

__$Getters__['pkgNamePlural'] = function () {
  return pkgNamePlural;
};

__$Setters__['pkgNamePlural'] = function (value) {
  exports.pkgNamePlural = pkgNamePlural = value;
};

__$Resetters__['pkgNamePlural'] = function () {
  exports.pkgNamePlural = pkgNamePlural = _pkgNamePlural;
};

exports.pkgNamePlural = _pkgNamePlural;
var pkgVersion = _GetDependency__('pkg').version;
var _pkgVersion = pkgVersion;

__$Getters__['pkgVersion'] = function () {
  return pkgVersion;
};

__$Setters__['pkgVersion'] = function (value) {
  exports.pkgVersion = pkgVersion = value;
};

__$Resetters__['pkgVersion'] = function () {
  exports.pkgVersion = pkgVersion = _pkgVersion;
};

exports.pkgVersion = _pkgVersion;
var capitalizedPkgName = _GetDependency__('_').capitalize(pkgName);
var _capitalizedPkgName = capitalizedPkgName;

__$Getters__['capitalizedPkgName'] = function () {
  return capitalizedPkgName;
};

__$Setters__['capitalizedPkgName'] = function (value) {
  exports.capitalizedPkgName = capitalizedPkgName = value;
};

__$Resetters__['capitalizedPkgName'] = function () {
  exports.capitalizedPkgName = capitalizedPkgName = _capitalizedPkgName;
};

exports.capitalizedPkgName = _capitalizedPkgName;
var pkgNameAndVersion = capitalizedPkgName + '@' + pkgVersion;
var _pkgNameAndVersion = pkgNameAndVersion;

__$Getters__['pkgNameAndVersion'] = function () {
  return pkgNameAndVersion;
};

__$Setters__['pkgNameAndVersion'] = function (value) {
  exports.pkgNameAndVersion = pkgNameAndVersion = value;
};

__$Resetters__['pkgNameAndVersion'] = function () {
  exports.pkgNameAndVersion = pkgNameAndVersion = _pkgNameAndVersion;
};

exports.pkgNameAndVersion = _pkgNameAndVersion;
var coloredPkgNameAndVersion = '' + _GetDependency__('chalk').green(pkgNameAndVersion);
var _coloredPkgNameAndVersion = coloredPkgNameAndVersion;

__$Getters__['coloredPkgNameAndVersion'] = function () {
  return coloredPkgNameAndVersion;
};

__$Setters__['coloredPkgNameAndVersion'] = function (value) {
  exports.coloredPkgNameAndVersion = coloredPkgNameAndVersion = value;
};

__$Resetters__['coloredPkgNameAndVersion'] = function () {
  exports.coloredPkgNameAndVersion = coloredPkgNameAndVersion = _coloredPkgNameAndVersion;
};

exports.coloredPkgNameAndVersion = _coloredPkgNameAndVersion;
exports.__GetDependency__ = _GetDependency__;
exports.__get__ = _GetDependency__;
exports.__Rewire__ = _Rewire__;
exports.__set__ = _Rewire__;
exports.__ResetDependency__ = _ResetDependency__;
exports.__RewireAPI__ = _RewireAPI__;
exports['default'] = _RewireAPI__;
//# sourceMappingURL=meta.js.map
