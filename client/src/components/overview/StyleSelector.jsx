import React, {useState} from 'react';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';

function StyleSelector ({styleList, currentStyle, onStyleChange}) {
  // divide styleList into an array of arrays of 4
  const splitArray = (array) => {
    var styleRows = [];
    var rows = Math.ceil(array.length / 4);
    console.log(rows);
    var currentEle = 0;
    // iterate over rows
    // if current row is not last row, add an array of the next 4 elements to split
    // if current row is last row, push elements into an array until element index is array.length
    for (var i = 0; i < rows; i++)  {
      var row = [];

      if (i !== rows - 1) {
        for (var j = 0; j < 4; j++) {
          row.push(array[currentEle]);
          currentEle ++;
        }
      } else {
        while(currentEle !== array.length) {
          row.push(array[currentEle]);
          currentEle ++;
        }
      }
      styleRows.push(row);
      console.log(styleRows);
    }
    return styleRows;
  };
  return (
    <div>
      <p>Style{'>'} {styleList[currentStyle].name}</p>
      {splitArray(styleList).map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((style, styleIndex) => {
              if (style.style_id === styleList[currentStyle].style_id) {
                return (<span className="selectedStyleContainer" key={styleIndex}>
                  <IoMdCheckmarkCircleOutline className="overlay"/>
                  <img src={style.photos[0].thumbnail_url} alt="current style" className="styleThumbnail" id={(rowIndex * 4) + styleIndex} onClick={onStyleChange}/>
                </span>);
              } else {
                return <img src={style.photos[0].thumbnail_url} alt="style" className ="styleThumbnail" id={(rowIndex * 4) + styleIndex} key={styleIndex} onClick={onStyleChange}/>;
              }
            })}
          </div>);
      })}
    </div>

  );
}

export default StyleSelector;