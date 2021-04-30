import React from 'react';
import PropTypes from 'prop-types';
const ImageThumbnails = ({photos, currentThumbnailUrl, thumbnailClick}) => {
  return (
    <div className="carousel-thumbnails">
      {photos.map((photo, index) => {
      // if photo is currentPhoto, highlight it
        if (photo.thumbnail_url === currentThumbnailUrl) {
          return  <img src={photo.thumbnail_url} alt="photo" className="carousel-thumbnail highlighted" id={index} key={index} onClick={thumbnailClick}/>;
        }
        // else
        return <img src={photo.thumbnail_url} alt="photo" className="carousel-thumbnail" id={index} key={index} onClick={thumbnailClick}/>;

      })}
    </div>);
};
ImageThumbnails.propTypes = {
  photos: PropTypes.array.isRequired,
  currentThumbnailUrl: PropTypes.string.isRequired,
  thumbnailClick: PropTypes.func.isRequired
};
export default ImageThumbnails;