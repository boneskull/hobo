'use strict';

let Promise = require('bluebird');
let fs = Promise.promisifyAll(require('graceful-fs'));
let path = require('path');

function isGit(dirpath) {
  return fs.stat(path.join(dirpath, '.git'))
    .then((st) => {
      return st.isDirectory();
    })
    .catch(() => {
      return false;
    });
}

fs.isGit = isGit;
fs.home = require('user-home');

Object.defineProperty(fs, 'cwd', {
  get: () => {
    return process.cwd();
  }
});

module.exports = fs;
