import { map } from 'lodash';
import getAmtRatings from './getAmtRatings';
import roundRating from './roundRating';

function getAverage (ratings) {
  const total = getAmtRatings(ratings);

  return (
    roundRating (
      map(ratings, (amt, rating) => {
        return Number(rating) * Number(amt);
      })
        .reduce((sum, num) => {
          return sum + num;
        }, 0) / total)
  );
}

export default getAverage;
