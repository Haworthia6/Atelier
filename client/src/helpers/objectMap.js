import { has } from 'lodash';

export default {
  hasOwnMap: (obj) => {
    const result = [];
    for (let key in obj) {
      if (has(obj, key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }
};
