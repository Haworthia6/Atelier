import React, {useState} from 'react';
import {FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {HiPhotograph, HiOutlinePhotograph} from 'react-icons/hi';

function ExpandedView ({photos, changePhoto, currentPhoto, changeView}) {
  const [zoom, setZoom] = useState(false);
  const zoomIn = () => {
    console.log(zoom);
    setZoom(true);
  };
  const zoomOut = () => {
    setZoom(false);
  };
  const renderLeftArrow = () => {
    if (currentPhoto !== 0) {
      return (
        <div className="arrow-icon left-arrow-expanded" onClick={leftArrowClick}>
          <FiArrowLeft/>
        </div>
      );
    } else {
      return null;
    }
  };
  const renderRightArrow = () => {
    if (currentPhoto !== photos.length - 1) {
      return (
        <div className="arrow-icon right-arrow-expanded" onClick={rightArrowClick}>
          <FiArrowRight/>
        </div>
      );
    } else {
      return null;
    }
  };
  const renderIcons = () => {
    return photos.map((photo, index) => {
      if (index === currentPhoto) {
        return (
          <div alt="icon" className="expanded-icon" id={index} key={index}>
            <HiOutlinePhotograph/>
          </div>
        );
      }
      return (
        <div alt="icon" className="expanded-icon" id={index} key={index} onClick={iconClick}>
          <HiPhotograph/>
        </div>
      );
    });
  };
  const iconClick = (e) => {
    console.log('new photo', e.target.id);
    changePhoto(parseInt(e.target.id));
  };
  const leftArrowClick = () => {
    changePhoto(currentPhoto - 1);
  };
  const rightArrowClick = () => {
    changePhoto(currentPhoto + 1);
  };
  if (photos.length === 0) {
    return null;
  } else if (zoom) {
    //make the image 2.5x larger and move with the mouse
    //change mouse cursor to a '-'
    return (<img src={photos[currentPhoto].url} alt="photo" className="expanded-carousel-photo" onClick={zoomOut}/>);
  } else {
    // make an onHover function that changes the mouse to a '+'
    return (
      <section className="expanded-carousel">
        {renderLeftArrow()}
        {renderIcons()}
        {renderRightArrow()}
        <div>
          {photos.map((photo, index) => {
            return (
              <div className={index===currentPhoto ? 'currentSlide' : 'slide'} key={index}>
                {index === currentPhoto && (<img src={photo.url} alt="photo" className="expanded-carousel-photo" onClick={zoomIn}/>)}
              </div>
            );
          })}
        </div>
        <button onClick={changeView}>return to default view</button>
      </section>
    );
  }
}

export default ExpandedView;