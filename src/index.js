'use strict';

let Logger = require('./logger');
let pkg = require('../package.json');
let chalk = require('chalk');

require('bluebird').longStackTraces();

const log = Logger({
  prefix: `${chalk.green(pkg.name + '@' + pkg.version)}`
});

log.debug('Loaded main module.');

module.exports = require('./commands');
