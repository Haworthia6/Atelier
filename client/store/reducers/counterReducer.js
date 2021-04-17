
const counterReducer = (state = 0, action) => {
  switch(action.type) {
  case 'ADD_COUNT': {
    return action.payload + 1;
  }
  case 'SUBTRACT_COUNT': {
    return action.payload - 1;
  }
  default: {
    return state;
  }
  }
};

export default counterReducer;