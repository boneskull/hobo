'use strict';

let Promise = require('bluebird');
let Store = require('../store');
let url = require('url');
let chalk = require('chalk');
let Command = require('./command');
let _ = require('../utils');
let parseGitConfig = Promise.promisify(require('parse-git-config'));
let githubUsername = Promise.promisify(require('github-username'));
let fs = require('../fs');
let path = require('path');
let meta = require('../meta');
const tokenUrl = 'https://github.com/settings/tokens/new';

const defaultPodName = 'default.pod';
const log = require('../logger')();

const questions = [
  {
    type: 'confirm',
    name: 'hasGitHub',
    message: `Do you have a GitHub account?`
  },
  {
    type: 'password',
    name: 'token',
    message: `Copy & paste it here:`,
    'default': () => {
      console.log(`Thanks.  Next, we'll need a personal access token.\n` +
        `Visit ${chalk.blue(tokenUrl)} and create a token with ` +
        `${chalk.blue('repo_public')} access.`);
    },
    when(answers) {
      return answers.hasGitHub;
    },
    validate(answer) {
      return /^[a-z0-9]{40}$/.test(answer) ||
        chalk.yellow('This doesn\'t appear to be a GitHub token.  It ' +
          'should be 40 alphanumeric characters.');
    }
  },
  {
    type: 'input',
    name: 'repo',
    'default': function guessUsername() {
      const done = this.async();

      parseGitConfig({
        path: path.join(fs.home, '.gitconfig')
      })
        .catch(() => {
          log.debug(`Couldn't parse .gitconfig`);
        })
        .get('user')
        .then((user) => {
          const email = _.get(user, 'email');
          if (email) {
            return githubUsername(email)
              .catch(() => {
                log.debug("Couldn't determine the GitHub username from email " +
                  `"${email}"`);
              })
              .then((username) => {
                return `${username}/${defaultPodName}`;
              });
          }
          log.debug(`Couldn't find an email address in .gitconfig`);
          return `<your-github-username>/${defaultPodName}`;
        })
        .then((value) => {
          console.log('We need to create a repository to store your ' +
            `settings.\n` +
            `This is called a ${chalk.blue('pod')}.`);
          return value;
        })
        .then(done);
    },
    message: `Where on GitHub shall we put it?`,
    when: (answers) => {
      return answers.hasGitHub && Boolean(answers.token);
    },
    filter: (answer) => {
      return url.resolve('https://github.com/', answer);
    },
    validate: (answer) => {
      return /^\w+\/.+$/.test(answer) || chalk.yellow('The repo should be ' +
          `of the format ${chalk.bold('username/repo')}.`);
    }
  },
  {
    'default': () => {
      const cfg = Configstore(meta.name, )
    }
  }
];

function setup(done) {
  console.log(chalk.green(meta.coloredNameAndVersion) + '\n');
  console.log(`Let's get you going.  You will need a GitHub account to ` +
    `start.`);
  return this.prompt(questions)
    .catch((answer) => {
      if (!answer.hasGitHub) {
        this.exit(`Gotta have GitHub to use peapod.\n` +
          `Get a free account at https://github.com.`, 1);
      }
      throw new Error('Unknown error!');
    })
    .nodeify(done);
}

module.exports = setup.bind(Command({
  name: 'setup',
  description: `Configure ${meta.capitalizedName}`
}));

if (require.main === module) {
  module.exports();
}
