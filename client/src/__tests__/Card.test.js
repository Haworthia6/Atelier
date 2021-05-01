import React from 'react';
// Store
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import exampleStore from '../../../exampleData/exampleStore';
// Components
import Card from '../components/relatedItems/Card';
import Stars from '../components/Stars';
import Price from '../components/Price';
// Mock Store
const mockStore = configureMockStore();

describe('Card', () => {
  let wrapper, store;
  let handleImageClick = jest.fn();
  let handleActionClick = jest.fn();
  let render = jest.fn();

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
    expect(wrapper.find('.card-component')).toHaveLength(1);
    expect(wrapper.find('.card-top')).toHaveLength(1);
    expect(wrapper.find('.card-bottom')).toHaveLength(1);
    expect(wrapper.find('.card-button')).toHaveLength(1);
    expect(wrapper.find('.card-image')).toHaveLength(1);
    expect(wrapper.find('.card-category')).toHaveLength(1);
    expect(wrapper.find('.card-name')).toHaveLength(1);
    expect(wrapper.find('.card-price')).toHaveLength(1);
    expect(wrapper.find(Stars)).toHaveLength(1);
  });

  it('should have necessary attr for img', () => {
    expect(wrapper.find('img').props()).toHaveProperty('src');
    expect(wrapper.find('img').props()).toHaveProperty('alt');
  });

  it('should render category based on product', () => {
    expect(wrapper.find('.card-category').text()).toMatch(/pants/);
  });

  it('should render name based on product', () => {
    expect(wrapper.find('.card-name').text()).toMatch(/Morning Joggers/);
  });

  it('should render the default price with no sale price', () => {
    expect(wrapper.find('.card-price').contains(Price)).toBeTruthy();
  });

  describe('card-image', () => {
    beforeEach(() => {
      wrapper.find('img').simulate('click');
    });
    it('should trigger handleImageClick on click', () => {
      expect(handleImageClick).toHaveBeenCalled();
    });

    it('should pass ID to handleImageClick on click', () => {
      expect(handleImageClick).toHaveBeenCalledWith(11003);
    });
  });

  describe('action-button', () => {
    beforeEach(() => {
      wrapper.find('.card-button').simulate('click');
    });
    it('should invoke handleActionClick on click', () => {
      expect(handleActionClick).toHaveBeenCalled();
    });
    it('should pass the product ID to handleActionClick', () => {
      expect(handleActionClick).toHaveBeenCalledWith(11003);
    });
  });

  describe('card-component', () => {
    it('should trigger a function on mouseEnter', () => {
      expect(wrapper.find('.card-component').prop('onMouseEnter')).toBeInstanceOf(Function);
    });

    it('should trigger a function on mouseLeave', () => {
      expect(wrapper.find('.card-component').prop('onMouseLeave')).toBeInstanceOf(Function);
    });
  });

});