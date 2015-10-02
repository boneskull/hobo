'use strict';

import Hobo, {hoboDirpath} from '../src/hobo';
import home from 'user-home';
import path from 'path';
import Promise from 'bluebird';
import {__RewireAPI__ as BindleRewireAPI} from '../src/bindle';
import {__RewireAPI__ as StoreRewireAPI} from '../src/store';
import trivialdb from 'trivialdb';

describe(`Hobo`, () => {
  let sandbox;
  let dbStub;

  beforeEach(() => {
    sandbox = sinon.sandbox.create(`Hobo`);
    dbStub = {
      get: sandbox.stub().returns(Promise.resolve('value')),
      store: sandbox.stub().returns(Promise.resolve())
    };

    sandbox.stub(trivialdb, 'db').returns(dbStub);
    StoreRewireAPI.__Rewire__('mkdirp',
      sandbox.stub().returns(Promise.resolve()));
    BindleRewireAPI.__Rewire__('isGit',
      sandbox.stub().returns(Promise.resolve(true)));
  });

  afterEach(() => {
    StoreRewireAPI.__ResetDependency__('mkdirp');
    BindleRewireAPI.__ResetDependency__('isGit');
    sandbox.restore();
  });

  it(`should export a function by default`, () => {
    expect(Hobo).to.be.a('function');
  });

  describe(`hoboDirpath`, () => {
    it(`should be exported`, () => {
      expect(hoboDirpath).to.be.a('string');
    });

    it(`should point to a location under the user's home dir`, () => {
      expect(hoboDirpath).to.deep.equal(path.join(home, '.hobo'));
    });
  });

  describe(`Hobo()`, () => {
    it(`should have an "id" property`, () => {
      return expect(Hobo()).to.eventually.have.property(`id`, `hobo`);
    });

    it(`should have a "dirpath" property`, () => {
      return expect(Hobo()).to.eventually.have.property(`dirpath`,
        path.join(home, `.hobo`));
    });
  });
});
