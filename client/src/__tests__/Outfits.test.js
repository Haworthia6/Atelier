import React from 'react';
// Store
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import exampleStore from '../../../exampleData/exampleStore';

import AddOutfit from '../components/relatedItems/AddOutfit';
import Outfits from '../components/relatedItems/Outfits';

const mockStore = configureMockStore();

describe('Outfits', () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore(exampleStore);
    wrapper = mount(
      <Provider store={store}>
        <Outfits
          currentProdId={store.getState().currentProductId}
          products={store.getState().products}
        />
      </Provider>
    );
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render a div container' , () => {
    expect(wrapper.find('.horizontal-container')).toHaveLength(1);
    expect(wrapper.find('.horizontal-container').type()).toBe('div');
  });

  it('should render AddOutfit component', () => {
    expect(wrapper.find(AddOutfit)).toHaveLength(1);
  });
});
