import axios from 'axios'
const URL = 'http://localhost:3000/'

// This is a placeholder for the makeAVERAGE function
function getAverage (nums) {
  return 3
}

function changeProduct(id) {

  return (dispatch, getState) => {
    if (getState().products[id]) {
      return dispatch({ type: 'CHANGE_PRODUCT', payload:  { id } })
    }

    Promise.all([
      axios.post(URL + 'product/', { id }),
      axios.post(URL + 'styles/', { id }),
      axios.post(URL + 'meta/', { id }),
      axios.post(URL + 'related/', { id })
  ])
  .then((data) => {
      const result = data.reduce((accum, { data }, i) => {
        if (i === 0) {
          return {
            category: data.category,
            id: data.id,
            description: data.description,
            slogan: data.slogan,
            features: data.features,
            name: data.name
          }
        } else if (i === 1) {
          return { ...accum, styleList: data.results }
        } else if (i === 2) {
          return {...accum, avgRating: getAverage(data.ratings)}
        } else if (i === 3) {
          return {...accum, relatedItemsIds: data}
        } else {
          return accum;
        }
      }, {})
      dispatch({ type: 'CHANGE_PRODUCT', payload: { [id]: result } })
    }).catch((err) => {
      console.error(err)
      dispatch({ type: 'ERROR', payload: getState().currentProductId})
    })
  }
}

export default changeProduct