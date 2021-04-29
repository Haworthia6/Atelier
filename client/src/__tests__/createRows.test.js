import chai from 'chai';
import createRows from '../helpers/createRows';
import createComparisons from '../helpers/createComparisons';
import comparedProducts from '../../../exampleData/comparedProducts';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import toJSON from 'enzyme-to-json';
import React from 'react';

describe('createComparisons and createRows', () => {
  let comparisons, combinedComparisons, keys;
  beforeEach(() => {
    const { current, related } = comparedProducts;
    comparisons = createComparisons(current, related);
    combinedComparisons = createRows(comparisons);
    keys = Object.keys(comparisons);
  });

  it('should match its snapshot', () => {
    expect(toJSON(<>{combinedComparisons}</>)).toMatchSnapshot();
  });

  it('should combine the current and related features into a single object', () => {
    chai.expect(keys).to.eql(['Fabric', 'Cut', 'Sole', 'Material', 'Mid-Sole', 'Stitching']);
    chai.expect(comparisons).to.be.an('object');
  });

  it('should return each value of the key as a tuple', () => {
    const keys = Object.keys(comparisons);
    chai.expect(comparisons[keys[0]]).to.be.an('array');
    chai.expect(comparisons[keys[0]]).to.eql(['100% Cotton', '']);
    chai.expect(comparisons[keys[1]]).to.eql(['Skinny', '']);
  });

  it('should should combine current and related features into a row', () => {
    chai.expect(combinedComparisons).to.have.lengthOf(6);
    combinedComparisons.forEach((row) => {
      chai.expect(row.type).to.equal('tr');
    });
  });

});

