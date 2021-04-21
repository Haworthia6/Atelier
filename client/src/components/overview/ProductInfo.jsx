import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function ProductInfo (props) {
  const dis = useDispatch();
  const renderPrice = () => {
    if (props.salePrice === null) {
      return <p>{props.price}</p>
    } else {
      return(
      <div>
        <p>{props.price} CROSS THIS OUT </p>
        <p>{props.salePrice}</p>
      </div>)

    }
  }

  return (
    <div>This is the product info
      <p>{props.rating}</p>
      <p>{props.category}</p>
      <p>{props.name}</p>
      {renderPrice()}
    </div>
  )
}

export default ProductInfo;