import { has } from 'lodash';

export default (obj) => {
  let amt = 0;
  for (let key in obj) {
    if (has(obj, key)) {
      amt += Number(obj[key]);
    }
  }
  return amt;
};
