import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddOutfit from './AddOutfit';
import obj from '../../helpers/objectMap';
import { isNumber, isNull } from 'lodash';
import PropTypes from 'prop-types';
import CardWrapper from './CardWrapper';
import useLocalStorage from './custom/useLocalStorage';
import { FiX } from 'react-icons/fi';

function Outfits ({ currentProdId, products }) {
  const [outfits, setOutfits] = useLocalStorage('outfits');
  const [outfitOrder, setOutfitOrder] = useState(() => {
    return obj.hasOwnMap(outfits).map((prod) => prod.id);
  });
  const dispatch = useDispatch();

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
    <div className="horizontal-container">
      <AddOutfit handleOutfitAdd={ handleOutfitAdd } />
      {
        outfitOrder.map((outfitId, i) => (
          <CardWrapper
            key={i}
            product={outfits[outfitId]}
            handleActionClick={handleRemoveOutfit}
            dispatch={dispatch}
            render={() => <FiX />}
          />
        ))
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
