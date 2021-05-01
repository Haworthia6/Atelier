import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import App from '../App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should mount some components', () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
