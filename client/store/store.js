import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/mainReducer';
// import prod3StyleData from '../../exampleData/prodStyles/product3Style';

const initialState = {
  count: 0,
  currentProductId: null,
  products: {}
};

const store = createStore(rootReducer,
  initialState,
  compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export default store;
