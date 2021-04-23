
function outfitsReducer (state = {}, action) {
  switch (action.type) {
  case 'ADD_OUTFIT': {
    return { ...state, [action.payload.id]: action.payload };
  }
  default: {
    return state;
  }
  }
}

export default outfitsReducer;
