import React from 'react';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import PropTypes from 'prop-types';

const StyleThumbnail = (({style, styleList, onStyleChange, currentStyle, id}) => {
  if (style.style_id === styleList[currentStyle].style_id) {
    return (<div className="selectedStyleContainer" >
      <IoMdCheckmarkCircleOutline className="overlay"/>
      <img
        src={style.photos[0].thumbnail_url}
        alt="current style"
        className="styleThumbnail"
        id={id}
        onClick={onStyleChange}/>
    </div>);
  } else {
    return (
      <div className="selectedStyleContainer">
        <img
          src={style.photos[0].thumbnail_url}
          alt="style"
          className ="styleThumbnail"
          id={id}
          onClick={onStyleChange}/>
      </div>);
  }
});
StyleThumbnail.propTypes = {
  style: PropTypes.object.isRequired,
  styleList: PropTypes.array.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  currentStyle: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
export default StyleThumbnail;