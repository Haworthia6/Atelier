import React, {useState} from 'react';
import {FiArrowLeft, FiArrowRight, FiArrowUp, FiArrowDown} from 'react-icons/fi';
import ImageThumbNails from './ImageThumbNails';
import PropTypes from 'prop-types';

function ImageGallery ({photos, imageClick, changePhoto, currentPhoto}) {
  const [currentThumbnails, setThumbnails] = useState(7);
  const [indexAdder, setIndexAdder] = useState(0);
  const renderLeftArrow = () => {
    if (currentPhoto !== 0) {
      return (
        <div className="arrow-icon left-arrow" onClick={leftArrowClick}>
          <FiArrowLeft size={32}/>
        </div>
      );
    } else {
      return null;
    }
  };
  const renderRightArrow = () => {
    if (currentPhoto !== photos.length - 1) {
      return (
        <div className="arrow-icon right-arrow" onClick={rightArrowClick}>
          <FiArrowRight size={32}/>
        </div>);
    } else {
      return null;
    }
  };
  const renderUpArrow = () => {
    if (currentThumbnails > 7) {
      return (
        <div className="arrow-icon up-arrow" onClick={upArrowClick}>
          <FiArrowUp/>
        </div>);
    } else {
      return null;
    }
  };
  const renderDownArrow = () => {
    if (currentThumbnails !== photos.length - 1 && photos.length > 7) {
      return (
        <div className="arrow-icon down-arrow" onClick={downArrowClick}>
          <FiArrowDown/>
        </div>);
    } else {
      return null;
    }
  };
  const renderThumbNails = () => {
    if (photos.length <= 7) {
      return (
        <div className="carousel-thumbnails-container">
          <ImageThumbNails
            photos={photos}
            currentThumbnailUrl={photos[currentPhoto].thumbnail_url}
            thumbnailClick={thumbnailClick}/>
        </div>
      );
    } else {
      if (currentThumbnails - 7 > currentPhoto || currentThumbnails < currentPhoto) {
        // if currentPhoto is not in range of currentThumbnails
        // set currentThumbnails to currentPhoto, then while currentThumbnails is less than 7, add one to currentThumbnails
        var newThumbnails = currentPhoto;
        while(newThumbnails < 7) {
          newThumbnails ++;
        }
        setThumbnails(newThumbnails);
      }
      return (
        <div className="carousel-thumbnails-container">
          {renderUpArrow()}
          {renderDownArrow()}
          <ImageThumbNails
            photos={photos.slice(currentThumbnails - 7, currentThumbnails)}
            currentThumbnailUrl={photos[currentPhoto].thumbnail_url}
            thumbnailClick={thumbnailClick}/>
        </div>);
    }
  };
  const thumbnailClick = (e) => {
    changePhoto(parseInt(e.target.id) + indexAdder);
  };
  const upArrowClick = () => {
    if (currentThumbnails > 7) {
      if (currentPhoto === currentThumbnails) {
        changePhoto(currentPhoto - 1);
      }
      setThumbnails(currentThumbnails - 1);
      setIndexAdder(indexAdder - 1);
    }
  };
  const downArrowClick = () => {
    if (currentThumbnails < photos.length - 1) {
      if (currentPhoto < currentThumbnails - 6) {
        changePhoto(currentPhoto + 1);
      }
      setThumbnails(currentThumbnails + 1);
      setIndexAdder(indexAdder + 1);
    }
    return;
  };
  const leftArrowClick = () => {
    changePhoto(currentPhoto - 1);
  };
  const rightArrowClick = () => {
    changePhoto(currentPhoto + 1);
  };
  if (photos.length === 0) {
    return null;
  }
  else {
    return (
      <div className="image-carousel">
        {renderThumbNails()}
        {renderLeftArrow()}
        {renderRightArrow()}
        {photos.map((photo, index) => {
          return (
            <div className={index===currentPhoto ? 'currentSlide' : 'slide'} key={index}>
              {index === currentPhoto && (<img src={photo.url} alt="photo" className="carousel-photo" onClick={imageClick}/>)}
            </div>
          );
        })}
      </div>
    );
  }
}
ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  imageClick: PropTypes.func.isRequired,
  changePhoto: PropTypes.func.isRequired,
  currentPhoto: PropTypes.number.isRequired
};

export default ImageGallery;