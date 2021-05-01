import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LeftArrow from '../components/relatedItems/LeftArrow';

describe('LeftArrow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LeftArrow
        onClick={() => {}}
      />);
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render a div container', () => {
    expect(wrapper.find('.arrow-left-container').type()).toBe('div');
  });

  it('should render a left chevron icon', () => {
    expect(wrapper.find('.arrow-left').name()).toBe('FiChevronLeft');
  });

});
