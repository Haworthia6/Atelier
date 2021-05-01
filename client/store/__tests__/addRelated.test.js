import addRelated from '../actions/addRelated';

describe('addRelated', () => {
  it('should return an action object', () => {
    expect(addRelated({ id: 12, name: 'a' })).toBeInstanceOf(Object);
    expect(addRelated({ id: 12, name: 'a'})).toEqual({
      type: 'ADD_RELATED_PRODUCT',
      payload:{ 12: { id: 12, name: 'a'} }
    });
  });
});
