import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import React from 'react';
import { shallow } from 'enzyme';
import Comparing from '../components/relatedItems/Comparing';
import Rows from '../components/relatedItems/Rows';
const exampleCompared = {
  current: {
    features: [],
    name: 'current-test-name'
  },
  related: {
    features: [],
    name:'related-test-name'
  }
};

describe('Comparing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Comparing
        visibility={'fade-in'}
        comparedProducts={exampleCompared}
      />
    );
  });

  it('should render a div container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have a className dependant on visibility prop', () => {
    expect(wrapper.find('.fade-in')).to.have.lengthOf(1);
    wrapper.setProps({ visibility: 'fade-out' });
    expect(wrapper.find('.fade-in')).to.have.lengthOf(0);
    expect(wrapper.find('.fade-out')).to.have.lengthOf(1);
  });

  it('should contain a main container that is the modal', () => {
    expect(wrapper.find('.modal').type()).to.equal('main');
  });

  it('should have a header that renders component title', () => {
    expect(wrapper.find('.modal-header').childAt(0).text()).to.match(/Comparing/);
  });

  it('should render content in a table', () => {
    expect(wrapper.find('.modal-content').type()).to.equal('table');
  });

  it('should render current product name in table header', () => {
    expect(wrapper.find('.modal-content thead tr th').first().text()).to.match(/current-test-name/);
  });

  it('should render related product name in table header', () => {
    expect(wrapper.find('.modal-content thead tr th').last().text()).to.match(/related-test-name/);
  });

  it('should render a table body', () => {
    expect(wrapper.find('.comparing-container tbody')).to.have.lengthOf(1);
  });

  it('should render Rows component', () => {
    expect(wrapper.find(Rows)).to.have.lengthOf(1);
  });

  it('should pass props to Rows', () => {
    expect(wrapper.find(Rows)).to.have.prop('comparedProducts');
  });

  it('should render a footer', () => {
    expect(wrapper.find('.modal-footer').type()).to.equal('div');
  });

  // Test Rows render
  // Test dynamic text rendering on State change (comparedProducts)

});