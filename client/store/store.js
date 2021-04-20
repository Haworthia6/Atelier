import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/mainReducer';
// import prod3StyleData from '../../exampleData/prodStyles/product3Style';

const initialState = {
  count: 0,
  currentProductId: null,
  products: {}
};

/*
THE ROOT REDUCER
const rootReducer = combineReducers({
  count: counterReducer,
  currentProductId: productIdReducer,
  products: productsReducer
});

-----------------------------------
THE INITIAL STATE
const initialState = {
  currentProductId: 11003,
  // Each key in products is the product ID
  products: {
    11003: {
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      description: 'Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.',
      category: 'pants,
      defaultPrice: '40.00',
      features: [
          {
            "feature": "Fabric",
            "value": "100% Cotton"
        },
        {
            "feature": "Cut",
            "value": "Skinny"
        }
      ],
      styleList: prod3StyleData.results,
      avgRating: 3 // Need to have helper create avg after fetching productMetaData,
      relatedItemsIds: [ 11005, 11009, 11007, 11002, 11001]
    }
  }
}
 */

const store = createStore(rootReducer,
  initialState,
  compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export default store;