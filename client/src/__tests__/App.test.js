import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());

import App from '../App';
import Overview from '../components/overview/Overview';
import RelatedAndOutfits from '../components/relatedItems/RelatedAndOutfits';

describe('App', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrap.exists()).to.be.true;
  });

  it('should mount some components', () => {
    expect(wrap.isEmptyRender()).to.be.false;
  });

  it('should render an Overview component', () => {
    expect(wrap.find(Overview)).to.have.lengthOf(1);
  });

  it('should render RelatedAndOutfits component', () => {
    expect(wrap.find(RelatedAndOutfits)).to.have.lengthOf(1);
  });

  it('should wrap RelatedAndOutfits in a positioning div', () => {
    expect(wrap.find('.col-center')).to.have.lengthOf(1);
  });

});
