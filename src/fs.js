'use strict';

import Promise from 'bluebird';
import _fs from 'graceful-fs';
import _mkdirp from 'mkdirp';
import _emptyDir from 'empty-dir';
import userHome from 'user-home';
import path from 'path';
import _canWrite from 'can-write';


const fs = Promise.promisifyAll(_fs);
export default fs;

export function isGit(dirpath) {
  return fs.statAsync(path.join(dirpath, '.git'))
    .then((stat) => {
      return stat.isDirectory();
    })
    .catch(() => {
      return false;
    });
}

export function canWrite(filepath) {
  return _canWrite(filepath)
    .then(function(result) {
      if (!result) {
        return Promise.reject(new Error(`Cannot write to ${filepath}`));
      }
      return Promise.resolve(true);
    });
}
export const home = userHome;
export const isDirEmpty = Promise.promisify(_emptyDir);
export const mkdirp = Promise.promisify(_mkdirp);
