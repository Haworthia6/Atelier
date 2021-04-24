import React from 'react';
import {GrFacebook} from 'react-icons/gr';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaPinterestSquare } from 'react-icons/fa';
import {FacebookShareButton, TwitterShareButton, PinterestShareButton} from 'react-share';
import Price from '../Price';

function ProductInfo (props) {

  return (
    <div>This is the product info
      <p>{props.rating}</p>
      <p>{props.category}</p>
      <p>{props.name}</p>
      <Price price={props.price} salePrice={props.salePrice}/>
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

export default ProductInfo;