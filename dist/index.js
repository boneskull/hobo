'use strict';

var Logger = require('./logger');
var pkg = require('../package.json');
var chalk = require('chalk');

require('bluebird').longStackTraces();

var log = Logger({
  prefix: '' + chalk.green(pkg.name + '@' + pkg.version)
});

log.debug('Loaded main module.');

module.exports = require('./commands');
//# sourceMappingURL=index.js.map
