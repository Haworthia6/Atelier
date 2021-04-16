import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/mainReducer'

const initialState = {
  count: 0
}

const store = createStore(rootReducer,
  initialState,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

export default store;