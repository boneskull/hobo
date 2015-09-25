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

var pkgName = _packageJson2['default'].name;
exports.pkgName = pkgName;
var pkgNamePlural = pkgName + '\'s';
exports.pkgNamePlural = pkgNamePlural;
var pkgVersion = _packageJson2['default'].version;
exports.pkgVersion = pkgVersion;
var capitalizedPkgName = _utils2['default'].capitalize(pkgName);
exports.capitalizedPkgName = capitalizedPkgName;
var pkgNameAndVersion = capitalizedPkgName + '@' + pkgVersion;
exports.pkgNameAndVersion = pkgNameAndVersion;
var coloredPkgNameAndVersion = '' + _chalk2['default'].green(pkgNameAndVersion);
exports.coloredPkgNameAndVersion = coloredPkgNameAndVersion;
//# sourceMappingURL=meta.js.map
