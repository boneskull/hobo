'use strict';

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('graceful-fs'));
var path = require('path');

function isGit(dirpath) {
  return fs.stat(path.join(dirpath, '.git')).then(function (st) {
    return st.isDirectory();
  })['catch'](function () {
    return false;
  });
}

fs.isGit = isGit;
fs.home = require('user-home');

Object.defineProperty(fs, 'cwd', {
  get: function get() {
    return process.cwd();
  }
});

module.exports = fs;
