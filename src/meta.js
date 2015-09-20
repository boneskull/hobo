'use strict';

let pkg = require('../package.json');
let _ = require('./utils');
let chalk = require('chalk');

const name = pkg.name;
const version = pkg.version;
const capitalizedName = _.capitalize(name);
const nameAndVersion = `${capitalizedName}@${version}`;

const meta = {
  name: name,
  version: version,
  capitalizedName: capitalizedName,
  nameAndVersion: nameAndVersion,
  coloredNameAndVersion: `${chalk.green(nameAndVersion)}`
};

module.exports = meta;
