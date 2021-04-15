import { createStore } from 'redux'
// Add middleware here??
import rootReducer from './reducers/root'

const initialState = {
  imageGallery: { src: 'test string' }
}

// Add middleware and dev tools?
const store = createStore(rootReducer, initialState);
store.subscribe(() => {
  console.log('Subscribed to the Redux store!')
})

export default store
