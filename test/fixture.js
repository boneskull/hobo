'use strict';

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

global.expect = chai.expect;
global.sinon = sinon;

chai.use(sinonChai);
chai.use(chaiAsPromised);
