import React from 'react';
import {GrFacebook} from 'react-icons/gr';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaPinterestSquare } from 'react-icons/fa';
import {FacebookShareButton, TwitterShareButton, PinterestShareButton} from 'react-share';
import Price from '../Price';
import Stars from '../Stars';
import PropTypes from 'prop-types';
function ProductInfo ({product, category, name, price, salePrice}) {

  return (
    <div className="product-info-container">
      <div className="product-info-rating">
        <Stars product={product}/>
      </div>
      <div className="product-info-category">{category}</div>
      <div className="product-info-name">{name}</div>
      <Price price={price} salePrice={salePrice}/>
      <div className="share-icon-list">
        {/*NEED TO CHANGE URLS TO THE CORRECT ONE*/}
        <span className="share">
          <FacebookShareButton
            url="#"
            quote="Buy this instantly">
            <GrFacebook size={26}/>
          </FacebookShareButton>
        </span>
        <span className="share">
          <TwitterShareButton
            url="#"
            title="Haworthia">
            <AiFillTwitterSquare size={32}/>
          </TwitterShareButton>
        </span>
        <span className="share">
          <PinterestShareButton
            url="#"
            media="#"
            description='This piece is dope'>
            <FaPinterestSquare size={26}/>
          </PinterestShareButton>
        </span>
      </div>
    </div>
  );
}
ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  salePrice: PropTypes.string
};

export default ProductInfo;