import findDefaultStyle from '../helpers/findDefaultStyle';
import exampleStore from '../../../exampleData/exampleStore';

describe('findDefaultStyle()', () => {
  let product;
  beforeEach(() => {
    product = findDefaultStyle(exampleStore.products[11003]);
  });

  it('should return a single style object', () => {
    expect(product).toBeInstanceOf(Object);
  });

  it('should return the object when default? is true', () => {
    expect(product['default?']).toBe(true);
  });

  it('should have the correct styleId', () => {
    expect(product['style_id']).toBe(51168);
  });
});