import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddOutfit from '../components/relatedItems/AddOutfit';

describe('AddOutfit', () => {
  let wrapper;
  let handleOutfitAdd = jest.fn();
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
    expect(wrapper.type()).toBe('div');
    expect(wrapper.props().className).toBe('add-outfit-container');
  });

  it('should contain an icon', () => {
    expect(wrapper.find('.add-outfit-graphic').type()).toBe('i');
  });

  it('should contain a + graphic', () => {
    expect(wrapper.find('.add-outfit-graphic').childAt(0).name()).toBe('FiPlusSquare');
  });

  it('should include text to describe component', () => {
    expect(wrapper.find('.add-outfit-detail').text()).toBe('Add to Outfit');
  });

  it('should trigger handleOutfitAdd on click', () => {
    wrapper.find('.add-outfit-container').simulate('click');
    expect(handleOutfitAdd).toHaveBeenCalled();
  });

});
