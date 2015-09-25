'use strict';

import Hobo, {hoboDirpath} from '../src/hobo';
import fs from '../src/fs';
import home from 'user-home';
import path from 'path';
import Promise from 'bluebird';
import stampit from 'stampit';

describe(`Hobo`, () => {
  let sandbox;

  beforeEach(() => {
    fs.__Rewire__('mkdirp', sinon.stub().returns(Promise.resolve()));
    Hobo.__Rewire__('Store', sinon.stub().returns(stampit()));
  });

  beforeEach(() => {
    sandbox = sinon.sandbox.create(`Hobo`);
  });

  afterEach(() => {
    fs.__ResetDependency__('mkdirp');
    Hobo.__ResetDependency__('Store');
  });

  it(`should export a function by default`, () => {
    expect(Hobo).to.be.a('function');
  });

  it(`should export "hoboDirpath"`, () => {
    expect(hoboDirpath).to.be.a('string');
  });

  describe(`hoboDirpath`, () => {
    it(`should be under the user's home dir`, () => {
      expect(hoboDirpath).to.deep.equal(path.join(home, '.hobo'));
    });
  });

  describe(`Hobo`, () => {
    it(`should return a Promise`, () => {
      return expect(Hobo()).to.eventually.be.resolved;
    });
  });
});
