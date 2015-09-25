'use strict';

import stampit from 'stampit';
import {home} from './fs';
import path from 'path';
import Bindle from './bindle';
import Store from './store';
import {pkgName} from './meta';
import _ from './utils';
import Promise from 'bluebird';

export const hoboDirpath = path.join(home, '.hobo');

const Hobo = stampit({
  refs: {
    values: {}
  },
  props: {
    id: pkgName,
    dirpath: hoboDirpath
  }
})
  .compose(Store)
  .compose(stampit({

    init() {
      return Promise.map(_.keys(this.values), (key) => {
        return this.db.set(key, this.values[key]);
      })
        .return(this);
    },
    methods: {
      addBindle(id, url) {
        const bindle = Bindle({
          id: id,
          url: url
        });
        this.bindles[id] = bindle;
        return bindle;
      },
      get: function() {
        return this.db.get.apply(this.db, arguments);
      },
      set: function() {
        return this.db.set.apply(this.db, arguments);
      }
    }
  }));

export default Hobo;
