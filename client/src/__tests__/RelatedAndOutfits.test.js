import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
// Store
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import RelatedAndOutfits from '../components/relatedItems/RelatedAndOutfits';
import RelatedItems from '../components/relatedItems/RelatedItems';
import Outfits from '../components/relatedItems/Outfits';

const mockStore = configureMockStore([]);

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
    expect(wrapper.exists()).toBe(true);
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render RelatedItems component', () => {
    expect(wrapper.find(RelatedItems).exists()).toBe(true);
  });

  it('should render Outfits component', () => {
    expect(wrapper.find(Outfits).exists()).toBe(true);
  });

  it('should render a div container', () => {
    expect(wrapper.find('#related-items-and-outfits-component')).toHaveLength(1);
  });

  it('should render container titles', () => {
    expect(wrapper.find('h2')).toHaveLength(2);
    expect(wrapper.find('h2').first().text()).toMatch(/RELATED PRODUCTS/);
    expect(wrapper.find('h2').last().text()).toMatch(/YOUR OUTFIT/);
  });
});
