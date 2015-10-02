'use strict';

import stampit from 'stampit';
import {home} from './fs';
import path from 'path';
import Store from './store';
import {pkgName} from './meta';

export const hoboDirpath = path.join(home, '.hobo');

const props = {
  id: pkgName,
  dirpath: hoboDirpath
};

const Hobo = stampit({
  props: props,
  methods: {
  }
})
  .compose(Store);

export default Hobo;
