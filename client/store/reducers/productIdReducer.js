
function productIdReducer (state = null, action) {
  switch(action.type) {
  case 'CHANGE_PRODUCT': {
    for (let key in action.payload) {
      return key;
    }
    break;
  }
  default: {
    return state;
  }
  }
}

export default productIdReducer;