import React from 'react';

const CrossedOutPrice = (({price, salePrice}) => {
  return (
    <div>
      <p className="crossed-out">{price}</p>
      <p>{salePrice}</p>
    </div>);
});
export default CrossedOutPrice;