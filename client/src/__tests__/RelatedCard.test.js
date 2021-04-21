import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import React from 'react';
import exampleStore from '../../../exampleData/exampleStore';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { mount } from 'enzyme';

import RelatedCard from '../components/relatedItems/RelatedCard';

const mockStore = configureMockStore([thunk]);

describe('RelatedCard', () => {
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(exampleStore);

    wrapper = mount(
      <Provider store={store}>
        <RelatedCard
          relatedProductsIds={store.getState().relatedItemsIds}
          product={store.getState().products[11003]}
          defaultStyle={store.getState().styleList}
        />
      </Provider>
    );
  });

  it('should render all parts of a card', () => {
    expect(wrapper.find('.card-component')).to.have.lengthOf(1);
    expect(wrapper.find('.card-top')).to.have.lengthOf(1);
    expect(wrapper.find('.card-bottom')).to.have.lengthOf(1);
    expect(wrapper.find('.related-item-action-button')).to.have.lengthOf(1);
    expect(wrapper.find('.related-item-image')).to.have.lengthOf(1);
    expect(wrapper.find('.related-category')).to.have.lengthOf(1);
    expect(wrapper.find('.related-name')).to.have.lengthOf(1);
    expect(wrapper.find('.related-price')).to.have.lengthOf(1);
    expect(wrapper.find('.stars-component')).to.have.lengthOf(1);
  });

  it('should have necessary attr for img', () => {
    expect(wrapper.find('img')).to.have.attr('src');
    expect(wrapper.find('img')).to.have.attr('alt');
  });

  it('should render category based on product', () => {
    expect(wrapper.find('.related-category').text()).to.match(/pants/)
  });

  it('should render name based on product', () => {
    expect(wrapper.find('.related-name').text()).to.match(/Morning Joggers/);
  });

});
