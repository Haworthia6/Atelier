import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import RelatedAndOutfits from '../components/relatedItems/RelatedAndOutfits';
import RelatedItems from '../components/relatedItems/RelatedItems';
import Outfits from '../components/relatedItems/Outfits';
const mockStore = configureMockStore([thunk]);
import toJSON from 'enzyme-to-json';

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
    chai.expect(wrapper.exists()).to.be.true;
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render RelatedItems component', () => {
    chai.expect(wrapper.find(RelatedItems).exists()).to.be.true;
  });

  it('should render Outfits component', () => {
    chai.expect(wrapper.find(Outfits).exists()).to.be.true;
  });

  it('should render a div container', () => {
    chai.expect(wrapper.find('#related-items-and-outfits-component')).to.have.lengthOf(1);
  });

  it('should hand props to RelatedItems component', () => {
    chai.expect(wrapper.find(RelatedItems).first()).to.have.prop('relatedProductsIds');
    chai.expect(wrapper.find(RelatedItems).first()).to.have.prop('products');
    chai.expect(wrapper.find(RelatedItems).first()).to.have.prop('setToggleComparing');
    chai.expect(wrapper.find(RelatedItems).first()).to.have.prop('setShowModal');
    chai.expect(wrapper.find(RelatedItems).first()).to.have.prop('handleComparingToggle');
  });

  it('should hand props to Outfits component', () => {
    chai.expect(wrapper.find(Outfits).first()).to.have.props(['currentProdId', 'products']);
  });

  it('should render container titles', () => {
    chai.expect(wrapper.find('h2')).to.have.lengthOf(2);
    chai.expect(wrapper.find('h2').first().text()).to.match(/RELATED PRODUCTS/);
    chai.expect(wrapper.find('h2').last().text()).to.match(/YOUR OUTFIT/);
  });

  // Test conditional rendering of Modal
  // Test RelatedItems render
  // Test Outfits render

});
