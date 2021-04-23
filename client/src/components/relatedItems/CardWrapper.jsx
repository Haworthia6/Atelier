import React from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import toggleShow from '../../../store/actions/toggleShow';
import changeProduct from '../../../store/actions/changeProduct';
import findDefaultStyle from '../../helpers/findDefaultStyle';
import PropTypes from 'prop-types';

function CardWrapper ({ product, handleActionClick }) {

  // Look into useMemo to optimize this
  const defaultStyle = findDefaultStyle(product);
  const dispatch = useDispatch();

  const handleImageClick = (id) => {
    dispatch(toggleShow(false));
    dispatch(changeProduct(id));
  };

  return (
    <Card
      product={product}
      handleImageClick={handleImageClick}
      handleActionClick={handleActionClick}
      defaultStyle={defaultStyle}
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
  handleActionClick: PropTypes.func.isRequired
};

export default CardWrapper;