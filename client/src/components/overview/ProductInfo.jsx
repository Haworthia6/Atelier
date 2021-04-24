import React from 'react';
import {GrFacebook} from "react-icons/gr";

function ProductInfo (props) {
  const renderPrice = () => {
    if (props.salePrice === null) {
      return <p>{props.price}</p>;
    } else {
      return(
        <div>
          <p className="crossed-out">{props.price}</p>
          <p>{props.salePrice}</p>
        </div>);

    }
  };

  return (
    <div>This is the product info
      <p>{props.rating}</p>
      <p>{props.category}</p>
      <p>{props.name}</p>
      {renderPrice()}
      <div>
        share buttons
        <button className="share"></button>
      </div>
    </div>
  )
}

export default ProductInfo;