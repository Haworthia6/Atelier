import React, {useState} from 'react';
import {FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {HiPhotograph, HiOutlinePhotograph} from 'react-icons/hi';
import InnerImageZoom from 'react-inner-image-zoom';


function ExpandedView ({photos, changePhoto, currentPhoto, changeView}) {
  const [zoom, setZoom] = useState(false);
  const toggleZoom = () =>  zoom ? setZoom(false) : setZoom(true);

  const renderIcons = () => {
    if (!zoom) {
      return (<div className="expandedIconContainer">
        {photos.map((photo, index) => {
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
        })}</div>);
    }
  };
  const iconClick = (e) => {
    if (e.target.parentElement.id) {
      changePhoto(parseInt(e.target.parentElement.id));
    } else if (e.target.parentElement.parentElement.id){
      changePhoto(parseInt(e.target.parentElement.parentElement.id));
    } else {
      changePhoto(parseInt(e.target.id));
    }
  };
  const leftArrowClick = () => {
    changePhoto(currentPhoto - 1);
  };
  const rightArrowClick = () => {
    changePhoto(currentPhoto + 1);
  };
  if (photos.length) {
    // make an onHover function that changes the mouse to a '+'
    return (
      <section className="expandedModal">
        { (currentPhoto && !zoom) && <div className="arrow-icon left-arrow-expanded" onClick={leftArrowClick}> <FiArrowLeft/> </div> }
        {renderIcons()}
        {currentPhoto !== photos.length - 1 && !zoom &&
        <div className="arrow-icon right-arrow-expanded" onClick={rightArrowClick}>
          <FiArrowRight/>
        </div>}
        <div className="expandedCarousel">
          {photos.map((photo, index) => {
            if (index === currentPhoto) {
              return (
                <div className={index===currentPhoto ? 'currentSlideExpanded' : 'slideExpanded'} key={index}>
                  {(<InnerImageZoom src={photo.url} zoomScale={2.5} afterZoomIn={toggleZoom} afterZoomOut={toggleZoom}/>)}
                </div>
              );
            } else {
              return (
                <div className='slideExpanded' key={index}>
                  {index === currentPhoto && (<img src={photo.url} alt="photo" className="expandedCarouselPhoto"/>)}
                </div>
              );
            }
          })}
        </div>
        <button onClick={changeView}>return to default view</button>
      </section>
    );
  }
}

export default ExpandedView;