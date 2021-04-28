import React from 'react';
import {GrFacebook} from 'react-icons/gr';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaPinterestSquare } from 'react-icons/fa';
import {FacebookShareButton, TwitterShareButton, PinterestShareButton} from 'react-share';
import Price from '../Price';
import PropTypes from 'prop-types';
function ProductInfo ({rating, category, name, price, salePrice}) {

  return (
    <div>This is the product info
      <p>{rating}</p>
      <p>{category}</p>
      <p>{name}</p>
      <Price price={price} salePrice={salePrice}/>
      <div>
        {/*NEED TO CHANGE URLS TO THE CORRECT ONE*/}
        <span className="share">
          <FacebookShareButton
            url="#"
            quote="Buy this instantly">
            <GrFacebook/>
          </FacebookShareButton>
        </span>
        <span className="share">
          <TwitterShareButton
            url="#"
            title="Haworthia">
            <AiFillTwitterSquare/>
          </TwitterShareButton>
        </span>
        <span className="share">
          <PinterestShareButton
            url="#"
            media="#"
            description='This piece is dope'>
            <FaPinterestSquare/>
          </PinterestShareButton>
        </span>
      </div>
    </div>
  );
}
ProductInfo.propTypes = {
  rating: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  salePrice: PropTypes.string
};

export default ProductInfo;