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

import Card from '../components/relatedItems/Card';

const mockStore = configureMockStore([thunk]);

describe('Card', () => {
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(exampleStore);

    wrapper = mount(
      <Provider store={store}>
        <Card
          handleImageClick={() => {}}
          handleActionClick={() => {}}
          render={() => <div></div>}
          product={store.getState().products[11003]}
          defaultStyle={store.getState().products[11003].styleList[0]}
        />
      </Provider>
    );
  });

  it('should render all parts of a card', () => {
    expect(wrapper.find('.card-component')).to.have.lengthOf(1);
    expect(wrapper.find('.card-top')).to.have.lengthOf(1);
    expect(wrapper.find('.card-bottom')).to.have.lengthOf(1);
    expect(wrapper.find('.card-button')).to.have.lengthOf(1);
    expect(wrapper.find('.card-image')).to.have.lengthOf(1);
    expect(wrapper.find('.card-category')).to.have.lengthOf(1);
    expect(wrapper.find('.card-name')).to.have.lengthOf(1);
    expect(wrapper.find('.card-price')).to.have.lengthOf(1);
    expect(wrapper.find('.stars-component')).to.have.lengthOf(1);
  });

  it('should have necessary attr for img', () => {
    expect(wrapper.find('img')).to.have.attr('src');
    expect(wrapper.find('img')).to.have.attr('alt');
  });

  it('should render category based on product', () => {
    expect(wrapper.find('.card-category').text()).to.match(/pants/);
  });

  it('should render name based on product', () => {
    expect(wrapper.find('.card-name').text()).to.match(/Morning Joggers/);
  });

  // Test Price render
  // Test Stars component
  // Test render() function and what it renders

});
