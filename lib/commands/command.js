'use strict';

var Promise = require('bluebird');
var stampit = require('stampit');
var inquirer = Promise.promisifyAll(require('inquirer'));
var chalk = require('chalk');
var _ = require('../utils');

var Command = stampit({
  methods: {
    prompt: function prompt() {
      return inquirer.promptAsync.apply(null, arguments);
    },
    exit: function exit(message, code) {
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
  init: function init(func) {
    this.execute = func;
  }
});

module.exports = Command;
