'use strict';

var stampit = require('stampit');
var Configstore = stampit.convertConstructor(require('configstore'));
var path = require('path');
var git = require('git');

var Store = stampit({
  init: function init() {
    Object.defineProperty(this, 'dirpath', {
      get: function get() {
        return path.dirname(this.path);
      }
    });
  },
  refs: {
    pods: new Set()
  },
  methods: function methods() {}
});
