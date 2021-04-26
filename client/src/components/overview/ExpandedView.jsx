import React, {useState} from 'react';
import {FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {HiPhotograph, HiOutlinePhotograph} from 'react-icons/hi';

/*
WILL REFACTOR EXPANDED VIEW SO THAT IT IS A MODAL INSTEAD OF A COMPONENT THAT RENDERS CONDITIONALLY INSTEAD OF THE REST OF OVERVIEW

when modal is displayed, if zoomed out and clicked, transform the size by 2.5, and track mouse movement.
the mouse movement should scroll the page when moved
if zoomed in and clicked, transform size by 0.4
*/

function ExpandedView ({photos, changePhoto, currentPhoto, changeView}) {
  const [zoom, setZoom] = useState(false);
  const toggleZoom = () => {
    var carouselPhoto = document.getElementsByClassName('expandedCarouselPhoto')[0];
    if (zoom === true) {
      setZoom(false);
      carouselPhoto.classList.remove('zoomed-in');
    } else {
      setZoom(true);
      carouselPhoto.classList.add('zoomed-in');
    }
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
          <div alt="icon" className="expandedIcon" id={index} key={index}>
            <HiOutlinePhotograph/>
          </div>
        );
      }
      return (
        <div alt="icon" className="expandedIcon" id={index} key={index} onClick={iconClick}>
          <HiPhotograph/>
        </div>
      );
    });
  };
  const iconClick = (e) => {
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
  } else {
    // make an onHover function that changes the mouse to a '+'
    return (
      <section className="expandedModal">
        {renderLeftArrow()}
        {renderIcons()}
        {renderRightArrow()}
        <div className="expandedCarousel">
          {photos.map((photo, index) => {
            return (
              <div className={index===currentPhoto ? 'currentSlideExpanded' : 'slideExpanded'} key={index}>
                {index === currentPhoto && (<img src={photo.url} alt="photo" className="expandedCarouselPhoto" onClick={toggleZoom}/>)}
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