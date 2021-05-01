import getAmtRatings from '../helpers/getAmtRatings';

describe('getAmtRatings', () => {
  it('should return the correct number of ratings', () => {
    expect(getAmtRatings({
      '4': '3',
      '5': '1'
    })).toBe(4);

    expect(getAmtRatings({
      '4': '25',
      '2': '33'
    })).toBe(58);
  });
});

