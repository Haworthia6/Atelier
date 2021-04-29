import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const cExpect = chai.expect;
chai.use(chaiEnzyme());
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import RelatedAndOutfits from '../components/relatedItems/RelatedAndOutfits';
import RelatedItems from '../components/relatedItems/RelatedItems';
import Outfits from '../components/relatedItems/Outfits';
const mockStore = configureMockStore([thunk]);

describe('Related Items and Outfits container', () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore({
      currentProductId: null,
      products: {}
    });
    wrapper = mount(
      <Provider store={store}>
        <RelatedAndOutfits />
      </Provider>
    );
  });

  it('should exist', () => {
    cExpect(wrapper.exists()).to.be.true;
  });

  it('should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot;
  });

  it('should render RelatedItems component', () => {
    cExpect(wrapper.find(RelatedItems).exists()).to.be.true;
  });

  it('should render Outfits component', () => {
    cExpect(wrapper.find(Outfits).exists()).to.be.true;
  });

  it('should render a div container', () => {
    cExpect(wrapper.find('#related-items-and-outfits-component')).to.have.lengthOf(1);
  });

  it('should hand props to RelatedItems component', () => {
    cExpect(wrapper.find(RelatedItems).first()).to.have.prop('relatedProductsIds');
    cExpect(wrapper.find(RelatedItems).first()).to.have.prop('products');
    cExpect(wrapper.find(RelatedItems).first()).to.have.prop('setToggleComparing');
    cExpect(wrapper.find(RelatedItems).first()).to.have.prop('setShowModal');
    cExpect(wrapper.find(RelatedItems).first()).to.have.prop('handleComparingToggle');
  });

  it('should hand props to Outfits component', () => {
    cExpect(wrapper.find(Outfits).first()).to.have.props(['currentProdId', 'products']);
  });

  it('should render container titles', () => {
    cExpect(wrapper.find('h2')).to.have.lengthOf(2);
    cExpect(wrapper.find('h2').first().text()).to.match(/RELATED PRODUCTS/);
    cExpect(wrapper.find('h2').last().text()).to.match(/YOUR OUTFIT/);
  });

  // Test conditional rendering of Modal
  // Test RelatedItems render
  // Test Outfits render

});
