import React from 'react';

const Price = (({price, salePrice}) => {
  if (salePrice) {
    return (
      <div>
        <p className="crossed-out-price">{price}</p>
        <p>{salePrice}</p>
      </div>);
  } else {
    return <p className="price">{price}</p>;
  }
});
export default Price;