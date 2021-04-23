import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddOutfit from './AddOutfit';
import addOutfit from '../../../store/actions/addOutfit';
import Card from './Card';
import obj from '../../helpers/objectMap';
import { isNumber, isNull } from 'lodash';
import PropTypes from 'prop-types';

function Outfits ({ currentProdId, products }) {

  const outfits = useSelector(({ outfits }) => outfits);
  const dispatch = useDispatch();

  const handleOutfitAdd = useCallback(() => {
    if (!outfits[currentProdId]) {
      dispatch(addOutfit(products[currentProdId]));
    }
  }, [products, currentProdId]);

  const handleActionClick = () => {
    // This will remove outfit from the state and localStorage
    alert('Handling outfit action click');
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
            handleActionClick={handleActionClick}
          />
        ))
      }
    </div>
  );
}

// Prop Checking ------------------
Outfits.propTypes = {
  currentProdId: ({ currentProdId }, propName, compName) => {
    // currentProdId
    if (isNull(currentProdId)) return;
    if (!isNumber(currentProdId)) {
      throw new Error(`${compName} expected CurrentProdId to be a number but it is a ${typeof currentProdId}`);
    }
  },
  products: PropTypes.object.isRequired
};

export default React.memo(Outfits);
