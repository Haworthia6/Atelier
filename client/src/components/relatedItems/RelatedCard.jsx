import React from 'react';
import changeProduct from '../../../store/actions/changeProduct';

function RelatedCard ({ product, dispatch, setLoading }) { // Will receive an object representing a single product
  const defaultStyle = (() => {
    const styles = product.styleList;
    for (let style of styles) {
      if (style['default?']) return style;
    }
    return styles[0];
  })();

  const handleImageClick = () => {
    // This triggers an application change of id CHANGE_PRODUCT
    setLoading(true);
    dispatch(changeProduct(product.id));
  }

  return (
    <div className="card-component">
      <div className="card-top">
        <div className="related-item-action-button btn-round">button</div>
        <img
          className="related-item-image"
          src={defaultStyle.photos[0]['thumbnail_url']}
          alt={product.name}
          onClick={handleImageClick}
        />
        {/* <div className="related-thumbnails-extra">
        <img className="related-thumbnail-img-extra" src="#" alt="thumbnail" />
      </div> */}
      </div>
      <div className="card-bottom">
        <span className="related-category">{product.category}</span>
        <h6 className="related-name">{product.name}</h6>
        {/* Will need to see if there is a sale price */}
        <p className="related-price">{defaultStyle.originalPrice}</p>
        <div className="stars-component">STARS</div>
      </div>
    </div>
  );
}

export default RelatedCard;
