import calculateAverage from '../helpers/calculateAverage';

describe('calculateAverage()', () => {
  it('should return a percentage', () => {
    expect(calculateAverage({
      '5': '1'
    })).toBe('100%');
  });
  it('should return a percentage based on the rating', () => {
    expect(calculateAverage({
      '4': '3',
      '5': '1'
    })).toBe('85%');
  });
});
