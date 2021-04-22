import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productIdReducer from './productIdReducer';
import productsReducer from './productsReducer';
import outfitsReducer from './outfitsReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  currentProductId: productIdReducer,
  products: productsReducer,
  outfits: outfitsReducer
});

export default rootReducer;
