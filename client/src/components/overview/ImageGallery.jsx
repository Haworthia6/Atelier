import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {FiArrowLeft, FiArrowRight } from 'react-icons/fi'

function ImageGallery ({photos, imageClick, changePhoto, currentPhoto}) {
  const [view, setView] = useState('normal');
  const dis = useDispatch();
  const renderLeftArrow = () => {
    if (currentPhoto !== 0) {
      return <FiArrowLeft className="left-arrow" onClick={leftArrowClick}/>;
    } else {
      return null;
    }
  }
  const renderRightArrow = () => {
    if (currentPhoto !== photos.length - 1) {
      return <FiArrowRight className="right-arrow" onClick={rightArrowClick}/>;
    } else {
      return null;
    }
  }
  const renderThumbNails = () => {
    return photos.map((photo, index) => {
      return <img src={photo.thumbnail_url} alt="photo" className="thumbnail" id={index} key={index} onClick={thumbnailClick}/>
    })
  }
  const thumbnailClick = (e) => {
    changePhoto(parseInt(e.target.id));
  }
  const leftArrowClick = () => {
    changePhoto(currentPhoto - 1);
  };
  const rightArrowClick = () => {
    changePhoto(currentPhoto + 1);
  }
  if (photos.length === 0) {
    return null
  }
  else {
    return (
      <section className="image-carousel">
        {renderLeftArrow()}
        {renderThumbNails()}
        {renderRightArrow()}
        <div>
          {photos.map((photo, index) => {
            return (
              <div className={index===currentPhoto ? 'currentSlide' : 'slide'} key={index}>
                {index === currentPhoto && (<img src={photo.url} alt="photo" className="photo" onClick={imageClick}/>)}
              </div>
          );
        })}
        </div>
      </section>
    )
  }
}

export default ImageGallery;