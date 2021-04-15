// Not sure if this is needed
import Redux from 'redux'

const imageGalleryReducer = (state = { src: 'test string' }, action) => {
  switch(action.type) {
    case 'CHANGE_IMAGE': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default imageGalleryReducer
