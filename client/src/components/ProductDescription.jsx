import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function ProductDescription (props) {
  const dis = useDispatch();

  return (
    <div>This is the product description
    </div>
  )
}

export default ProductDescription;