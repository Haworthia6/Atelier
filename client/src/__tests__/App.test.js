import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());

import App from '../App';

describe('App', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<App status={'complete'} />);
  });

  it('should exist', () => {
    expect(wrap.exists()).to.be.true;
  });

  it('should mount some components', () => {
    expect(wrap.isEmptyRender()).to.be.false;
  });

  it('should render a div', () => {
    expect(wrap.find('div')).to.have.lengthOf(1);
  });

  xit('should successfully make an API request', () => {
    wrap.find('button').invoke('onClick')().then(({data}) => {
      expect(data).to.have.own.property('abilities');
    });
  });

  it('should dynamically render text', () => {
    expect(wrap.find('div').text()).to.include('React');
  });

  xit('should fail with this test', () => {
    expect(wrap.isEmptyRender()).to.be.true;
  });

});
