import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import React from 'react';

import { mount } from 'enzyme';
// THIS FILE NEEDS EDITING AS I CANNOT TEST REDUX

import RelatedItems from '../components/relatedItems/RelatedItems';
import RelatedCard from '../components/relatedItems/RelatedCard';

describe('RelatedItems', () => {

  it('should have a left and right arrow', () => {
    const wrapper = mount(<RelatedItems />)
    expect(wrapper.find('#left-arrow')).to.have.lengthOf(1);
    expect(wrapper.find('#right-arrow')).to.have.lengthOf(1);
    expect(wrapper.find('.arrow')).to.have.lengthOf(2);
  })

  it('should receive an array of ids', () => {
    const wrapper = mount(<RelatedItems />)
    wrapper.setProps({ relatedProductsIds: [11003] });
    expect(wrapper.props().relatedProductsIds),to.be.an('array').that.includes(11003);
  })

  it('should mount RelatedCard when receiving a new id', () => {
    const wrapper = mount(<RelatedItems />)
    expect(wrapper.props()).to.be.empty;
    expect(wrapper.exists(RelatedCard)).to.be.false;
    wrapper.setProps({ relatedProductsIds : [11003] });
    expect(wrapper.exists(RelatedCard)).to.be.true
  })
})
