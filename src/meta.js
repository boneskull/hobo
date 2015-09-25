'use strict';

import pkg from '../package.json';
import _ from './utils';
import chalk from 'chalk';

export const pkgName = pkg.name;
export const pkgNamePlural = `${pkgName}'s`;
export const pkgVersion = pkg.version;
export const capitalizedPkgName = _.capitalize(pkgName);
export const pkgNameAndVersion = `${capitalizedPkgName}@${pkgVersion}`;
export const coloredPkgNameAndVersion = `${chalk.green(pkgNameAndVersion)}`;
