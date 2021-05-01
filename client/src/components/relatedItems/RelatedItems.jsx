import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// Store
import { useSelector, useDispatch } from 'react-redux';
import toggleShow from '../../../store/actions/toggleShow';
// Components
import CardWrapper from './CardWrapper';
import { FiStar } from 'react-icons/fi';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
// Hooks
import useRelatedProducts from './custom/useRelatedProducts';
import useScrollIdx from './custom/useScrollIdx';
// Utility
import getScrollSize from './custom/getScrollSize';
import getScrollLimits from './custom/getScrollLimits';

function RelatedItems (props) {
  const { relatedProductsIds, products, handleComparingToggle, setToggleComparing, setShowModal } = props;
  const show = useSelector(({ show }) => show);
  const haveRelatedProducts = useRelatedProducts(relatedProductsIds, products);
  const dispatch = useDispatch();
  // Scrolling
  const scroll = useRef(null);
  const scrollSize = getScrollSize('.card-component');
  const [leftLimit, rightLimit] =
    getScrollLimits(
      scroll.current,
      scrollSize,
      relatedProductsIds.length,
      (10 * (relatedProductsIds.length),
      40)); // Gaps
  const [scrollIdx, setScrollIdx] = useScrollIdx(scroll);

  const handleActionClick = (id) => {
    setShowModal(true);
    setToggleComparing('fade-in');
    handleComparingToggle(id);
  };
  const handleResetScroll = () => {
    setScrollIdx.reset(scroll.current);
  };

  useEffect(() => {
    if (haveRelatedProducts) dispatch(toggleShow(true));
  }, [haveRelatedProducts]);

  return(
    <>
      <div className="horizontal-container" id="related-items-container" ref={scroll} >
        { scrollIdx > leftLimit &&
          <LeftArrow onClick={ () => setScrollIdx.handleLeftScroll(scroll.current, scrollSize) } />
        }
        { show &&
          relatedProductsIds.map((id, i) => {
            return (
              <CardWrapper
                key={`${id}` + i}
                product={products[id]}
                handleActionClick={handleActionClick}
                dispatch={dispatch}
                render={ () => <FiStar  stroke="#11122C"/> }
                resetScroll={handleResetScroll}
              />);
          })
        }
        { scrollIdx < rightLimit &&
          <RightArrow onClick={ () => setScrollIdx.handleRightScroll(scroll.current, scrollSize) }/>
        }
      </div>
    </>
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
