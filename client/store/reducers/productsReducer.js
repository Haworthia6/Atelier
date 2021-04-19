
function productsReducer (state = {}, action) {
  switch(action.type) {
  case 'CHANGE_PRODUCT': {
    return Object.assign({...state}, action.payload);
  }
  // Add a case for 'ADD_RELATED_ITEM'
    // performs the same case as above
  default: {
    return state;
  }
  }
}

export default productsReducer;