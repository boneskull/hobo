'use strict';

import stampit from 'stampit';
import trivialdb from 'trivialdb';
import {mkdirp} from './fs';

const Store = stampit({
  init() {
    if (!this.id) {
      return Promise.reject(new Error('id is required'));
    }
    if (!this.dirpath) {
      return Promise.reject(new Error('dirpath is required'));
    }
    return mkdirp(this.dirpath)
      .bind(this)
      .then(function() {
        this.db = trivialdb.db(this.id, {
          dirpath: this.dirpath
        });
      })
      .return(this);
  },
  methods: {
    get: function() {
      return this.db.get.apply(this.db, arguments);
    },
    set: function() {
      return this.db.set.apply(this.db, arguments);
    }
  }
});

export default Store;

