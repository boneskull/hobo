'use strict';

var pkg = require('../package.json');
var _ = require('./utils');
var chalk = require('chalk');

var name = pkg.name;
var version = pkg.version;
var capitalizedName = _.capitalize(name);
var nameAndVersion = capitalizedName + '@' + version;

var meta = {
  name: name,
  version: version,
  capitalizedName: capitalizedName,
  nameAndVersion: nameAndVersion,
  coloredNameAndVersion: '' + chalk.green(nameAndVersion)
};

module.exports = meta;
