'use strict';

var updateGitignore = _updateGitignoreOrig;
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

var gitignoreParser = require('gitignore-parser');
var _gitignoreParser = gitignoreParser;

__$Getters__['gitignoreParser'] = function () {
  return gitignoreParser;
};

__$Setters__['gitignoreParser'] = function (value) {
  gitignoreParser = value;
};

__$Resetters__['gitignoreParser'] = function () {
  gitignoreParser = _gitignoreParser;
};

var fs = require('../fs');
var _fs = fs;

__$Getters__['fs'] = function () {
  return fs;
};

__$Setters__['fs'] = function (value) {
  fs = value;
};

__$Resetters__['fs'] = function () {
  fs = _fs;
};

var pkg = require('../../package.json');
var _pkg = pkg;

__$Getters__['pkg'] = function () {
  return pkg;
};

__$Setters__['pkg'] = function (value) {
  pkg = value;
};

__$Resetters__['pkg'] = function () {
  pkg = _pkg;
};

var path = require('path');
var _path = path;

__$Getters__['path'] = function () {
  return path;
};

__$Setters__['path'] = function (value) {
  path = value;
};

__$Resetters__['path'] = function () {
  path = _path;
};

var _ = require('../utils');

var _2 = _;

__$Getters__['_'] = function () {
  return _;
};

__$Setters__['_'] = function (value) {
  _ = value;
};

__$Resetters__['_'] = function () {
  _ = _2;
};

var GITIGNORE = '.gitignore';
var _GITIGNORE = GITIGNORE;

__$Getters__['GITIGNORE'] = function () {
  return GITIGNORE;
};

__$Setters__['GITIGNORE'] = function (value) {
  GITIGNORE = value;
};

__$Resetters__['GITIGNORE'] = function () {
  GITIGNORE = _GITIGNORE;
};

var log = require('../logger')();

var _log = log;

__$Getters__['log'] = function () {
  return log;
};

__$Setters__['log'] = function (value) {
  log = value;
};

__$Resetters__['log'] = function () {
  log = _log;
};

function _updateGitignoreOrig(cwd) {
  cwd = cwd || fs.cwd;

  return fs.isGit(cwd).then(function (result) {
    if (result) {
      var _ret = (function () {
        var symlinks = pkg.config['digs-dev'].symlink;
        var gitignorePath = path.join(cwd, GITIGNORE);
        return {
          v: fs.readFileAsync(gitignorePath, 'utf-8').then(function getInfo(contents) {
            var gitignore = gitignoreParser.compile(contents);
            var newEntries = _.reject(symlinks, gitignore.denies);
            if (newEntries.length) {
              var beforeLen = 0;
              var afterLen = 0;

              contents = _(contents).split('\n').tap(function getBeforeLines(lines) {
                beforeLen = lines.length;
              }).concat(newEntries).tap(function getAfterLines(lines) {
                afterLen = lines.length;
              }).join('\n');

              return {
                contents: contents,
                appended: afterLen - beforeLen
              };
            }
            log.ok(gitignorePath + ' up-to-date; nothing to do');
          }).error(function createGitignore() {
            log.warn(gitignorePath + ' does not exist.  Creating...');
            return fs.readFileAsync(path.join(__dirname, 'templates', 'gitignore'), 'utf-8').then(function write(contents) {
              return fs.writeFileAsync(gitignorePath, contents);
            }).then(function returnSymlinks() {
              log.ok('Created ' + gitignorePath);
              return {
                contents: symlinks.join('\n'),
                appended: symlinks.length
              };
            });
          }).then(function write(obj) {
            if (obj) {
              return fs.writeFileAsync(gitignorePath, obj.contents).then(function report() {
                log.ok('Appended ' + obj.appended + ' entries to' + ('' + gitignorePath));
              });
            }
          })
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
    log.info(cwd + ' is not under version control; skipping.');
  });
}

var _updateGitignore = updateGitignore;

__$Getters__['updateGitignore'] = function () {
  return updateGitignore;
};

__$Setters__['updateGitignore'] = function (value) {
  updateGitignore = value;
};

__$Resetters__['updateGitignore'] = function () {
  updateGitignore = _updateGitignore;
};

module.exports = updateGitignore;

if (typeof module.exports === 'object' || typeof module.exports === 'function') {
  Object.defineProperty(module.exports, '__Rewire__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__set__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__ResetDependency__', {
    'value': _ResetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__GetDependency__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__get__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__RewireAPI__', {
    'value': _RewireAPI__,
    'enumerable': false,
    'configurable': true
  });
}
//# sourceMappingURL=gitignore.js.map
