import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import React from 'react';
import exampleStore from '../../../exampleData/exampleStore';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';
import toJSON from 'enzyme-to-json';

import Card from '../components/relatedItems/Card';
import Stars from '../components/Stars';
import Price from '../components/Price';

const mockStore = configureMockStore();

describe('Card', () => {
  let wrapper, store;
  let handleImageClick = sinon.spy();
  let handleActionClick = sinon.spy();
  let render = sinon.spy();

  beforeEach(() => {
    store = mockStore(exampleStore);

    wrapper = mount(
      <Provider store={store}>
        <Card
          handleImageClick={handleImageClick}
          handleActionClick={handleActionClick}
          render={render}
          product={store.getState().products[11003]}
          defaultStyle={store.getState().products[11003].styleList[0]}
        />
      </Provider>
    );
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render all parts of a card', () => {
    chai.expect(wrapper.find('.card-component')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.card-top')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.card-bottom')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.card-button')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.card-image')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.card-category')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.card-name')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.card-price')).to.have.lengthOf(1);
    chai.expect(wrapper.find(Stars)).to.have.lengthOf(1);
  });

  it('should have necessary attr for img', () => {
    chai.expect(wrapper.find('img')).to.have.attr('src');
    chai.expect(wrapper.find('img')).to.have.attr('alt');
  });

  it('should render category based on product', () => {
    chai.expect(wrapper.find('.card-category').text()).to.match(/pants/);
  });

  it('should render name based on product', () => {
    chai.expect(wrapper.find('.card-name').text()).to.match(/Morning Joggers/);
  });

  it('should render the default price with no sale price', () => {
    chai.expect(wrapper.find('.card-price')).to.contain(Price);
  });

  describe('card-image', () => {
    beforeEach(() => {
      wrapper.find('img').simulate('click');
    });
    it('should trigger handleImageClick on click', () => {
      sinon.assert.called(handleImageClick);
    });

    it('should pass ID to handleImageClick on click', () => {
      sinon.assert.calledWith(handleImageClick, 11003);
    });
  });

  describe('action-button', () => {
    beforeEach(() => {
      wrapper.find('.card-button').simulate('click');
    });
    it('should invoke handleActionClick on click', () => {
      sinon.assert.called(handleActionClick);
    });
    it('should pass the product ID to handleActionClick', () => {
      sinon.assert.calledWith(handleActionClick, 11003);
    });
  });

  describe('card-component', () => {
    it('should trigger a function on mouseEnter', () => {
      chai.expect(wrapper.find('.card-component').prop('onMouseEnter')).to.be.an.instanceOf(Function);
    });

    it('should trigger a function on mouseLeave', () => {
      chai.expect(wrapper.find('.card-component').prop('onMouseLeave')).to.be.an.instanceOf(Function);
    });
  });

});