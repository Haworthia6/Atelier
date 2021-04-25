import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import PropTypes from 'prop-types';

function AddOutfit ({ handleOutfitAdd }) {
  return (
    <div className="add-outfit-container" onClick={ () => handleOutfitAdd() } >
      <i className="add-outfit-graphic"><FiPlusSquare /></i>
      <span className="add-outfit-detail">Add to Outfit</span>
    </div>
  );
}

// Prop Checking -----------------
AddOutfit.propTypes = {
  handleOutfitAdd: PropTypes.func.isRequired
};

export default React.memo(AddOutfit);
