import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Price from '../Price';
import Carousel from './Carousel';

function Card ({ product, defaultStyle, handleImageClick, handleActionClick, render }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(defaultStyle.photos[0]['thumbnail_url']);
  }, [product]);

  return (
    <div className="card-component">
      <div className="card-top">
        <div className="card-button btn-round" onClick={ () => handleActionClick(product.id) }>
          { render() }
        </div>
        <img
          className="card-image"
          src={ image }
          alt={product.name}
          onClick={ () => handleImageClick(product.id) }
        />
        <Carousel
          product={ product }
          handleThumbnailClick={setImage}
        />
      </div>
      <div className="card-bottom">
        <span className="card-category">{product.category}</span>
        <h6 className="card-name">{product.name}</h6>
        <div className="card-price">
          <Price
            price={defaultStyle['original_price']}
            salePrice={defaultStyle['sale_price']}
          />
        </div>
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
  handleActionClick: PropTypes.func.isRequired,
  defaultStyle: PropTypes.shape({
    'original_price': PropTypes.string.isRequired,
    'sale_price': PropTypes.oneOfType([
      PropTypes.string
    ]),
    photos: PropTypes.arrayOf(PropTypes.object).isRequired,
    'default?': PropTypes.bool.isRequired
  }).isRequired,
  handleImageClick: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
};

export default Card;
