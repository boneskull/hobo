'use strict';

var babel = require('babel');
var fs = require('fs');

module.exports = function wallabyConfig(wallaby) {
  var fixture = fs.readFileSync(wallaby.localProjectDir +
    'test/fixture.js',
    'utf8');

  return {
    files: [
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
      'test/*.spec.js': file => fixture + file.content,
      '**/*.js': file => babel.transform(file.content, {
        sourceMap: true,
        plugins: ['babel-plugin-rewire']
      })
    },
    testFramework: 'mocha',
    debug: true,
    recycle: true
  };
};
