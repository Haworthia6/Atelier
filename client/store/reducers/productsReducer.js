
function productsReducer (state = {}, action) {
  switch(action.type) {
    case 'CHANGE_PRODUCT': {
      return Object.assign({...state}, action.payload)
    }
    default: {
      return state
    }
  }
}

export default productsReducer