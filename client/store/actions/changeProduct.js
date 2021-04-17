import fetchProductRequest from '../helpers/fetchProductRequest'

function changeProduct(id) {

  return (dispatch, getState) => {
    if (getState().products[id]) {
      return dispatch({ type: 'CHANGE_PRODUCT', payload:  { id } });
    }

    fetchProductRequest(dispatch, id)
      .then((data) => {
        dispatch({ type: 'CHANGE_PRODUCT', payload: { [id]: data } });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: 'ERROR', payload: getState().currentProductId});
      });
  };
}

export default changeProduct;
