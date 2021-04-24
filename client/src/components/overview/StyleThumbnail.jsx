import React from 'react';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';

const StyleThumbnail = (({style, styleList, onStyleChange, currentStyle, key, id}) => {
  if (style.style_id === styleList[currentStyle].style_id) {
    return (<span className="selectedStyleContainer" key={key}>
      <IoMdCheckmarkCircleOutline className="overlay"/>
      <img src={style.photos[0].thumbnail_url} alt="current style" className="styleThumbnail" id={id} onClick={onStyleChange}/>
    </span>);
  } else {
    return <img src={style.photos[0].thumbnail_url} alt="style" className ="styleThumbnail" id={id} key={key} onClick={onStyleChange}/>;
  }
});
export default StyleThumbnail;