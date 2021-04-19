

function addRelated (id) {

  return (dispatch, getState) => {
    if (getState().products[id]) {
      return dispatch({ type: 'NO_ADD', payload: {} });
    }

    // Here call the chain of requests to get the item object based off the id
    // the above call will create the same object as changeProduct AC, but will require me to create a different action object

    // dispatch({ type: 'ADD_RELATED_ITEM', payload: data})

    // if error
    // dispatch({ type: 'ERROR', payload: {} })
  };
}

export default addRelated;
