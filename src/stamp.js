'use strict';

import stampit from 'stampit';

const Stamp = stampit.init(({stamp}) => {
  if (!stamp.fixed.methods.getStamp) {
    stamp.fixed.methods.getStamp = () => stamp;
  }
});

export default Stamp;
