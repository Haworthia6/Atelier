import { combineReducers } from 'redux';
import productIdReducer from './productIdReducer';
import productsReducer from './productsReducer';
import toggleShowReducer from './toggleShowReducer';

const rootReducer = combineReducers({
  currentProductId: productIdReducer,
  products: productsReducer,
  show: toggleShowReducer
});

export default rootReducer;
