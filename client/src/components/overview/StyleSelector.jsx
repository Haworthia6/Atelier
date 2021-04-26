import React from 'react';
import splitArray from '../../helpers/splitArray';
import StyleThumbnail from './StyleThumbnail';

function StyleSelector ({styleList, currentStyle, onStyleChange}) {
  return (
    <div>
      <p>Style{'>'} {styleList[currentStyle].name}</p>
      <div className="styleListContainer">
        {splitArray(styleList).map((row, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((style, styleIndex) => {
                return <StyleThumbnail style={style} styleList={styleList} onStyleChange={onStyleChange} currentStyle={currentStyle} key={styleIndex} id={(rowIndex * 4) + styleIndex}/>;
              })}
            </div>);
        })}
      </div>
    </div>

  );
}

export default StyleSelector;