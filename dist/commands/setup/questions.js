'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('../../fs');

var _fs2 = _interopRequireDefault(_fs);

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _parseGitConfig3 = require('parse-git-config');

var _parseGitConfig4 = _interopRequireDefault(_parseGitConfig3);

var _githubUsername3 = require('github-username');

var _githubUsername4 = _interopRequireDefault(_githubUsername3);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var _hobo = require('../../hobo');

var _hobo2 = _interopRequireDefault(_hobo);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var questions = _questionsOrig;
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

var _fs$IsLifeBindingActive = true;
var fs = _fs2['default'];
var _isDirEmpty$IsLifeBindingActive = true;
var isDirEmpty = _fs.isDirEmpty;

__$Getters__['fs'] = function () {
  return _fs$IsLifeBindingActive ? _fs2['default'] : fs;
};

__$Setters__['fs'] = function (value) {
  _fs$IsLifeBindingActive = false;
  fs = value;
};

__$Resetters__['fs'] = function () {
  _fs$IsLifeBindingActive = true;
  fs = _fs2['default'];
};

__$Getters__['isDirEmpty'] = function () {
  return _isDirEmpty$IsLifeBindingActive ? _fs.isDirEmpty : isDirEmpty;
};

__$Setters__['isDirEmpty'] = function (value) {
  _isDirEmpty$IsLifeBindingActive = false;
  isDirEmpty = value;
};

__$Resetters__['isDirEmpty'] = function () {
  _isDirEmpty$IsLifeBindingActive = true;
  isDirEmpty = _fs.isDirEmpty;
};

var _logger$IsLifeBindingActive = true;
var logger = _logger2['default'];

__$Getters__['logger'] = function () {
  return _logger$IsLifeBindingActive ? _logger2['default'] : logger;
};

__$Setters__['logger'] = function (value) {
  _logger$IsLifeBindingActive = false;
  logger = value;
};

__$Resetters__['logger'] = function () {
  _logger$IsLifeBindingActive = true;
  logger = _logger2['default'];
};

var _chalk$IsLifeBindingActive = true;
var chalk = _chalk2['default'];

__$Getters__['chalk'] = function () {
  return _chalk$IsLifeBindingActive ? _chalk2['default'] : chalk;
};

__$Setters__['chalk'] = function (value) {
  _chalk$IsLifeBindingActive = false;
  chalk = value;
};

__$Resetters__['chalk'] = function () {
  _chalk$IsLifeBindingActive = true;
  chalk = _chalk2['default'];
};

var _parseGitConfig$IsLifeBindingActive = true;
var _parseGitConfig = _parseGitConfig4['default'];

__$Getters__['_parseGitConfig'] = function () {
  return _parseGitConfig$IsLifeBindingActive ? _parseGitConfig4['default'] : _parseGitConfig;
};

__$Setters__['_parseGitConfig'] = function (value) {
  _parseGitConfig$IsLifeBindingActive = false;
  _parseGitConfig = value;
};

__$Resetters__['_parseGitConfig'] = function () {
  _parseGitConfig$IsLifeBindingActive = true;
  _parseGitConfig = _parseGitConfig4['default'];
};

var _githubUsername$IsLifeBindingActive = true;
var _githubUsername = _githubUsername4['default'];

__$Getters__['_githubUsername'] = function () {
  return _githubUsername$IsLifeBindingActive ? _githubUsername4['default'] : _githubUsername;
};

__$Setters__['_githubUsername'] = function (value) {
  _githubUsername$IsLifeBindingActive = false;
  _githubUsername = value;
};

__$Resetters__['_githubUsername'] = function () {
  _githubUsername$IsLifeBindingActive = true;
  _githubUsername = _githubUsername4['default'];
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

var _Hobo$IsLifeBindingActive = true;
var Hobo = _hobo2['default'];
var _hoboDirpath$IsLifeBindingActive = true;
var hoboDirpath = _hobo.hoboDirpath;

__$Getters__['Hobo'] = function () {
  return _Hobo$IsLifeBindingActive ? _hobo2['default'] : Hobo;
};

__$Setters__['Hobo'] = function (value) {
  _Hobo$IsLifeBindingActive = false;
  Hobo = value;
};

__$Resetters__['Hobo'] = function () {
  _Hobo$IsLifeBindingActive = true;
  Hobo = _hobo2['default'];
};

__$Getters__['hoboDirpath'] = function () {
  return _hoboDirpath$IsLifeBindingActive ? _hobo.hoboDirpath : hoboDirpath;
};

__$Setters__['hoboDirpath'] = function (value) {
  _hoboDirpath$IsLifeBindingActive = false;
  hoboDirpath = value;
};

__$Resetters__['hoboDirpath'] = function () {
  _hoboDirpath$IsLifeBindingActive = true;
  hoboDirpath = _hobo.hoboDirpath;
};

var _url$IsLifeBindingActive = true;
var url = _url2['default'];

__$Getters__['url'] = function () {
  return _url$IsLifeBindingActive ? _url2['default'] : url;
};

__$Setters__['url'] = function (value) {
  _url$IsLifeBindingActive = false;
  url = value;
};

__$Resetters__['url'] = function () {
  _url$IsLifeBindingActive = true;
  url = _url2['default'];
};

var parseGitConfig = Promise.promisify(_parseGitConfig);
var _parseGitConfig2 = parseGitConfig;

__$Getters__['parseGitConfig'] = function () {
  return parseGitConfig;
};

__$Setters__['parseGitConfig'] = function (value) {
  parseGitConfig = value;
};

__$Resetters__['parseGitConfig'] = function () {
  parseGitConfig = _parseGitConfig2;
};

var githubUsername = Promise.promisify(_githubUsername);
var _githubUsername2 = githubUsername;

__$Getters__['githubUsername'] = function () {
  return githubUsername;
};

__$Setters__['githubUsername'] = function (value) {
  githubUsername = value;
};

__$Resetters__['githubUsername'] = function () {
  githubUsername = _githubUsername2;
};

var tokenUrl = 'https://github.com/settings/tokens/new';
var _tokenUrl = tokenUrl;

__$Getters__['tokenUrl'] = function () {
  return tokenUrl;
};

__$Setters__['tokenUrl'] = function (value) {
  tokenUrl = value;
};

__$Resetters__['tokenUrl'] = function () {
  tokenUrl = _tokenUrl;
};

var defaultBindleName = 'default';
var _defaultBindleName = defaultBindleName;

__$Getters__['defaultBindleName'] = function () {
  return defaultBindleName;
};

__$Setters__['defaultBindleName'] = function (value) {
  defaultBindleName = value;
};

__$Resetters__['defaultBindleName'] = function () {
  defaultBindleName = _defaultBindleName;
};

var bindleExt = 'bindle';
var _bindleExt = bindleExt;

__$Getters__['bindleExt'] = function () {
  return bindleExt;
};

__$Setters__['bindleExt'] = function (value) {
  bindleExt = value;
};

__$Resetters__['bindleExt'] = function () {
  bindleExt = _bindleExt;
};

var log = logger();

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

function _questionsOrig() {
  return _GetDependency__('Hobo')().then(function (hobo) {
    return hobo.get('gitHubToken').then(function (hoboGitHubToken) {
      var hasGitHub = {
        type: 'confirm',
        name: 'hasGitHub',
        message: 'Do you have a GitHub account?',
        when: function when() {
          return hoboGitHubToken;
        }
      };

      var gitHubToken = {
        type: 'password',
        name: 'gitHubToken',
        message: 'Copy & paste it here:',
        'default': function _default() {
          console.log('Thanks.  Next, we\'ll need a personal access ' + 'token.\n' + ('Visit ' + _GetDependency__('chalk').blue(tokenUrl) + ' and create a token with ') + (_GetDependency__('chalk').blue('repo_public') + ' access.'));
        },
        when: function when(answers) {
          return !hoboGitHubToken && answers.hasGitHub;
        },
        validate: function validate(answer) {
          return true || /^[a-z0-9]{40}$/.test(answer) || _GetDependency__('chalk').yellow('This doesn\'t appear to be a GitHub token.  It ' + 'should be 40 alphanumeric characters.');
        }
      };

      var bindleName = {
        'default': function _default() {
          console.log("Now we will create a configuration for you.  This " + ('is called a ' + _GetDependency__('chalk').blue('Bindle') + '.'));
          return defaultBindleName;
        },
        message: 'What should it be named?',
        type: 'input',
        when: function when(answers) {
          return answers.hasGitHub;
        },
        validate: function validate(answer) {
          var _this = this;

          var result = /^[a-zA-Z0-9_.-]+$/.test(answer) || 'All characters must be ' + 'alphanumeric or one of "_", ".", or "-"';
          if (result === true) {
            (function () {
              var done = _this.async();
              var newBindlePath = _GetDependency__('path').join(_GetDependency__('hoboDirpath'), 'bindles', answer);
              _GetDependency__('fs').statAsync(newBindlePath).then(function (stat) {
                if (stat.isDirectory()) {
                  return _GetDependency__('isDirEmpty')(newBindlePath).then(function (isEmpty) {
                    if (isEmpty) {
                      return result;
                    }
                    return 'A bindle named "' + answer + '" already exists.';
                  });
                }
                return 'A regular file exists at path ' + newBindlePath + '. ' + 'Remove it before continuing.';
              }, function () {
                return result;
              }).then(done, done);
            })();
          }
        },
        name: 'bindleName'
      };

      var gitHubRepo = {
        type: 'input',
        name: 'repo',
        'default': function guessUsername(answers) {
          var done = this.async();
          var repoName = answers.bindleName;

          parseGitConfig({
            path: _GetDependency__('path').join(_GetDependency__('fs').home, '.gitconfig')
          })['catch'](function () {
            log.debug('Couldn\'t parse .gitconfig');
          }).get('user').then(function (user) {
            var email = _GetDependency__('_').get(user, 'email');
            if (email) {
              return githubUsername(email)['catch'](function () {
                log.debug('Couldn\'t determine the GitHub username ' + ('from email "' + email + '"'));
              }).then(function (username) {
                return username + '/' + repoName + '.' + bindleExt;
              });
            }
            log.debug('Couldn\'t find an email address in .gitconfig');
            return '<your-github-username>/' + repoName + '.' + bindleExt;
          }).then(function (value) {
            console.log('We need to create a repository to store your ' + 'settings.');
            return value;
          }).then(done);
        },
        message: 'Where on GitHub should we put it?',
        when: function when(answers) {
          return answers.hasGitHub;
        },
        filter: function filter(answer) {
          return _GetDependency__('url').resolve('https://github.com/', answer);
        },
        validate: function validate(answer) {
          return (/^\w+\/.+$/.test(answer) || _GetDependency__('chalk').yellow('The repo should be of the format ` + ' + (_GetDependency__('chalk').bold('username/repo') + '.'))
          );
        }
      };

      return [hasGitHub, gitHubToken, gitHubRepo, bindleName];
    });
  });
}

var _questions = questions;

__$Getters__['questions'] = function () {
  return questions;
};

__$Setters__['questions'] = function (value) {
  questions = value;
};

__$Resetters__['questions'] = function () {
  questions = _questions;
};

var _defaultExport = questions;

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
//# sourceMappingURL=questions.js.map
