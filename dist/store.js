'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

var _trivialdb = require('trivialdb');

var _trivialdb2 = _interopRequireDefault(_trivialdb);

var _fs = require('./fs');

var _stamp = require('./stamp');

var _stamp2 = _interopRequireDefault(_stamp);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

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

var _trivialdb$IsLifeBindingActive = true;
var trivialdb = _trivialdb2['default'];

__$Getters__['trivialdb'] = function () {
  return _trivialdb$IsLifeBindingActive ? _trivialdb2['default'] : trivialdb;
};

__$Setters__['trivialdb'] = function (value) {
  _trivialdb$IsLifeBindingActive = false;
  trivialdb = value;
};

__$Resetters__['trivialdb'] = function () {
  _trivialdb$IsLifeBindingActive = true;
  trivialdb = _trivialdb2['default'];
};

var _mkdirp$IsLifeBindingActive = true;
var mkdirp = _fs.mkdirp;

__$Getters__['mkdirp'] = function () {
  return _mkdirp$IsLifeBindingActive ? _fs.mkdirp : mkdirp;
};

__$Setters__['mkdirp'] = function (value) {
  _mkdirp$IsLifeBindingActive = false;
  mkdirp = value;
};

__$Resetters__['mkdirp'] = function () {
  _mkdirp$IsLifeBindingActive = true;
  mkdirp = _fs.mkdirp;
};

var _Stamp$IsLifeBindingActive = true;
var Stamp = _stamp2['default'];

__$Getters__['Stamp'] = function () {
  return _Stamp$IsLifeBindingActive ? _stamp2['default'] : Stamp;
};

__$Setters__['Stamp'] = function (value) {
  _Stamp$IsLifeBindingActive = false;
  Stamp = value;
};

__$Resetters__['Stamp'] = function () {
  _Stamp$IsLifeBindingActive = true;
  Stamp = _stamp2['default'];
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

var Store = stampit({
  refs: {
    data: {}
  },
  init: function init() {
    var _this = this;

    if (!this.id) {
      return Promise.reject(new Error('id is required'));
    }
    if (!this.dirpath) {
      return Promise.reject(new Error('dirpath is required'));
    }
    return mkdirp(this.dirpath).then(function () {
      _this.db = trivialdb.db(_this.id, {
        dirpath: _this.dirpath
      });
      return Promise.map(_.keys(_this.data), function (key) {
        return _this.store(key, _this.data[key]);
      });
    })['return'](this);
  },
  methods: {
    get: function get() {
      return this.db.get.apply(this.db, arguments);
    },
    store: function store() {
      return this.db.store.apply(this.db, arguments);
    }
  }
}).compose(Stamp);

var _Store = Store;

__$Getters__['Store'] = function () {
  return Store;
};

__$Setters__['Store'] = function (value) {
  Store = value;
};

__$Resetters__['Store'] = function () {
  Store = _Store;
};

var _defaultExport = Store;

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
//# sourceMappingURL=store.js.map
