/* eslint no-sync:0 */

'use strict';

import tmp from 'tmp';
import Bindle from '../src/bindle';
import fs from '../src/fs';

describe('Bindle', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create('Bindle');
    fs.__Rewire__('mkdirp', sinon.stub().returns(Promise.resolve()));
  });

  afterEach(() => {
    sandbox.restore();
    fs.__ResetDependency__('mkdirp');
  });

  it('should be a function', () => {
    expect(Bindle).to.be.a('function');
  });

  it('should have a _git object', () => {
    return Bindle({
      id: 'foo',
      dirpath: tmp.dirSync().name
    })
      .then((bindle) => {
        expect(bindle._git).to.be.an('object');
      });
  });

  it('should fail if it cannot init the repo', () => {
    return expect(Bindle({
      id: 'foo',
      dirpath: '/root'
    })).to.eventually.be.rejected;
  });

  describe('method', () => {
    let tmprootPath;

    beforeEach(() => {
      tmprootPath = tmp.dirSync().name;
      return Bindle({
        id: 'foo',
        dirpath: tmprootPath
      }).then((_bindle) => {
      });
    });
  });
});
