import chai from 'chai';
import createRows from '../helpers/createRows';
import createComparisons from '../helpers/createComparisons';
import comparedProducts from '../../../exampleData/comparedProducts';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());

describe('createComparisons and createRows', () => {
  let comparisons, combinedComparisons, keys;
  beforeEach(() => {
    const { current, related } = comparedProducts;
    comparisons = createComparisons(current, related);
    combinedComparisons = createRows(comparisons);
    keys = Object.keys(comparisons);
  });

  it('should combine the current and related features into a single object', () => {
    expect(keys).to.eql(['Fabric', 'Cut', 'Sole', 'Material', 'Mid-Sole', 'Stitching']);
    expect(comparisons).to.be.an('object');
  });

  it('should return each value of the key as a tuple', () => {
    const keys = Object.keys(comparisons);
    expect(comparisons[keys[0]]).to.be.an('array');
    expect(comparisons[keys[0]]).to.eql(['100% Cotton', '']);
    expect(comparisons[keys[1]]).to.eql(['Skinny', '']);
  });

  it('should should combine current and related features into a row', () => {
    expect(combinedComparisons).to.have.lengthOf(6);
    combinedComparisons.forEach((row) => {
      expect(row.type).to.equal('tr');
    });
  });

});

