import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import RightArrow from '../components/relatedItems/RightArrow';

describe('RightArrow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <RightArrow
        onClick={() => {}}
      />);
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render a div container', () => {
    expect(wrapper.find('.arrow-right-container').type()).toBe('div');
  });

  it('should render a right chevron icon', () => {
    expect(wrapper.find('.arrow-right').name()).toBe('FiChevronRight');
  });
});
