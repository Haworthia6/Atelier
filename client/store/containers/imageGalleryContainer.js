import { connect } from 'react-redux'
import imageGallery from '../../src/components/image-gallery/ImageGallery'
import changeCurrentImage from '../actions/changeCurrentImage'

const mapState = (state) => ({
  image: state.imageGallery
})

const mapDispatch = (dispatch) => ({
  handleImageChange: (img) => {
    dispatch(changeCurrentImage(img))
  }
})

const ImageGalleryContainer = connect(mapState, mapDispatch)(imageGallery)

export default ImageGalleryContainer
