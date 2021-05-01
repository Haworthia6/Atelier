function productsReducer (state = {}, action) {
  switch(action.type) {
  case 'CHANGE_PRODUCT': {
    return {...state, ...action.payload};
  }
  case 'ADD_RELATED_PRODUCT': {
    // Adds item but does nothing else
    return {...state, ...action.payload};
  }
  default: {
    return state;
  }
  }
}

export default productsReducer;
