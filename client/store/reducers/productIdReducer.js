
function productIdReducer (state = null, action) {
  switch(action.type) {
  case 'CHANGE_PRODUCT': {
    for (let key in action.payload) {
      return key;
    }
    break;
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