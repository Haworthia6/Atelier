import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import Rows from '../components/relatedItems/Rows';
import comparedProducts from '../../../exampleData/comparedProducts';
import toJSON from 'enzyme-to-json';

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
    chai.expect(wrapper.isEmptyRender()).to.be.false;
  });

  // Handle rendering of comparisonRows
  it('should create an element with class name compared-row', () => {
    chai.expect(wrapper.props().children[0].props.className).to.equal('compared-row');
  });

});
