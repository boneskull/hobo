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

var _parseGitConfig2 = require('parse-git-config');

var _parseGitConfig3 = _interopRequireDefault(_parseGitConfig2);

var _githubUsername2 = require('github-username');

var _githubUsername3 = _interopRequireDefault(_githubUsername2);

var _meta = require('../../meta');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var _hobo = require('../../hobo');

var _hobo2 = _interopRequireDefault(_hobo);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var parseGitConfig = _bluebird2['default'].promisify(_parseGitConfig3['default']);
var githubUsername = _bluebird2['default'].promisify(_githubUsername3['default']);
var tokenUrl = 'https://github.com/settings/tokens/new';
var defaultBindleName = 'default';
var bindleExt = 'bindle';
var log = (0, _logger2['default'])();

function questions() {
  return (0, _hobo2['default'])().then(function (hobo) {
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
          console.log('Thanks.  Next, we\'ll need a personal access token.\n' + ('Visit ' + _chalk2['default'].blue(tokenUrl) + ' and create a token with ') + (_chalk2['default'].blue('repo_public') + ' access.'));
        },
        when: function when(answers) {
          return !hoboGitHubToken && answers.hasGitHub;
        },
        validate: function validate(answer) {
          return true || /^[a-z0-9]{40}$/.test(answer) || _chalk2['default'].yellow('This doesn\'t appear to be a GitHub token.  It ' + 'should be 40 alphanumeric characters.');
        }
      };

      var bindleName = {
        'default': function _default() {
          console.log("Now we will create a configuration for you.  This is " + ('called a ' + _chalk2['default'].blue('Bindle') + '.'));
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
              var newBindlePath = _path2['default'].join(_hobo.hoboDirpath, 'bindles', answer);
              _fs2['default'].statAsync(newBindlePath).then(function (stat) {
                if (stat.isDirectory()) {
                  return (0, _fs.isDirEmpty)(newBindlePath).then(function (isEmpty) {
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
            path: _path2['default'].join(_fs2['default'].home, '.gitconfig')
          })['catch'](function () {
            log.debug('Couldn\'t parse .gitconfig');
          }).get('user').then(function (user) {
            var email = _utils2['default'].get(user, 'email');
            if (email) {
              return githubUsername(email)['catch'](function () {
                log.debug("Couldn't determine the GitHub username from email " + ('"' + email + '"'));
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
          return _url2['default'].resolve('https://github.com/', answer);
        },
        validate: function validate(answer) {
          return (/^\w+\/.+$/.test(answer) || _chalk2['default'].yellow('The repo should be of the format ` + ' + (_chalk2['default'].bold('username/repo') + '.'))
          );
        }
      };

      return [hasGitHub, gitHubToken, gitHubRepo, bindleName];
    });
  });
}

exports['default'] = questions;
module.exports = exports['default'];
//# sourceMappingURL=questions.js.map
