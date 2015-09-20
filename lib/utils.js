'use strict';

var _ = require('lodash');
var format = require('util').format;

_.mixin({
  format: format
}, {
  chain: false
});

module.exports = _;
