import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Rows from '../components/relatedItems/Rows';
import Comparing from '../components/relatedItems/Comparing';

const exampleCompared = {
  current: {
    features: [],
    name: 'current-test-name'
  },
  related: {
    features: [],
    name:'related-test-name'
  }
};

describe('Comparing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Comparing
        visibility={'fade-in'}
        comparedProducts={exampleCompared}
      />
    );
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render a div container', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('should have a className dependant on visibility prop', () => {
    expect(wrapper.find('.fade-in')).toHaveLength(1);
    wrapper.setProps({ visibility: 'fade-out' });
    expect(wrapper.find('.fade-in')).toHaveLength(0);
    expect(wrapper.find('.fade-out')).toHaveLength(1);
  });

  it('should contain a main container that is the modal', () => {
    expect(wrapper.find('.modal').type()).toBe('main');
  });

  it('should have a header that renders component title', () => {
    expect(wrapper.find('.modal-header').childAt(0).text()).toMatch(/Comparing/);
  });

  it('should render content in a table', () => {
    expect(wrapper.find('.modal-content').type()).toBe('table');
  });

  it('should render current product name in table header', () => {
    expect(wrapper.find('.modal-content thead tr th').first().text()).toMatch(/current-test-name/);
  });

  it('should render related product name in table header', () => {
    expect(wrapper.find('.modal-content thead tr th').last().text()).toMatch(/related-test-name/);
  });

  it('should render a table body', () => {
    expect(wrapper.find('.comparing-container tbody')).toHaveLength(1);
  });

  it('should render Rows component', () => {
    expect(wrapper.find(Rows)).toHaveLength(1);
  });

  it('should render a footer', () => {
    expect(wrapper.find('.modal-footer').type()).toBe('div');
  });
});