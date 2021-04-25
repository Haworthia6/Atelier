import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import RightArrow from '../components/relatedItems/RightArrow';

describe('RightArrow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <RightArrow
        onClick={() => {}}
      />);
  });

  it('should render a div container', () => {
    expect(wrapper.find('.arrow-right-container').type()).to.equal('div');
  });

  it('should render a right chevron icon', () => {
    expect(wrapper.find('.arrow-right').name()).to.equal('FiChevronRight');
  });

});
