import { combineReducers } from 'redux'
import imageGalleryReducer from './imageGallery'

const rootReducer = combineReducers({
  imageGallery: imageGalleryReducer
})

export default rootReducer
