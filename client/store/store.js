import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/mainReducer';
// import prod3StyleData from '../../exampleData/prodStyles/product3Style';

const initialState = {
  count: 0,
  currentProductId: null,
  products: {},
  show: false
};

const store = createStore(rootReducer,
  initialState,
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

export default store;
