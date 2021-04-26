import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import Rows from '../components/relatedItems/Rows';
import comparedProducts from '../../../exampleData/comparedProducts';

describe('Rows', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Rows
        comparedProducts={comparedProducts}
      />);
  });

  it('should render rows', () => {
    expect(wrapper.isEmptyRender()).to.be.false;
  });

  // Handle rendering of comparisonRows

});
