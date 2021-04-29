import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import toJSON from 'enzyme-to-json';

import App from '../App';

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

});
