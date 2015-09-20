/* eslint no-sync:0 */

'use strict';

const tmp = require('tmp');

describe('Pod', ()=> {
  const Pod = require('../lib/pod');
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create('Pod');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('factory', () => {
    it('should be a function', () => {
      expect(Pod).to.be.a('function');
    });

    it('should have a _git object', function() {
      return Pod({
        dirpath: tmp.dirSync()
      })
        .then(function(pod) {
          expect(pod._git).to.be.an('object');
        });
    });

    it('should fail if it cannot init the repo', function() {
      return expect(Pod({
        dirpath: '/root'
      })).to.eventually.be.rejected;
    });
  });

  describe('method', function() {
    let pod;

    beforeEach(function() {
      return Pod({
        dirpath: tmp.dirSync()
      }).then(function(_pod) {
        pod = _pod;
      });
    });

    describe('toJSON()', function() {
      it('should return a JSON representation of the Pod', function() {
        expect(pod.toJSON()).to.eql({

        })
      });
    });

  });
});
