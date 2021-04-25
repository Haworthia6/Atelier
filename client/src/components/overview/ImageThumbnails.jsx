import React from 'react';
const ImageThumbnails = ({photos, currentThumbnailUrl, thumbnailClick}) => {
  return photos.map((photo, index) => {
    // if photo is currentPhoto, highlight it
    if (photo.thumbnail_url === currentThumbnailUrl) {
      return  <img src={photo.thumbnail_url} alt="photo" className="carousel-thumbnail highlighted" id={index} key={index} onClick={thumbnailClick}/>;
    }
    // else
    return <img src={photo.thumbnail_url} alt="photo" className="carousel-thumbnail" id={index} key={index} onClick={thumbnailClick}/>;
  });
};
export default ImageThumbnails;