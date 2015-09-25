'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isGit = isGit;
exports.canWrite = canWrite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _gracefulFs = require('graceful-fs');

var _gracefulFs2 = _interopRequireDefault(_gracefulFs);

var _mkdirp2 = require('mkdirp');

var _mkdirp3 = _interopRequireDefault(_mkdirp2);

var _emptyDir2 = require('empty-dir');

var _emptyDir3 = _interopRequireDefault(_emptyDir2);

var _userHome = require('user-home');

var _userHome2 = _interopRequireDefault(_userHome);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _canWrite2 = require('can-write');

var _canWrite3 = _interopRequireDefault(_canWrite2);

var fs = _bluebird2['default'].promisifyAll(_gracefulFs2['default']);
exports['default'] = fs;

function isGit(dirpath) {
  return fs.statAsync(_path2['default'].join(dirpath, '.git')).then(function (stat) {
    return stat.isDirectory();
  })['catch'](function () {
    return false;
  });
}

function canWrite(filepath) {
  return (0, _canWrite3['default'])(filepath).then(function (result) {
    if (!result) {
      return _bluebird2['default'].reject(new Error('Cannot write to ' + filepath));
    }
    return _bluebird2['default'].resolve(true);
  });
}

var home = _userHome2['default'];
exports.home = home;
var isDirEmpty = _bluebird2['default'].promisify(_emptyDir3['default']);
exports.isDirEmpty = isDirEmpty;
var mkdirp = _bluebird2['default'].promisify(_mkdirp3['default']);
exports.mkdirp = mkdirp;
//# sourceMappingURL=fs.js.map
