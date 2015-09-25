'use strict';

let stampit = require('stampit');
let EventEmittable = stampit.convertConstructor(require('events').EventEmitter);
let _ = require('./utils');
let chalk = require('chalk');
let meta = require('./meta');

let log;

export const Logger = stampit({
  methods: {
    _teardown() {
      _(this.levels)
        .keys()
        .each((name) => {
          delete this[name];
        }, this);
    },
    _lineno(err) {
      const caller = _.first(err.stack.split('\n').slice(2));
      const matches = caller.match(/(\/[^:]+?):(\d+):\d+/);
      if (matches) {
        const path = require('path');
        const relative = path.relative(path.join(__dirname, '..'),
          matches[1]);
        return `[${relative}:${matches[2]}]`;
      }
      return '';
    },
    _setup() {
      _.each(this.levels, (level, name) => {
        this[name] = function logFunc() {
          const errorLevel = this.levels[this.level].errorLevel;
          if (level.errorLevel >= errorLevel && !this.quiet) {
            const args = [level.color.apply(null, arguments)];

            if (this.emoji) {
              args.unshift(require('node-emoji').get(level.emoji), ' ');
            }

            if (name === 'debug') {
              args.unshift(this._lineno(new Error()));
            }

            if (this.prefix) {
              args.unshift(`${this.prefix}`);
            }
            console.log.apply(console, args);
          }
          this.emit(`log:${level}`, _.format(arguments));
        };
      }, this);
    }
  },
  refs: {
    quiet: false,
    prefix: `${meta.coloredNameAndVersion}:`,
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
  init() {
    Object.defineProperties(this, {
      level: {
        get() {
          return this._level;
        },
        set(value) {
          if (this.levels[value]) {
            this._level = value;
          } else {
            throw new Error(`Invalid log level "${value}"`);
          }
        }
      },
      levels: {
        get() {
          return this._levels;
        },
        set(value) {
          this._teardown();
          this._levels = value;
          this._setup();
        }
      }
    });

    this._setup();
  }
}).compose(EventEmittable);

export default (opts) => {
  if (_.isUndefined(opts)) {
    return log || Logger();
  }
  return Logger(opts);
};
