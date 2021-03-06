import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// Store
import { useDispatch } from 'react-redux';
import obj from '../../helpers/objectMap';
// Components
import { FiX } from 'react-icons/fi';
import AddOutfit from './AddOutfit';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import CardWrapper from './CardWrapper';
// Hooks
import useLocalStorage from './custom/useLocalStorage';
import useScrollIdx from './custom/useScrollIdx';
// Utility
import { isNumber, isNull } from 'lodash';
import getScrollLimits from './custom/getScrollLimits';
import getScrollSize from './custom/getScrollSize';

function Outfits ({ currentProdId, products }) {
  const [outfits, setOutfits] = useLocalStorage('outfits');
  const [outfitOrder, setOutfitOrder] = useState(() => {
    return obj.hasOwnMap(outfits).map((prod) => prod.id);
  });
  const dispatch = useDispatch();
  // Scrolling
  const scrollContainer = useRef(null);
  const scrollSize = getScrollSize('.card-component');
  let [leftLimit, rightLimit] =
  getScrollLimits(
    scrollContainer.current,
    scrollSize,
    outfitOrder.length,
    (10 * (outfitOrder.length)),
    getScrollSize('.add-outfit-container'));
  const [scrollIdx, setScrollIdx] = useScrollIdx(scrollContainer);

  const handleOutfitAdd = () => {
    if (!outfits[currentProdId]) {
      setOutfits.setItem('outfits', products[currentProdId]);
      setOutfitOrder([...outfitOrder, currentProdId]);
    }
  };
  const handleRemoveOutfit = (id) => {
    if (outfits[id]) {
      setOutfitOrder(outfitOrder.filter((outfitId) => outfitId !== id));
      setOutfits.removeItem('outfits', id);
    }
  };

  return (
    <div className="horizontal-container" ref={scrollContainer}>
      { scrollIdx > leftLimit &&
        <LeftArrow
          onClick={() => setScrollIdx.handleLeftScroll(scrollContainer.current, scrollSize)}
        />
      }
      <AddOutfit handleOutfitAdd={ handleOutfitAdd } />
      {  outfitOrder.map((outfitId, i) => (
        <CardWrapper
          key={i}
          product={outfits[outfitId]}
          handleActionClick={handleRemoveOutfit}
          dispatch={dispatch}
          render={() => <FiX stroke="#11122C"/>}
        />
      ))
      }
      { scrollIdx < rightLimit &&
        <RightArrow
          onClick={ () => setScrollIdx.handleRightScroll(scrollContainer.current, scrollSize) }
        />
      }
    </div>
  );
}

// Prop Checking ------------------
Outfits.propTypes = {
  currentProdId: ({ currentProdId }, propName, compName) => {
    if (isNull(currentProdId)) return;
    if (!isNumber(currentProdId)) {
      throw new Error(`${compName} expected CurrentProdId to be a number but it is a ${typeof currentProdId}`);
    }
  },
  products: PropTypes.object.isRequired
};

export default React.memo(Outfits);
