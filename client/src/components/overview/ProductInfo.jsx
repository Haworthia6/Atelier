import React from 'react';
import {GrFacebook} from 'react-icons/gr';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaPinterestSquare } from 'react-icons/fa';
import {FacebookShareButton, TwitterShareButton, PinterestShareButton} from 'react-share';
import CrossedOutPrice from '../CrossedOutPrice';

function ProductInfo (props) {
  const renderPrice = () => {
    if (props.salePrice === null) {
      return <p>{props.price}</p>;
    } else {
      return(<CrossedOutPrice price={props.price} salePrice={props.salePrice}/>);

    }
  };

  return (
    <div>This is the product info
      <p>{props.rating}</p>
      <p>{props.category}</p>
      <p>{props.name}</p>
      {renderPrice()}
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