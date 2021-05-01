import toggleShow from '../actions/toggleShow';

describe('toggleShow AC', () => {

  it('should return an object', () => {
    expect(toggleShow(true)).toBeInstanceOf(Object);
  });

  it('should return an action object when given a product', () => {
    expect(toggleShow(false)).toEqual({
      type: 'TOGGLE_SHOW',
      payload: false
    });
  });
});