import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddOutfit from './AddOutfit';
import addOutfit from '../../../store/actions/addOutfit';
import Card from './Card';
import obj from '../../helpers/objectMap';
import { isNumber, isNull, isArray, isObject } from 'lodash';

function Outfits ({ currentProdId, products }) {

  const outfits = useSelector(({ outfits }) => outfits);
  const dispatch = useDispatch();

  const handleOutfitAdd = () => {
    // Onclick want to use the currentProdId to do a lookup on products and build the object
    // STEP 1: Add object to state if it doesn't already exist
    if (!outfits[currentProdId]) {
      dispatch(addOutfit(products[currentProdId]));
    }
  };

  return (
    <div className="horizontal-container">
      <AddOutfit
        handleOutfitAdd={handleOutfitAdd}
      />
      {
        obj.hasOwnMap(outfits).map((outfit, i) => (
          <Card
            key={i}
            product={outfit}
          />
        ))
      }
    </div>
  );
}

// Prop Checking ------------------
Outfits.propTypes = {
  nullId: ({ currentProdId, products }, propName, compName) => {
    // currentProdId
    if (isNull(currentProdId)) return;
    if (!isNumber(currentProdId)) {
      throw new Error(`${compName} expected CurrentProdId to be a number but it is a ${typeof currentProdId}`);
    }
    // products
    if (!isObject(products) || isArray(products)) {
      throw new Error(`${compName} expected products to be an object but it is a ${typeof products}`);
    }
  }
};

export default Outfits;
