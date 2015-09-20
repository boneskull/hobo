'use strict';

var stampit = require('stampit');
var EventEmittable = stampit.convertConstructor(require('events').EventEmitter);
var _ = require('./utils');
var chalk = require('chalk');
var meta = require('./meta');
var log = undefined;

var Logger = stampit({
  methods: {
    _teardown: function _teardown() {
      var _this = this;

      _(this.levels).keys().each(function (name) {
        delete _this[name];
      }, this);
    },
    _lineno: function _lineno(err) {
      var caller = _.first(err.stack.split('\n').slice(2));
      var matches = caller.match(/(\/[^:]+?):(\d+):\d+/);
      if (matches) {
        var path = require('path');
        var relative = path.relative(path.join(__dirname, '..'), matches[1]);
        return '[' + relative + ':' + matches[2] + ']';
      }
      return '';
    },
    _setup: function _setup() {
      var _this2 = this;

      _.each(this.levels, function (level, name) {
        _this2[name] = function logFunc() {
          var errorLevel = this.levels[this.level].errorLevel;
          if (level.errorLevel >= errorLevel && !this.quiet) {
            var args = [level.color.apply(null, arguments)];

            if (this.emoji) {
              args.unshift(require('node-emoji').get(level.emoji), ' ');
            }

            if (name === 'debug') {
              args.unshift(this._lineno(new Error()));
            }

            if (this.prefix) {
              args.unshift('' + this.prefix);
            }
            console.log.apply(console, args);
          }
          this.emit('log:' + level, _.format(arguments));
        };
      }, this);
    }
  },
  refs: {
    quiet: false,
    prefix: meta.coloredNameAndVersion + ':',
    emoji: false,
    _level: 'debug',
    _levels: {
      debug: {
        color: chalk.dim,
        emoji: 'beetle',
        errorLevel: 0
      },
      log: {
        color: chalk.white,
        emoji: 'point_right',
        errorLevel: 1
      },
      info: {
        color: chalk.blue,
        emoji: 'bulb',
        errorLevel: 2
      },
      ok: {
        color: chalk.green,
        emoji: 'ok_hand',
        errorLevel: 3
      },
      warn: {
        color: chalk.yellow,
        emoji: 'warning',
        errorLevel: 4
      },
      error: {
        color: chalk.red,
        emoji: 'exclamation',
        errorLevel: 5
      }
    }
  },
  init: function init() {
    Object.defineProperties(this, {
      level: {
        get: function get() {
          return this._level;
        },
        set: function set(value) {
          if (this.levels[value]) {
            this._level = value;
          } else {
            throw new Error('Invalid log level "' + value + '"');
          }
        }
      },
      levels: {
        get: function get() {
          return this._levels;
        },
        set: function set(value) {
          this._teardown();
          this._levels = value;
          this._setup();
        }
      }
    });

    this._setup();
    if (log) {
      return _.extend(this, log);
    }
    log = this;
  }
}).compose(EventEmittable);

module.exports = Logger;
