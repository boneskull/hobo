'use strict';

import Promise from 'bluebird';
import git from 'simple-git';
import domain from 'domain';
import stampit from 'stampit';
import {isGit} from './fs';
import Store from './store';

export const defaults = {
  id: 'default',
  dirpath: null
};

const Bindle = stampit({refs: defaults})
  .compose(Store)
  .compose(stampit({
    init() {
      const _git = this._git = Promise.promisifyAll(git(this.dirpath));

      return isGit(this.dirpath)
        .then(function(result) {
          if (!result) {
            return new Promise((resolve, reject) => {
              domain.create()
                .on('error', reject)
                .run(() => {
                  _git.initAsync()
                    .then(resolve);
                });
            });
          }
        })
        .return(this);
    },
    refs: defaults
  }));

export default Bindle;
