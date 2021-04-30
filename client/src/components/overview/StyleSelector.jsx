import React from 'react';
import splitArray from '../../helpers/splitArray';
import StyleThumbnail from './StyleThumbnail';
import PropTypes from 'prop-types';
function StyleSelector ({styleList, currentStyle, onStyleChange}) {
  return (
    <div className="style-selector-container">
      <p>Style{'>'} {styleList[currentStyle].name}</p>
      <div className="styleListContainer">
        {splitArray(styleList).map((row, rowIndex) => {
          return (
            <div className="four-thumb"key={rowIndex}>
              {row.map((style, styleIndex) => {
                return <StyleThumbnail
                  style={style}
                  styleList={styleList}
                  onStyleChange={onStyleChange}
                  currentStyle={currentStyle}
                  key={styleIndex}
                  id={(rowIndex * 4) + styleIndex}/>;
              })}
            </div>);
        })}
      </div>
    </div>

  );
}
StyleSelector.propTypes = {
  styleList: PropTypes.array.isRequired,
  currentStyle: PropTypes.number.isRequired,
  onStyleChange: PropTypes.func.isRequired
};
export default StyleSelector;