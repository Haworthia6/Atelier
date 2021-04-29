import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import exampleStore from '../../../exampleData/exampleStore';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

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

  it('should render a Card', () => {
    expect(wrapper.find(Card)).to.have.lengthOf(1);
  });

  it('should pass props to Card', () => {
    expect(wrapper.find(Card).first()).to.have.props(['product', 'handleImageClick', 'handleActionClick', 'defaultStyle', 'render']);
  });

  it('should pass handleImageClick to Card', () => {
    expect(wrapper.find(Card).prop('handleImageClick')).to.be.an.instanceOf(Function);
  });

  // Test Card render
});
