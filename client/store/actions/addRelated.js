

function addRelated (id) {

  return (dispatch, getState) => {
    if (getState().products[id]) {
      return dispatch({ type: 'NO_ADD', payload: {} });
    }

    // Here call the chain of requests to get the item object based off the id
  };
}

export default addRelated;
