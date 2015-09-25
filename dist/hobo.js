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

var _bindle = require('./bindle');

var _bindle2 = _interopRequireDefault(_bindle);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _meta = require('./meta');

var _meta2 = _interopRequireDefault(_meta);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var hoboDirpath = _path2['default'].join(_fs.home, '.hobo');
exports.hoboDirpath = hoboDirpath;
console.log(hoboDirpath);

var Hobo = (0, _stampit2['default'])({
  refs: {
    values: {}
  },
  props: {
    id: _meta2['default'],
    dirpath: hoboDirpath
  },
  init: function init() {
    return (0, _fs.mkdirp)(this.dirpath)['return'](this);
  },
  methods: {
    addBindle: function addBindle(id, url) {
      var bindle = (0, _bindle2['default'])({
        id: id,
        url: url
      });
      this.bindles[id] = bindle;
      return bindle;
    },
    get: function get() {
      return this.db.get.apply(this.db, arguments);
    },
    set: function set() {
      return this.db.set.apply(this.db, arguments);
    }
  }
}).compose(_store2['default']).init(function () {
  var _this = this;

  return _bluebird2['default'].map(_utils2['default'].keys(this.values), function (key) {
    return _this.db.set(key, _this.values[key]);
  })['return'](this);
});

exports['default'] = Hobo;
//# sourceMappingURL=hobo.js.map
