import React from 'react';
import PropTypes from 'prop-types';
// Store
import { useDispatch, useSelector } from 'react-redux';
import toggleShow from '../../../store/actions/toggleShow';
import changeProduct from '../../../store/actions/changeProduct';
// Utility
import findDefaultStyle from '../../helpers/findDefaultStyle';
// Components
import Card from './Card';

function CardWrapper ({ product, handleActionClick, render, resetScroll }) {
  const defaultStyle = findDefaultStyle(product);
  const currentProdId = useSelector(({currentProductId}) => currentProductId);
  const dispatch = useDispatch();
  const handleImageClick = (id) => {
    if (id !== currentProdId){
      dispatch(toggleShow(false));
      dispatch(changeProduct(id));
      resetScroll();
    }
  };
  return (
    <Card
      product={product}
      handleImageClick={handleImageClick}
      handleActionClick={handleActionClick}
      defaultStyle={defaultStyle}
      render={render}
    />
  );
}

// Prop Checking ------------------
CardWrapper.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    styleList: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  handleActionClick: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  resetScroll: PropTypes.func
};

export default CardWrapper;
