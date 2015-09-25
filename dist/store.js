'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

var _trivialdb = require('trivialdb');

var _trivialdb2 = _interopRequireDefault(_trivialdb);

var Store = (0, _stampit2['default'])({
  init: function init() {
    this.db = _trivialdb2['default'].db(this.id, {
      rootPath: this.rootPath
    });
  },
  methods: {
    get: function get() {
      return this.db.get.apply(this.db, arguments);
    },
    set: function set() {
      return this.db.set.apply(this.db, arguments);
    }
  }
});

exports['default'] = Store;
module.exports = exports['default'];
//# sourceMappingURL=store.js.map
