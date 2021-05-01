import fetchProductRequest from '../helpers/fetchProductRequest';

export default (id) => {
  return (dispatch, getState) => {
    if (getState().products[id]) {
      return dispatch({ type: 'CHANGE_ID', payload: id });
    }
    fetchProductRequest(id)
      .then((data) => {
        dispatch({ type: 'CHANGE_PRODUCT', payload: { [id]: data }, id: id });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: 'ERROR', payload: getState().currentProductId});
      });
  };
};
