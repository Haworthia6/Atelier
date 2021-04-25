import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import LeftArrow from '../components/relatedItems/LeftArrow';

describe('LeftArrow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LeftArrow
        onClick={() => {}}
      />);
  });

  it('should render a div container', () => {
    expect(wrapper.find('.arrow-left-container').type()).to.equal('div');
  });

  it('should render a left chevron icon', () => {
    expect(wrapper.find('.arrow-left').name()).to.equal('FiChevronLeft');
  });

});
