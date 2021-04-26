import React from 'react';

function ProductDescription ({description, features}) {
  return (
    <div>
      <div className="product-description">
        {description}
      </div>
      <p>THIS SHOULD BE A VERTICAL LINE SEPARATING THE DESCRIPTION FROM THE FEATURES</p>
      <div>
        {features.map((feature, i) => {
          if (feature.value === null) {
            return <p className="product-description-feature" key={i}>{feature.feature}</p>;
          }
          return <p className="product-description-feature" key={i}>{feature.value} {feature.feature}</p>;
        })}
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default ProductDescription;