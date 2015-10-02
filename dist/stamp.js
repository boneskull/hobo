'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

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

var Stamp = stampit.init(function (_ref) {
  var stamp = _ref.stamp;

  if (!stamp.fixed.methods.getStamp) {
    stamp.fixed.methods.getStamp = function () {
      return stamp;
    };
  }
});

var _Stamp = Stamp;

__$Getters__['Stamp'] = function () {
  return Stamp;
};

__$Setters__['Stamp'] = function (value) {
  Stamp = value;
};

__$Resetters__['Stamp'] = function () {
  Stamp = _Stamp;
};

var _defaultExport = Stamp;

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
//# sourceMappingURL=stamp.js.map
