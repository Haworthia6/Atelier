import React from 'react';

function RelatedCard () { // Will receive an object representing a single product

  // Will take the information on the object and build the card

  return (
    <div className="card-component">
      <div className="card-top">
        <div className="related-item-action-button btn-round">button</div>
        <img className="related-item-image" src="#" alt="related item image"/>
        {/* <div className="related-thumbnails-extra">
        <img className="related-thumbnail-img-extra" src="#" alt="thumbnail" />
      </div> */}
      </div>
      <div className="card-bottom">
        <p className="related-category" >CATEGORY</p>
        <h6 className="related-name">PRODUCT TITLE</h6>
        <p className="related-price">$123</p>
        <div className="stars-component">STARS</div>
      </div>
    </div>

  );
}

export default RelatedCard;
