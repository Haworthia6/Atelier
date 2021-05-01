import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
// Store
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import exampleStore from '../../../exampleData/exampleStore';

import CardWrapper from '../components/relatedItems/CardWrapper';
import Card from '../components/relatedItems/Card';

const mockStore = configureMockStore([thunk]);

describe('CardWrapper', () => {
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(exampleStore);
    wrapper = mount(
      <Provider store={store}>
        <CardWrapper
          product={store.getState().products[11003]}
          handleActionClick={jest.fn()}
          render={jest.fn()}
          resetScroll={jest.fn()}
        />
      </Provider>
    );
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render a Card', () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it('should pass handleImageClick to Card', () => {
    expect(wrapper.find(Card).prop('handleImageClick')).toBeInstanceOf(Function);
  });
});
