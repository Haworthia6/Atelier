import React from 'react'

function ImageGallery ({ image, handleImageChange }) {
  return (
    <div>{image.src}</div>
  )
}

export default ImageGallery
