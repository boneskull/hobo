'use strict';

let stampit = require('stampit');
let Configstore = stampit.convertConstructor(require('configstore'));
let path = require('path');
let git = require('git');

const Store = stampit({
  init() {
    Object.defineProperty(this, 'dirpath', {
      get() {
        return path.dirname(this.path);
      }
    });
  },
  refs: {
    pods: new Set()
  },
  methods() {

  }
})
