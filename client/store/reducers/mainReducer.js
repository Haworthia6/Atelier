import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productIdReducer from './productIdReducer';
import productsReducer from './productsReducer';
import toggleShowReducer from './toggleShowReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  currentProductId: productIdReducer,
  products: productsReducer,
  show: toggleShowReducer
});

export default rootReducer;
