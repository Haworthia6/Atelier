import fetchProductRequest from '../helpers/fetchProductRequest'

function addRelated (id) {

  return (dispatch, getState) => {

    if (getState().products[id]) {
      return dispatch({ type: 'NO_ADD', payload: {} });
    }

    fetchProductRequest(id)
    .then((data) => {
        dispatch({ type: 'ADD_RELATED_PRODUCT', payload: { [id]: data }})
      })
      .catch((err) => {
        console.error(err)
        dispatch({ type: 'NO_CHANGE', payload: {} })
      })
  };
}

export default addRelated;
