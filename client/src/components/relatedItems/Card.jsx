import React from 'react';
import findDefaultStyle from '../../helpers/findDefaultStyle';
import PropTypes from 'prop-types';

function Card ({ product, handleActionClick }) {
  // TODO: Look to see if useMemo would optimize
  const defaultStyle = findDefaultStyle(product);

  return (
    <div className="card-component">
      <div className="card-top">
        <div
          className="related-item-action-button btn-round"
          onClick={() => handleActionClick(product.id)}
        >button</div>
        <img
          className="related-item-image"
          src={defaultStyle.photos[0]['thumbnail_url']}
          alt={product.name}
          // onClick={handleImageClick}
        />
        {/* <div className="related-thumbnails-extra">
        <img className="related-thumbnail-img-extra" src="#" alt="thumbnail" />
      </div> */}
      </div>
      <div className="card-bottom">
        <span className="related-category">{product.category}</span>
        <h6 className="related-name">{product.name}</h6>
        {/* Will need to see if there is a sale price */}
        <div className="related-price">{defaultStyle.originalPrice}</div>
        <div className="stars-component">STARS</div>
      </div>
    </div>
  );
}

// Prop Checking -----------------------
Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    styleList: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  handleActionClick: PropTypes.func.isRequired
};

export default Card;
