import { expect } from 'chai';
import roundRating from '../helpers/roundRating';

describe('roundRating', () => {

  it('should turn a string into a number', () => {
    expect(roundRating('5')).to.be.a('number');
  });

  it('should round a string up', () => {
    expect(roundRating('3.39')).to.equal(3.5);
  });

  it('should round a string down', () => {
    expect(roundRating('3.12')).to.equal(3);
  });
});