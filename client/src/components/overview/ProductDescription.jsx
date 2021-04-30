import React from 'react';
import PropTypes from 'prop-types';
function ProductDescription ({description, features}) {
  return (
    <div className="description-and-features-container">
      <div className="product-description">
        {description}
      </div>
      <div className="line-container">
        <div className="line">
        </div>
      </div>
      <div className="features">
        {features.map((feature, i) => {
          if (feature.value === null) {
            return <p className="product-feature" key={i}>{feature.feature}</p>;
          }
          return <p className="product-feature" key={i}>{feature.value} {feature.feature}</p>;
        })}
      </div>
      <br/>
      <br/>
    </div>
  );
}
ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired
};
export default ProductDescription;