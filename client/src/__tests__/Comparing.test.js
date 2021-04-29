import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import React from 'react';
import { shallow } from 'enzyme';
import Comparing from '../components/relatedItems/Comparing';
import Rows from '../components/relatedItems/Rows';
import toJSON from 'enzyme-to-json';
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

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render a div container', () => {
    chai.expect(wrapper.type()).to.equal('div');
  });

  it('should have a className dependant on visibility prop', () => {
    chai.expect(wrapper.find('.fade-in')).to.have.lengthOf(1);
    wrapper.setProps({ visibility: 'fade-out' });
    chai.expect(wrapper.find('.fade-in')).to.have.lengthOf(0);
    chai.expect(wrapper.find('.fade-out')).to.have.lengthOf(1);
  });

  it('should contain a main container that is the modal', () => {
    chai.expect(wrapper.find('.modal').type()).to.equal('main');
  });

  it('should have a header that renders component title', () => {
    chai.expect(wrapper.find('.modal-header').childAt(0).text()).to.match(/Comparing/);
  });

  it('should render content in a table', () => {
    chai.expect(wrapper.find('.modal-content').type()).to.equal('table');
  });

  it('should render current product name in table header', () => {
    chai.expect(wrapper.find('.modal-content thead tr th').first().text()).to.match(/current-test-name/);
  });

  it('should render related product name in table header', () => {
    chai.expect(wrapper.find('.modal-content thead tr th').last().text()).to.match(/related-test-name/);
  });

  it('should render a table body', () => {
    chai.expect(wrapper.find('.comparing-container tbody')).to.have.lengthOf(1);
  });

  it('should render Rows component', () => {
    chai.expect(wrapper.find(Rows)).to.have.lengthOf(1);
  });

  it('should pass props to Rows', () => {
    chai.expect(wrapper.find(Rows)).to.have.prop('comparedProducts');
  });

  it('should render a footer', () => {
    chai.expect(wrapper.find('.modal-footer').type()).to.equal('div');
  });

});