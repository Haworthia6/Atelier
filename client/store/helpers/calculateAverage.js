import { map } from 'lodash';
import getAmtRatings from './getAmtRatings';
import roundRating from './roundRating';

// Returns the rating as a percentage number
function getAverage (ratings) {
  const total = getAmtRatings(ratings);

  return (
    `${(roundRating (
      map(ratings, (amt, rating) => {
        return Number(rating) * Number(amt);
      })
        .reduce((sum, num) => {
          return sum + num;
        }, 0) / total) * 20)}%`
  );
}

export default getAverage;
