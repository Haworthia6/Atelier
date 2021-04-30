import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import React from 'react';
import exampleStore from '../../../exampleData/exampleStore';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJSON from 'enzyme-to-json';

import { mount } from 'enzyme';

import RelatedItems from '../components/relatedItems/RelatedItems';

const mockStore = configureMockStore([thunk]);

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
    chai.expect(wrapper.find('.horizontal-container')).to.have.lengthOf(1);
  });

});
