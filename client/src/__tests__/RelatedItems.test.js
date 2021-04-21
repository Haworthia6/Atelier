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

import RelatedItems from '../components/relatedItems/RelatedItems';
import RelatedCard from '../components/relatedItems/RelatedCard';

const mockStore = configureMockStore([thunk]);

describe('RelatedItems', () => {
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(exampleStore);
    wrapper = mount(
      <Provider store={store}>
        <RelatedItems relatedProductsIds={store.relatedItemsIds} products={store.products} />
      </Provider>
    );
  });

  it('should have a left and right arrow', () => {
    expect(wrapper.find('#left-arrow')).to.have.lengthOf(1);
    expect(wrapper.find('#right-arrow')).to.have.lengthOf(1);
    expect(wrapper.find('.arrow')).to.have.lengthOf(2);
  });

});
