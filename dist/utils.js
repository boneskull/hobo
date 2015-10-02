'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

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

var _$IsLifeBindingActive = true;
var _ = _lodash2['default'];

__$Getters__['_'] = function () {
  return _$IsLifeBindingActive ? _lodash2['default'] : _;
};

__$Setters__['_'] = function (value) {
  _$IsLifeBindingActive = false;
  _ = value;
};

__$Resetters__['_'] = function () {
  _$IsLifeBindingActive = true;
  _ = _lodash2['default'];
};

var _format$IsLifeBindingActive = true;
var format = _util2['default'];

__$Getters__['format'] = function () {
  return _format$IsLifeBindingActive ? _util2['default'] : format;
};

__$Setters__['format'] = function (value) {
  _format$IsLifeBindingActive = false;
  format = value;
};

__$Resetters__['format'] = function () {
  _format$IsLifeBindingActive = true;
  format = _util2['default'];
};

_GetDependency__('_').mixin({
  format: _GetDependency__('format')
}, {
  chain: false
});

var _defaultExport = _GetDependency__('_');

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
module.exports = exports['default'];
//# sourceMappingURL=utils.js.map
