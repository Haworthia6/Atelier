import React, { useEffect, useState } from 'react';
import RelatedCard from './RelatedCard';
import useRelatedProducts from './custom/useRelatedProducts';
import PropTypes from 'prop-types';

function RelatedItems (props) {

  const { relatedProductsIds, products, handleComparingToggle, setToggleComparing, setShowModal } = props;

  // Set loading to true on re renders
  const [show, setShow] = useState(false);
  const haveRelatedProducts = useRelatedProducts(relatedProductsIds, products);

  useEffect(() => {
    if (haveRelatedProducts) setShow(true);
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
          return (<RelatedCard
            key={`${id}` + i}
            product={products[id]}
            setShow={setShow}
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
