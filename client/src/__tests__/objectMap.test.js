import obj from '../helpers/objectMap';

describe('objectMap helper', () => {

  it('should take in an object and return and array of the object\'s values', () => {
    const test = {
      1: { key: 'test'},
      2: { key: 'string'}
    };
    expect(obj.hasOwnMap(test)).toEqual([
      {key: 'test'},
      {key: 'string'}
    ]);
  });

  it('should return not include properties on the prototype', () => {
    const test = Object.create({
      testFunc: () => {}
    });
    expect(obj.hasOwnMap(test)).toHaveLength(0);
  });

});
