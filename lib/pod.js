'use strict';

var Promise = require('bluebird');
var git = require('simple-git');
var stampit = require('stampit');
var path = require('path');
var _ = require('./utils');
var log = require('./logger')();
var domain = require('domain');

var Pod = stampit({
  refs: {
    id: 'default',
    url: null,
    dirpath: null,
    dependencies: {},
    devDependencies: {},
    optionalDependencies: {},
    peerDependencies: {}
  },
  init: function init() {
    var _git = this._git = Promise.promisifyAll(git(this.dirpath));
    return new Promise(function (resolve, reject) {
      domain.create().on('error', reject).run(function () {
        _git.initAsync().then(resolve);
      });
    }).bind(this)['catch'](function fail(err) {
      log.error('Could not init Git repo at "' + this.dirpath + '"');
      return Promise.reject(err);
    })['return'](this);
  },
  methods: {
    toJSON: function toJSON() {
      return _.pick(this, function (value, key) {
        return key.charAt(0) !== '_';
      });
    }
  }
});

module.exports = Pod;
