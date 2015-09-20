'use strict';

let _ = require('../utils');

const log = require('../logger')();

function distill(opts) {
  return _.pick(opts, (value, name) => {
    return name.length > 1;
  });
}

function execute(command, argv) {
  log.verbose(`Executing command "${command}"`);
  return execute[command](argv._, distill(argv));
}

execute.symlink = require('./symlink');
execute.install = require('./install');
execute.upgrade = require('./upgrade');
execute.gitignore = require('./gitignore');

module.exports = execute;
