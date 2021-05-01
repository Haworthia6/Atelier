function toggleShowReducer (state = false, action) {
  switch (action.type) {
  case 'TOGGLE_SHOW': {
    return action.payload;
  }
  default: {
    return state;
  }
  }
}

export default toggleShowReducer;
