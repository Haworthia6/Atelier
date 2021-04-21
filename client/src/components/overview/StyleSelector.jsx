import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function StyleSelector ({styleList, currentStyle, onStyleChange}) {
  const dis = useDispatch();

  return (
    <div>
      <p>Style> {styleList[currentStyle].name}</p>
      {styleList.map((style, index) => {
        if (index === currentStyle) {
          console.log(styleList[currentStyle]);
          return <img src={style.photos[0].thumbnail_url} alt="current style" className ="styleThumbnail" key={index} id={index} onClick={onStyleChange}/>
        } else {
          return <img src={style.photos[0].thumbnail_url} alt="style" className ="styleThumbnail" id={index} key={index} onClick={onStyleChange}/>
        }
      })}
    </div>

  )
}

export default StyleSelector;