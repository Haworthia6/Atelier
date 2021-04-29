import chai from 'chai';
const expect = chai.expect;
import addRelated from '../actions/addRelated';

describe('addRelated', () => {
  it('should return an action object', () => {
    expect(addRelated({ id: 12, name: 'a' })).to.be.an('object');
    expect(addRelated({ id: 12, name: 'a'})).to.eql({
      type: 'ADD_RELATED_PRODUCT',
      payload:{ 12: { id: 12, name: 'a'} }
    });
  });
});