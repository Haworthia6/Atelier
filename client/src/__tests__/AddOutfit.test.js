import React from 'react';
import { shallow } from 'enzyme';
import AddOutfit from '../components/relatedItems/AddOutfit';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import toJSON from 'enzyme-to-json';


describe('AddOutfit', () => {
  let wrapper;
  let handleOutfitAdd = sinon.spy();
  beforeEach(() => {
    wrapper = shallow(
      <AddOutfit
        handleOutfitAdd={handleOutfitAdd}
      />);
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should be a div container', () => {
    chai.expect(wrapper.type()).to.equal('div');
    chai.expect(wrapper.props().className).to.equal('add-outfit-container');
  });

  it('should contain an icon', () => {
    chai.expect(wrapper.find('.add-outfit-graphic').type()).to.equal('i');
  });

  it('should contain a + graphic', () => {
    chai.expect(wrapper.find('.add-outfit-graphic').childAt(0).name()).to.equal('FiPlusSquare');
  });

  it('should include text to describe component', () => {
    chai.expect(wrapper.find('.add-outfit-detail').text()).to.match(/Add to Outfit/);
  });

  it('should attach an onClick() to the container', () => {
    chai.expect(wrapper.props().onClick).to.be.instanceOf(Function);
  });

  it('should trigger handleOutfitAdd on click', () => {
    wrapper.find('.add-outfit-container').simulate('click');
    sinon.assert.calledOnce(handleOutfitAdd);
  });

});
