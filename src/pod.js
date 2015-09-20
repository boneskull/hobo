'use strict';

let Promise = require('bluebird');
let git = require('simple-git');
let stampit = require('stampit');
let path = require('path');
let _ = require('./utils');
let log = require('./logger')();
let domain = require('domain');

const defaults = {
  id: 'default',
  url: null,
  dirpath: null,
  dependencies: {},
  devDependencies: {},
  optionalDependencies: {},
  peerDependencies: {}
};

const Pod = stampit({
  refs: {
    id: 'default',
    url: null,
    dirpath: null,
    dependencies: {},
    devDependencies: {},
    optionalDependencies: {},
    peerDependencies: {}
  },
  init() {
    const _git = this._git = Promise.promisifyAll(git(this.dirpath));
    return new Promise((resolve, reject) => {
      domain.create()
        .on('error', reject)
        .run(() => {
          _git.initAsync()
            .then(resolve);
        });
    })
      .bind(this)
      .catch(function fail(err) {
        log.error(`Could not init Git repo at "${this.dirpath}"`);
        return Promise.reject(err);
      })
      .return(this);
  },
  methods: {
    toJSON() {
      return _.pick(this, (value, key) => {
        return key.charAt(0) !== '_';
      });
    }
  }
});

module.exports = Pod;
