'use strict';

import Store, {__RewireAPI__ as StoreRewireAPI} from '../src/store';
import Promise from 'bluebird';
import trivialdb from 'trivialdb';

describe('Store', function() {
  let sandbox;
  let dbStub;

  beforeEach(() => {
    sandbox = sinon.sandbox.create('Store');
    StoreRewireAPI.__Rewire__('mkdirp',
      sandbox.stub().returns(Promise.resolve()));
    dbStub = {
      get: sandbox.stub().returns(Promise.resolve('value')),
      store: sandbox.stub().returns(Promise.resolve())
    };
    sandbox.stub(trivialdb, 'db').returns(dbStub);
  });

  afterEach(() => {
    StoreRewireAPI.__ResetDependency__('mkdirp');
    sandbox.restore();
  });

  it('should export a function by default', function() {
    expect(Store).to.be.a('function');
  });

  describe(`Store()`, () => {
    it(`should reject if no parameters`, () => {
      return expect(Store()).to.be.rejectedWith(Error, `id is required`);
    });

    it('should reject if no id passed', function() {
      return expect(Store({dirpath: '/some/dir/'})).to.be
        .rejectedWith(Error, `id is required`);
    });

    it(`should reject if no dirpath passed`, () => {
      return expect(Store({id: 'foo'})).to.be.rejectedWith(Error,
        `dirpath is required`);
    });

    it(`should fulfill with a Store`, () => {
      return expect(Store({
        id: 'foo',
        dirpath: '/some/dir/'
      })).to.eventually.be.fulfilled
        .then((store) => {
          expect(store.getStamp()).to.equal(Store);
        });
    });

    it(`should call this.store() with all unknown values`, () => {
      sandbox.stub(Store.fixed.methods, 'store').returns(Promise.resolve());
      return expect(Store({
        id: 'foo',
        dirpath: '/some/path',
        data: {
          foo: `bar`,
          baz: `quux`
        }
      })).to.eventually.be.fulfilled
        .then((store) => {
          expect(store.store).to.have.been.calledTwice;
          expect(store.store).to.have.been.calledWithExactly('foo', 'bar');
          expect(store.store).to.have.been.calledWithExactly('baz', 'quux');
        });
    });

    describe(`methods`, () => {
      let store;

      beforeEach(() => {
        return Store({
          id: 'foo',
          dirpath: '/some/path/'
        })
          .then((s) => {
            store = s;
          });
      });

      describe(`get()`, () => {
        it(`should call db.get()`, () => {
          return store.get('foo')
            .then((value) => {
              expect(value).to.equal(`value`);
              expect(dbStub.get).to.have.been.calledOnce;
              expect(dbStub.get).to.have.been.calledWithExactly('foo');
            });
        });
      });

      describe(`store()`, () => {
        it(`should call db.store()`, () => {
          return store.store('foo', 'bar')
            .then(() => {
              expect(dbStub.store).to.have.been.calledOnce;
              expect(dbStub.store).to.have.been.calledWithExactly('foo', 'bar');
            });
        });
      });
    });
  });
});
