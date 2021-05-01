import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Rows from '../components/relatedItems/Rows';
import comparedProducts from '../../../exampleData/comparedProducts';

describe('Rows', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Rows
        comparedProducts={comparedProducts}
      />);
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render rows', () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  // Handle rendering of comparisonRows
  it('should create an element with class name compared-row', () => {
    expect(wrapper.props().children[0].props.className).toBe('compared-row');
  });
});
