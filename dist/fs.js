'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _gracefulFs = require('graceful-fs');

var _gracefulFs2 = _interopRequireDefault(_gracefulFs);

var _mkdirp3 = require('mkdirp');

var _mkdirp4 = _interopRequireDefault(_mkdirp3);

var _emptyDir2 = require('empty-dir');

var _emptyDir3 = _interopRequireDefault(_emptyDir2);

var _userHome = require('user-home');

var _userHome2 = _interopRequireDefault(_userHome);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _canWrite3 = require('can-write');

var _canWrite4 = _interopRequireDefault(_canWrite3);

var isGit = _isGitOrig;
var canWrite = _canWriteOrig;
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

var _fs$IsLifeBindingActive = true;
var _fs = _gracefulFs2['default'];

__$Getters__['_fs'] = function () {
  return _fs$IsLifeBindingActive ? _gracefulFs2['default'] : _fs;
};

__$Setters__['_fs'] = function (value) {
  _fs$IsLifeBindingActive = false;
  _fs = value;
};

__$Resetters__['_fs'] = function () {
  _fs$IsLifeBindingActive = true;
  _fs = _gracefulFs2['default'];
};

var _mkdirp$IsLifeBindingActive = true;
var _mkdirp = _mkdirp4['default'];

__$Getters__['_mkdirp'] = function () {
  return _mkdirp$IsLifeBindingActive ? _mkdirp4['default'] : _mkdirp;
};

__$Setters__['_mkdirp'] = function (value) {
  _mkdirp$IsLifeBindingActive = false;
  _mkdirp = value;
};

__$Resetters__['_mkdirp'] = function () {
  _mkdirp$IsLifeBindingActive = true;
  _mkdirp = _mkdirp4['default'];
};

var _emptyDir$IsLifeBindingActive = true;
var _emptyDir = _emptyDir3['default'];

__$Getters__['_emptyDir'] = function () {
  return _emptyDir$IsLifeBindingActive ? _emptyDir3['default'] : _emptyDir;
};

__$Setters__['_emptyDir'] = function (value) {
  _emptyDir$IsLifeBindingActive = false;
  _emptyDir = value;
};

__$Resetters__['_emptyDir'] = function () {
  _emptyDir$IsLifeBindingActive = true;
  _emptyDir = _emptyDir3['default'];
};

var _userHome$IsLifeBindingActive = true;
var userHome = _userHome2['default'];

__$Getters__['userHome'] = function () {
  return _userHome$IsLifeBindingActive ? _userHome2['default'] : userHome;
};

__$Setters__['userHome'] = function (value) {
  _userHome$IsLifeBindingActive = false;
  userHome = value;
};

__$Resetters__['userHome'] = function () {
  _userHome$IsLifeBindingActive = true;
  userHome = _userHome2['default'];
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

var _canWrite$IsLifeBindingActive = true;
var _canWrite = _canWrite4['default'];

__$Getters__['_canWrite'] = function () {
  return _canWrite$IsLifeBindingActive ? _canWrite4['default'] : _canWrite;
};

__$Setters__['_canWrite'] = function (value) {
  _canWrite$IsLifeBindingActive = false;
  _canWrite = value;
};

__$Resetters__['_canWrite'] = function () {
  _canWrite$IsLifeBindingActive = true;
  _canWrite = _canWrite4['default'];
};

var fs = Promise.promisifyAll(_fs);
var _fs2 = fs;

__$Getters__['fs'] = function () {
  return fs;
};

__$Setters__['fs'] = function (value) {
  fs = value;
};

__$Resetters__['fs'] = function () {
  fs = _fs2;
};

var _defaultExport = fs;

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

function _isGitOrig(dirpath) {
  return fs.statAsync(_GetDependency__('path').join(dirpath, '.git')).then(function (stat) {
    return stat.isDirectory();
  })['catch'](function () {
    return false;
  });
}

var _isGit = isGit;

__$Getters__['isGit'] = function () {
  return isGit;
};

__$Setters__['isGit'] = function (value) {
  exports.isGit = isGit = value;
};

__$Resetters__['isGit'] = function () {
  exports.isGit = isGit = _isGit;
};

exports.isGit = _isGitOrig;

function _canWriteOrig(filepath) {
  return _GetDependency__('_canWrite')(filepath).then(function (result) {
    if (!result) {
      return _GetDependency__('Promise').reject(new Error('Cannot write to ' + filepath));
    }
    return _GetDependency__('Promise').resolve(true);
  });
}

var _canWrite2 = canWrite;

__$Getters__['canWrite'] = function () {
  return canWrite;
};

__$Setters__['canWrite'] = function (value) {
  exports.canWrite = canWrite = value;
};

__$Resetters__['canWrite'] = function () {
  exports.canWrite = canWrite = _canWrite2;
};

exports.canWrite = _canWriteOrig;
var home = _GetDependency__('userHome');
var _home = home;

__$Getters__['home'] = function () {
  return home;
};

__$Setters__['home'] = function (value) {
  exports.home = home = value;
};

__$Resetters__['home'] = function () {
  exports.home = home = _home;
};

exports.home = _home;
var isDirEmpty = _GetDependency__('Promise').promisify(_GetDependency__('_emptyDir'));
var _isDirEmpty = isDirEmpty;

__$Getters__['isDirEmpty'] = function () {
  return isDirEmpty;
};

__$Setters__['isDirEmpty'] = function (value) {
  exports.isDirEmpty = isDirEmpty = value;
};

__$Resetters__['isDirEmpty'] = function () {
  exports.isDirEmpty = isDirEmpty = _isDirEmpty;
};

exports.isDirEmpty = _isDirEmpty;
var mkdirp = _GetDependency__('Promise').promisify(_GetDependency__('_mkdirp'));
var _mkdirp2 = mkdirp;

__$Getters__['mkdirp'] = function () {
  return mkdirp;
};

__$Setters__['mkdirp'] = function (value) {
  exports.mkdirp = mkdirp = value;
};

__$Resetters__['mkdirp'] = function () {
  exports.mkdirp = mkdirp = _mkdirp2;
};

exports.mkdirp = _mkdirp2;
exports.__GetDependency__ = _GetDependency__;
exports.__get__ = _GetDependency__;
exports.__Rewire__ = _Rewire__;
exports.__set__ = _Rewire__;
exports.__ResetDependency__ = _ResetDependency__;
exports.__RewireAPI__ = _RewireAPI__;
//# sourceMappingURL=fs.js.map
