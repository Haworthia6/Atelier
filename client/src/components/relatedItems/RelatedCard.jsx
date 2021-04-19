import React from 'react';

function RelatedCard ({ product }) { // Will receive an object representing a single product
  const defaultStyle = product.styleList[0]

  return (
    <div className="card-component">
      <div className="card-top">
        <div className="related-item-action-button btn-round">button</div>
        <img className="related-item-image" src={defaultStyle.photos[0]['thumbnail_url']} alt="related item image"/>
        {/* <div className="related-thumbnails-extra">
        <img className="related-thumbnail-img-extra" src="#" alt="thumbnail" />
      </div> */}
      </div>
      <div className="card-bottom">
        <p className="related-category">{product.category}</p>
        <h6 className="related-name">{product.name}</h6>
        {/* Will need to see if there is a sale price */}
        <p className="related-price">{defaultStyle.originalPrice}</p>
        <div className="stars-component">STARS</div>
      </div>
    </div>

  );
}

export default RelatedCard;
