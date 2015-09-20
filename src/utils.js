'use strict';

let _ = require('lodash');
let format = require('util').format;

_.mixin({
  format: format
}, {
  chain: false
});

module.exports = _;
