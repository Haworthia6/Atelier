import { combineReducers } from 'redux';
import productIdReducer from './productIdReducer';
import productsReducer from './productsReducer';
import outfitsReducer from './outfitsReducer';
import toggleShowReducer from './toggleShowReducer';

const rootReducer = combineReducers({
  currentProductId: productIdReducer,
  products: productsReducer,
  outfits: outfitsReducer,
  show: toggleShowReducer
});

export default rootReducer;
