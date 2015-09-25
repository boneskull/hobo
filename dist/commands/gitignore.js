'use strict';

var gitignoreParser = require('gitignore-parser');
var fs = require('../fs');
var pkg = require('../../package.json');
var path = require('path');
var _ = require('../utils');

var GITIGNORE = '.gitignore';
var log = require('../logger')();

function updateGitignore(cwd) {
  cwd = cwd || fs.cwd;

  return fs.isGit(cwd).then(function (result) {
    if (result) {
      var _ret = (function () {
        var symlinks = pkg.config['digs-dev'].symlink;
        var gitignorePath = path.join(cwd, GITIGNORE);
        return {
          v: fs.readFileAsync(gitignorePath, 'utf-8').then(function getInfo(contents) {
            var gitignore = gitignoreParser.compile(contents);
            var newEntries = _.reject(symlinks, gitignore.denies);
            if (newEntries.length) {
              var beforeLen = 0;
              var afterLen = 0;

              contents = _(contents).split('\n').tap(function getBeforeLines(lines) {
                beforeLen = lines.length;
              }).concat(newEntries).tap(function getAfterLines(lines) {
                afterLen = lines.length;
              }).join('\n');

              return {
                contents: contents,
                appended: afterLen - beforeLen
              };
            }
            log.ok(gitignorePath + ' up-to-date; nothing to do');
          }).error(function createGitignore() {
            log.warn(gitignorePath + ' does not exist.  Creating...');
            return fs.readFileAsync(path.join(__dirname, 'templates', 'gitignore'), 'utf-8').then(function write(contents) {
              return fs.writeFileAsync(gitignorePath, contents);
            }).then(function returnSymlinks() {
              log.ok('Created ' + gitignorePath);
              return {
                contents: symlinks.join('\n'),
                appended: symlinks.length
              };
            });
          }).then(function write(obj) {
            if (obj) {
              return fs.writeFileAsync(gitignorePath, obj.contents).then(function report() {
                log.ok('Appended ' + obj.appended + ' entries to' + ('' + gitignorePath));
              });
            }
          })
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
    log.info(cwd + ' is not under version control; skipping.');
  });
}

module.exports = updateGitignore;
//# sourceMappingURL=gitignore.js.map
