'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var __$Getters__ = [];
var __$Setters__ = [];
var __$Resetters__ = [];

function _GetDependency__(name) {
  return __$Getters__[name]();
}

function _Rewire__(name, value) {
  __$Setters__[name](value);
}

function _ResetDependency__(name) {
  __$Resetters__[name]();
}

var _RewireAPI__ = {
  '__GetDependency__': _GetDependency__,
  '__get__': _GetDependency__,
  '__Rewire__': _Rewire__,
  '__set__': _Rewire__,
  '__ResetDependency__': _ResetDependency__
};
'use strict';

var stampit = require('stampit');
var _stampit = stampit;

__$Getters__['stampit'] = function () {
  return stampit;
};

__$Setters__['stampit'] = function (value) {
  stampit = value;
};

__$Resetters__['stampit'] = function () {
  stampit = _stampit;
};

var EventEmittable = stampit.convertConstructor(require('events').EventEmitter);
var _EventEmittable = EventEmittable;

__$Getters__['EventEmittable'] = function () {
  return EventEmittable;
};

__$Setters__['EventEmittable'] = function (value) {
  EventEmittable = value;
};

__$Resetters__['EventEmittable'] = function () {
  EventEmittable = _EventEmittable;
};

var _ = require('./utils');
var _2 = _;

__$Getters__['_'] = function () {
  return _;
};

__$Setters__['_'] = function (value) {
  _ = value;
};

__$Resetters__['_'] = function () {
  _ = _2;
};

var chalk = require('chalk');
var _chalk = chalk;

__$Getters__['chalk'] = function () {
  return chalk;
};

__$Setters__['chalk'] = function (value) {
  chalk = value;
};

__$Resetters__['chalk'] = function () {
  chalk = _chalk;
};

var meta = require('./meta');

var _meta = meta;

__$Getters__['meta'] = function () {
  return meta;
};

__$Setters__['meta'] = function (value) {
  meta = value;
};

__$Resetters__['meta'] = function () {
  meta = _meta;
};

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
  }
}).compose(EventEmittable);

var _Logger = Logger;

__$Getters__['Logger'] = function () {
  return Logger;
};

__$Setters__['Logger'] = function (value) {
  exports.Logger = Logger = value;
};

__$Resetters__['Logger'] = function () {
  exports.Logger = Logger = _Logger;
};

exports.Logger = _Logger;

var _defaultExport = function _defaultExport(opts) {
  if (_.isUndefined(opts)) {
    return log || Logger();
  }
  return Logger(opts);
};

if ((typeof _defaultExport === 'object' || typeof _defaultExport === 'function') && Object.isExtensible(_defaultExport)) {
  Object.defineProperty(_defaultExport, '__Rewire__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__set__', {
    'value': _Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__ResetDependency__', {
    'value': _ResetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__GetDependency__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__get__', {
    'value': _GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(_defaultExport, '__RewireAPI__', {
    'value': _RewireAPI__,
    'enumerable': false,
    'configurable': true
  });
}

exports['default'] = _defaultExport;
exports.__GetDependency__ = _GetDependency__;
exports.__get__ = _GetDependency__;
exports.__Rewire__ = _Rewire__;
exports.__set__ = _Rewire__;
exports.__ResetDependency__ = _ResetDependency__;
exports.__RewireAPI__ = _RewireAPI__;
//# sourceMappingURL=logger.js.map
