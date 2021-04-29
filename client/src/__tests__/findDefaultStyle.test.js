import chai from 'chai';
const expect = chai.expect;
import findDefaultStyle from '../helpers/findDefaultStyle';
import exampleStore from '../../../exampleData/exampleStore';

describe('findDefaultStyle()', () => {
  let product;
  beforeEach(() => {
    product = findDefaultStyle(exampleStore.products[11003]);
  });

  it('should return a single style object', () => {
    expect(product).to.be.an('object');
  });

  it('should return the object when default? is true', () => {
    expect(product['default?']).to.be.true;
  });

  it('should have the correct styleId', () => {
    expect(product['style_id']).to.equal(51168);
  });
});