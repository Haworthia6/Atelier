import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import RelatedAndOutfits from '../components/relatedItems/RelatedAndOutfits';
import RelatedItems from '../components/relatedItems/RelatedItems';
import Outfits from '../components/relatedItems/Outfits';
const mockStore = configureMockStore([thunk]);

describe('Related Items and Outfits container', () => {
  let wrap, store;
  beforeEach(() => {
    store = mockStore({
      currentProductId: null,
      products: {}
    });
    wrap = mount(
      <Provider store={store}>
        <RelatedAndOutfits />
      </Provider>
    );
  });

  it('should exist', () => {
    expect(wrap.exists()).to.be.true;
  });

  it('should render RelatedItems component', () => {
    expect(wrap.find(RelatedItems).exists()).to.be.true;
  });

  it('should render Outfits component', () => {
    expect(wrap.find(Outfits).exists()).to.be.true;
  });

  it('should render a div container', () => {
    expect(wrap.find('#related-items-and-outfits-component')).to.have.lengthOf(1);
  });

  it('should hand props to RelatedItems component', () => {
    expect(wrap.find(RelatedItems).first()).to.have.prop('relatedProductsIds');
    expect(wrap.find(RelatedItems).first()).to.have.prop('products');
    expect(wrap.find(RelatedItems).first()).to.have.prop('setToggleComparing');
    expect(wrap.find(RelatedItems).first()).to.have.prop('setShowModal');
    expect(wrap.find(RelatedItems).first()).to.have.prop('handleComparingToggle');
  });

  it('should hand props to Outfits component', () => {
    expect(wrap.find(Outfits).first()).to.have.props(['currentProdId', 'products']);
  });

  it('should render container titles', () => {
    expect(wrap.find('h2')).to.have.lengthOf(2);
    expect(wrap.find('h2').first().text()).to.match(/RELATED PRODUCTS/);
    expect(wrap.find('h2').last().text()).to.match(/YOUR OUTFIT/);
  });

  // Test conditional rendering of Modal
  // Test RelatedItems render
  // Test Outfits render

});
