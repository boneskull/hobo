'use strict';

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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var defaults = {
  id: 'default',
  dirpath: null,
  store: null
};

var Bindle = (0, _stampit2['default'])({
  'static': {
    defaults: defaults
  },
  refs: defaults,
  init: function init() {
    var _git = this._git = _bluebird2['default'].promisifyAll((0, _simpleGit2['default'])(this.dirpath));

    return (0, _fs.mkdirp)(this.dirpath).bind(this).then(function () {
      return (0, _fs.isGit)(this.dirpath);
    }).then(function (result) {
      if (!result) {
        return new _bluebird2['default'](function (resolve, reject) {
          _domain2['default'].create().on('error', reject).run(function () {
            _git.initAsync().then(resolve);
          });
        });
      }
    }).then(function () {
      this.store = (0, _store2['default'])({
        id: 'bindle',
        rootPath: this.dirpath
      });
    });
  }
});

module.exports = Bindle;
//# sourceMappingURL=bindle.js.map
