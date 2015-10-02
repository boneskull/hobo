'use strict';

import stampit from 'stampit';
import trivialdb from 'trivialdb';
import {mkdirp} from './fs';
import Stamp from './stamp';
import _ from './utils';
import Promise from 'bluebird';
import path from 'path';

const Store = stampit({
  refs: {
    data: {}
  },
  init() {
    if (!this.id) {
      return Promise.reject(new Error('id is required'));
    }
    if (!this.dirpath) {
      return Promise.reject(new Error('dirpath is required'));
    }
    return mkdirp(this.dirpath)
      .then(() => {
        this.db = trivialdb.db(this.id, {
          dirpath: this.dirpath
        });
        this.filepath = this.db.path;
        return Promise.map(_.keys(this.data), (key) => {
          return this.store(key, this.data[key]);
        });
      })
      .then(() => {
        this.data = this.db.values;
        return this;
      });
  },
  methods: {
    get() {
      return this.db.get.apply(this.db, arguments);
    },
    store() {
      return this.db.store.apply(this.db, arguments);
    },
    sync() {
      return this.db.sync.apply(this.db, arguments);
    }
  }
})
  .compose(Stamp);

export default Store;

