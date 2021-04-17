import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productIdReducer from './productIdReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
  count: counterReducer,
  currentProductId: productIdReducer,
  products: productsReducer
});

export default rootReducer;