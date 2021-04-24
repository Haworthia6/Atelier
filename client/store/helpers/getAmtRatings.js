import { has } from 'lodash';

function getAmtRatings (obj) {
  let amt = 0;
  for (let key in obj) {
    if (has(obj, key)) {
      amt += Number(obj[key]);
    }
  }
  return amt;
}

export default getAmtRatings;