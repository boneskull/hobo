'use strict';

var symlink = require('./symlink');
var upgrade = require('./upgrade');
var logger = require('./../logger');
var gitignore = require('./gitignore');

function install(cwd, log) {
  log = log || logger;
  return upgrade(cwd, log).then(function execSymlink() {
    return symlink(cwd, log);
  }).then(function execGitignore() {
    return gitignore(cwd, log);
  }).then(function report() {
    log.ok('Install complete.');
  });
}

module.exports = install;
//# sourceMappingURL=install.js.map
