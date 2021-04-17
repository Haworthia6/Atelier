import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productIdReducer from './productIdReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  products: productsReducer, // Products needs to come before id change for Kenny
  currentProductId: productIdReducer
});

export default rootReducer;