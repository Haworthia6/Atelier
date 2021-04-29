import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import LeftArrow from '../components/relatedItems/LeftArrow';
import toJSON from 'enzyme-to-json';

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
    chai.expect(wrapper.find('.arrow-left-container').type()).to.equal('div');
  });

  it('should render a left chevron icon', () => {
    chai.expect(wrapper.find('.arrow-left').name()).to.equal('FiChevronLeft');
  });

});
