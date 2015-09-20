'use strict';

var Promise = require('bluebird');
var stampit = require('stampit');
var Configstore = stampit.convertConstructor(require('configstore'));
var url = require('url');
var chalk = require('chalk');
var Command = require('./command');
var _ = require('../utils');
var parseGitConfig = Promise.promisify(require('parse-git-config'));
var githubUsername = Promise.promisify(require('github-username'));
var fs = require('../fs');
var path = require('path');
var meta = require('../meta');
var tokenUrl = 'https://github.com/settings/tokens/new';

var defaultPodName = 'default.pod';
var log = require('../logger')();

var questions = [{
  type: 'confirm',
  name: 'hasGitHub',
  message: 'Do you have a GitHub account?'
}, {
  type: 'password',
  name: 'token',
  message: 'Copy & paste it here:',
  'default': function _default() {
    console.log('Thanks.  Next, we\'ll need a personal access token.\n' + ('Visit ' + chalk.blue(tokenUrl) + ' and create a token with ') + (chalk.blue('repo_public') + ' access.'));
  },
  when: function when(answers) {
    return answers.hasGitHub;
  },
  validate: function validate(answer) {
    return (/^[a-z0-9]{40}$/.test(answer) || chalk.yellow('This doesn\'t appear to be a GitHub token.  It ' + 'should be 40 alphanumeric characters.')
    );
  }
}, {
  type: 'input',
  name: 'repo',
  'default': function guessUsername() {
    var done = this.async();

    parseGitConfig({
      path: path.join(fs.home, '.gitconfig')
    })['catch'](function () {
      log.debug('Couldn\'t parse .gitconfig');
    }).get('user').then(function (user) {
      var email = _.get(user, 'email');
      if (email) {
        return githubUsername(email)['catch'](function () {
          log.debug("Couldn't determine the GitHub username from email " + ('"' + email + '"'));
        }).then(function (username) {
          return username + '/' + defaultPodName;
        });
      }
      log.debug('Couldn\'t find an email address in .gitconfig');
      return '<your-github-username>/' + defaultPodName;
    }).then(function (value) {
      console.log('We need to create a repository to store your ' + 'settings.\n' + ('This is called a ' + chalk.blue('pod') + '.'));
      return value;
    }).then(done);
  },
  message: 'Where on GitHub shall we put it?',
  when: function when(answers) {
    return answers.hasGitHub && Boolean(answers.token);
  },
  filter: function filter(answer) {
    return url.resolve('https://github.com/', answer);
  },
  validate: function validate(answer) {
    return (/^\w+\/.+$/.test(answer) || chalk.yellow('The repo should be ' + ('of the format ' + chalk.bold('username/repo') + '.'))
    );
  }
}];

function setup(done) {
  var _this = this;

  console.log(chalk.green(meta.coloredNameAndVersion) + '\n');
  console.log('Let\'s get you going.  You will need a GitHub account to ' + 'start.');
  return this.prompt(questions)['catch'](function (answer) {
    if (!answer.hasGitHub) {
      _this.exit('Gotta have GitHub to use peapod.\n' + 'Get a free account at https://github.com.', 1);
    }
    throw new Error('Unknown error!');
  }).nodeify(done);
}

module.exports = setup.bind(Command({
  name: 'setup',
  description: 'Configure ' + meta.capitalizedName
}));

if (require.main === module) {
  module.exports();
}
