import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productIdReducer from './productIdReducer';
import productsReducer from './productsReducer';
import outfitsReducer from './outfitsReducer';
import toggleShowReducer from './toggleShowReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  currentProductId: productIdReducer,
  products: productsReducer,
  outfits: outfitsReducer,
  show: toggleShowReducer
});

export default rootReducer;
