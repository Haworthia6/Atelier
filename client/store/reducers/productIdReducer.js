
function productIdReducer (state = null, action) {
  switch(action.type) {
  case 'CHANGE_PRODUCT': {
    return action.id;
  }
  case 'CHANGE_ID': {
    return action.payload;
  }
  default: {
    return state;
  }
  }
}

export default productIdReducer;