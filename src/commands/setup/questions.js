'use strict';

import path from 'path';
import fs, {isDirEmpty} from '../../fs';
import logger from '../../logger';
import chalk from 'chalk';
import _parseGitConfig from 'parse-git-config';
import _githubUsername from 'github-username';
import Promise from 'bluebird';
import _ from '../../utils';
import Hobo, {hoboDirpath} from '../../hobo';
import url from 'url';

const parseGitConfig = Promise.promisify(_parseGitConfig);
const githubUsername = Promise.promisify(_githubUsername);
const tokenUrl = 'https://github.com/settings/tokens/new';
const defaultBindleName = 'default';
const bindleExt = 'bindle';
const log = logger();

function questions() {
  return Hobo()
    .then(function(hobo) {
      return hobo.get('gitHubToken')
        .then(function(hoboGitHubToken) {
          const hasGitHub = {
            type: 'confirm',
            name: 'hasGitHub',
            message: `Do you have a GitHub account?`,
            when: () => hoboGitHubToken
          };

          const gitHubToken = {
            type: 'password',
            name: 'gitHubToken',
            message: `Copy & paste it here:`,
            'default': () => {
              console.log(`Thanks.  Next, we'll need a personal access ` +
                `token.\n` +
                `Visit ${chalk.blue(tokenUrl)} and create a token with ` +
                `${chalk.blue('repo_public')} access.`);
            },
            when: (answers) => !hoboGitHubToken && answers.hasGitHub,
            validate(answer) {
              return true || /^[a-z0-9]{40}$/.test(answer) ||
                chalk.yellow(`This doesn't appear to be a GitHub token.  It ` +
                  `should be 40 alphanumeric characters.`);
            }
          };

          const bindleName = {
            'default': () => {
              console.log("Now we will create a configuration for you.  This " +
                `is called a ${chalk.blue('Bindle')}.`);
              return defaultBindleName;
            },
            message: 'What should it be named?',
            type: 'input',
            when: (answers) => answers.hasGitHub,
            validate(answer) {
              const result = /^[a-zA-Z0-9_.-]+$/.test(answer) ||
                'All characters must be ' +
                'alphanumeric or one of "_", ".", or "-"';
              if (result === true) {
                const done = this.async();
                const newBindlePath = path.join(hoboDirpath, 'bindles', answer);
                fs.statAsync(newBindlePath)
                  .then(function(stat) {
                    if (stat.isDirectory()) {
                      return isDirEmpty(newBindlePath)
                        .then(function(isEmpty) {
                          if (isEmpty) {
                            return result;
                          }
                          return `A bindle named "${answer}" already exists.`;
                        });
                    }
                    return `A regular file exists at path ${newBindlePath}. ` +
                      `Remove it before continuing.`;
                  }, function() {
                    return result;
                  })
                  .then(done, done);
              }
            },
            name: 'bindleName'
          };

          const gitHubRepo = {
            type: 'input',
            name: 'repo',
            'default': function guessUsername(answers) {
              const done = this.async();
              const repoName = answers.bindleName;

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
                        log.debug(`Couldn't determine the GitHub username ` +
                          `from email "${email}"`);
                      })
                      .then(username => `${username}/${repoName}.${bindleExt}`);
                  }
                  log.debug(`Couldn't find an email address in .gitconfig`);
                  return `<your-github-username>/${repoName}.${bindleExt}`;
                })
                .then((value) => {
                  console.log('We need to create a repository to store your ' +
                    `settings.`);
                  return value;
                })
                .then(done);
            },
            message: `Where on GitHub should we put it?`,
            when: (answers) => answers.hasGitHub,
            filter: (answer) => url.resolve('https://github.com/', answer),
            validate: (answer) => {
              return /^\w+\/.+$/.test(answer) ||
                chalk.yellow('The repo should be of the format ` + ' +
                  `${chalk.bold('username/repo')}.`);
            }
          };

          return [
            hasGitHub,
            gitHubToken,
            gitHubRepo,
            bindleName
          ];
        });
    });
}

export default questions;

