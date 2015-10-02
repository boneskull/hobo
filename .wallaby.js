'use strict';

var babel = require('babel');

module.exports = function wallabyConfig() {
  return {
    files: [
      'test/fixture.js',
      'src/**/*.js',
      'package.json'
    ],
    tests: [
      'test/*.spec.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    preprocessors: {
      '**/*.js': file => babel.transform(file.content, {
        sourceMap: true,
        plugins: ['babel-plugin-rewire']
      })
    },
    testFramework: 'mocha',
    debug: true,
    bootstrap: function bootstrap(wallaby) {
      var path = require('path');
      require(path.join(wallaby.projectCacheDir, 'test', 'fixture'));
    }
  };
};
