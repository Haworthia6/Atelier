import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import RightArrow from '../components/relatedItems/RightArrow';
import toJSON from 'enzyme-to-json';

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
    chai.expect(wrapper.find('.arrow-right-container').type()).to.equal('div');
  });

  it('should render a right chevron icon', () => {
    chai.expect(wrapper.find('.arrow-right').name()).to.equal('FiChevronRight');
  });

});
