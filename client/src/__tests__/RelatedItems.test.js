import React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';
// Store
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import exampleStore from '../../../exampleData/exampleStore';

import RelatedItems from '../components/relatedItems/RelatedItems';

const mockStore = configureMockStore([]);

describe('RelatedItems', () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore(exampleStore);
    wrapper = mount(
      <Provider store={store}>
        <RelatedItems
          relatedProductsIds={store.getState().products[11003].relatedItemsIds}
          products={store.getState().products}
          handleComparingToggle={() => {}}
          setToggleComparing={() => {}}
          setShowModal={() => {}}
        />
      </Provider>
    );
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should contain one container', () => {
    expect(wrapper.find('.horizontal-container')).toHaveLength(1);
  });

});
