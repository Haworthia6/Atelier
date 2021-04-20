import axios from 'axios';
import calculateAverage from './calculateAverage';
const URL = 'http://localhost:3000/';

function fetchProductRequest (id) {

  return Promise.all([
    axios.post(URL + 'product/', { id }),
    axios.post(URL + 'styles/', { id }),
    axios.post(URL + 'meta/', { id }),
    axios.post(URL + 'related/', { id })
  ])
  .then((data) => {
    return data.reduce((accum, { data }, i) => {
      if (i === 0) {
        return {
          category: data.category,
          id: data.id,
          description: data.description,
          slogan: data.slogan,
          features: data.features,
          name: data.name
        };
      } else if (i === 1) {
        return { ...accum, styleList: data.results };
      } else if (i === 2) {
        return {...accum, avgRating: calculateAverage(data.ratings)};
      } else if (i === 3) {
        return {...accum, relatedItemsIds: data};
      } else {
        return accum;
      }
    }, {});
  })
}

export default fetchProductRequest;
