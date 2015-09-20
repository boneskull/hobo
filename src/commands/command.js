'use strict';

let Promise = require('bluebird');
let stampit = require('stampit');
let inquirer = Promise.promisifyAll(require('inquirer'));
let chalk = require('chalk');
let _ = require('../utils');

const Command = stampit({
  methods: {
    prompt() {
      return inquirer.promptAsync.apply(null, arguments);
    },
    exit(message, code) {
      if (_.isString(message)) {
        if (code) {
          message = chalk.red(message);
        }
        console.log(message);
      }

      /* eslint no-process-exit:0 */
      process.exit(code);
    }
  },
  init(func) {
    this.execute = func;
  }
});

module.exports = Command;
