import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import toJSON from 'enzyme-to-json';

import App from '../App';
import Overview from '../components/overview/Overview';
import RelatedAndOutfits from '../components/relatedItems/RelatedAndOutfits';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should exist', () => {
    chai.expect(wrapper.exists()).to.be.true;
  });

  it('should mount some components', () => {
    chai.expect(wrapper.isEmptyRender()).to.be.false;
  });

  it('should render an Overview component', () => {
    chai.expect(wrapper.find(Overview)).to.have.lengthOf(1);
  });

  it('should render RelatedAndOutfits component', () => {
    chai.expect(wrapper.find(RelatedAndOutfits)).to.have.lengthOf(1);
  });

  it('should wrapper RelatedAndOutfits in a positioning div', () => {
    chai.expect(wrapper.find('.col-center')).to.have.lengthOf(1);
  });

});
