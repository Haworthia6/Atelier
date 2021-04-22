import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import changeProduct from '../../../store/actions/changeProduct';
import findDefaultStyle from '../../helpers/findDefaultStyle';
import PropTypes from 'prop-types';

function RelatedCard (props) {
  const { product, setShow, handleComparingToggle, setToggleComparing, setShowModal } = props;
  const defaultStyle = findDefaultStyle(product);
  const dispatch = useDispatch();

  const handleImageClick = () => {
    // Block renders to DOM
    setShow(false);
    // Change Product ID
    dispatch(changeProduct(product.id));
  };

  const handleActionClick = useCallback(() => {
    setShowModal(true);
    setToggleComparing('fade-in');
    handleComparingToggle(product.id);
  }, [product]);

  return (
    <div className="card-component">
      <div className="card-top">
        <div
          className="related-item-action-button btn-round"
          onClick={handleActionClick}
        >button</div>
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
        <div className="related-price">{defaultStyle.originalPrice}</div>
        <div className="stars-component">STARS</div>
      </div>
    </div>
  );
}

// Prop Checking -----------------------
RelatedCard.propTypes = {
  product: PropTypes.object.isRequired,
  setShow: PropTypes.func.isRequired,
  handleComparingToggle: PropTypes.func.isRequired,
  setToggleComparing: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired
};

export default RelatedCard;
