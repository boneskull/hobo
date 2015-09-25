'use strict';

import Promise from 'bluebird';
import chalk from 'chalk';
import Command from '../command';
import {coloredPkgNameAndVersion, capitalizedPkgName} from '../../meta';
import questions from './questions';

const setup = function setup(done) {
  console.log(chalk.green(coloredPkgNameAndVersion) + '\n');
  console.log(`Let's get you going!`);
  return questions()
    .then((qs) => this.prompt(qs))
    .catch((err) => {
      throw new Error(err);
    })
    .nodeify(done);
}.bind(Command({
  name: 'setup',
  description: `Configure ${capitalizedPkgName}`
}));

export default setup;

if (require.main === module) {
  Promise.longStackTraces();
  setup();
}
