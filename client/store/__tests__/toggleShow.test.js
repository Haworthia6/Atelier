import toggleShow from '../actions/toggleShow';
import chai from 'chai';
const expect = chai.expect;

describe('toggleShow AC', () => {

  it('should return an object', () => {
    expect(toggleShow(true)).to.be.an('object');
  });

  it('should return an action object when given a product', () => {
    expect(toggleShow(false)).to.eql({
      type: 'TOGGLE_SHOW',
      payload: false
    });
  });
});