import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import RelatedCard from './RelatedCard';
import Card from './Card';
import useRelatedProducts from './custom/useRelatedProducts';
import toggleShow from '../../../store/actions/toggleShow';
import PropTypes from 'prop-types';

function RelatedItems (props) {

  const { relatedProductsIds, products, handleComparingToggle, setToggleComparing, setShowModal } = props;

  const show = useSelector(({ show }) => show);
  const dispatch = useDispatch();
  const haveRelatedProducts = useRelatedProducts(relatedProductsIds, products);

  useEffect(() => {
    if (haveRelatedProducts) dispatch(toggleShow(true));
  }, [haveRelatedProducts]);

  const handleActionClick = (id) => {
    setShowModal(true);
    setToggleComparing('fade-in');
    handleComparingToggle(id);
  };

  return(
    <div className="horizontal-container">
      <div id="left-arrow" className="arrow">left arrow</div>
      { show &&
        relatedProductsIds.map((id, i) => {
          return (<Card
            key={`${id}` + i}
            product={products[id]}
            handleActionClick={handleActionClick}
          />);
        })
      }
      <div id="right-arrow" className="arrow">right arrow</div>
    </div>
  );
}

// Prop Checking ----------------------------
RelatedItems.propTypes = {
  relatedProductsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  products: PropTypes.object.isRequired,
  handleComparingToggle: PropTypes.func.isRequired,
  setToggleComparing: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired
};

export default RelatedItems;
