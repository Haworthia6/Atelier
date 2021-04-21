import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function ProductDescription ({description, features}) {
  const dis = useDispatch();
  console.log('FEATURES: ', features);
  return (
    <div>
      <div className="description">
        {description}
      </div>
      <p>THIS SHOULD BE A VERTICAL LINE SEPARATING THE DESCRIPTION FROM THE FEATURES</p>
      <div>
        {features.map((feature, i) => {
          if (feature.value === null) {
            return <p className="feature" key={i}>{feature.feature}</p>
          }
          return <p className="feature" key={i}>{feature.value} {feature.feature}</p>
        })}
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default ProductDescription;