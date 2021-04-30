import chai from 'chai';
const expect = chai.expect;
import getAmtRatings from '../helpers/getAmtRatings';

describe('getAmtRatings', () => {
  it('should return the correct number of ratings', () => {
    expect(getAmtRatings({
      '4': '3',
      '5': '1'
    })).to.equal(4);

    expect(getAmtRatings({
      '4': '25',
      '2': '33'
    })).to.equal(58);
  });
});
