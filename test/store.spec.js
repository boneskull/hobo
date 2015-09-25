'use strict';

import Store from '../src/store';

describe('Store', function() {
  before(() => {
    Store.__Rewire__('mkdirp', sinon.stub().returns(Promise.resolve()));
  });

  after(() => {
    Store.__ResetDependency__('mkdirp');
  });

  it('should be a function', function() {
    expect(Store).to.be.a('function');
  });

  it('throw if no id passed', function() {
    expect(Store).to.throw;
  });
});
