import React from 'react';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());

import RelatedAndOutfits from '../components/RelatedAndOutfits';
import RelatedItems from '../components/RelatedItems';
import Outfits from '../components/Outfits';

describe('Related Items and Outfits container', () => {

  let wrap;

  beforeEach(() => {
    wrap = shallow(<RelatedAndOutfits />);
  });

  it('should exist', () => {
    expect(wrap.exists()).to.be.true;
  });

  it('should contain a div wrapper', () => {
    expect(wrap.find('div')).to.have.lengthOf(1);
  });

  it('should contain two carousels', () => {
    const fullMount = mount(<RelatedAndOutfits />);
    expect(fullMount).to.contain(<RelatedItems />, <Outfits />);
  });

});