import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import AddOutfit from '../components/relatedItems/AddOutfit';

describe('AddOutfit', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AddOutfit
        handleOutfitAdd={() => {}}
      />);
  });

  it('should be a div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should contain an icon', () => {
    expect(wrapper.find('.add-outfit-graphic').type()).to.equal('i');
  });

  it('should contain a + graphic', () => {
    expect(wrapper.find('.add-outfit-graphic').childAt(0).name()).to.equal('FiPlusSquare');
  });

  it('should include text to describe component', () => {
    expect(wrapper.find('.add-outfit-detail').text()).to.match(/Add to Outfit/);
  });

});
