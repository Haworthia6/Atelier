import React from 'react';
import PropTypes from 'prop-types';

function Stars ({ product }) {
  return (
    <div className="stars-container">
      <div className="stars-top">
        <span >&#9734;</span><span >&#9734;</span><span >&#9734;</span><span >&#9734;</span><span >&#9734;</span>
      </div>
      {/* Above is Unfilled, Below is Filled */}
      <div className="stars-bottom" style={{ width: product.avgRating }}>
        <span >&#9733;</span><span >&#9733;</span><span >&#9733;</span><span >&#9733;</span><span >&#9733;</span>
      </div>
    </div>
  );
}

// Props Checking -------------------
Stars.propTypes = {
  product: PropTypes.shape({
    avgRating: PropTypes.string.isRequired
  })
};

export default React.memo(Stars);
