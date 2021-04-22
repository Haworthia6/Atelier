import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';

function AddOutfit ({ handleOutfitAdd }) {
  return (
    <div
      className="add-outfit-container"
      onClick={() => handleOutfitAdd()}
    >
      <i className="add-outfit-graphic"><FiPlusSquare />
      </i>
      <span className="add-outfit-detail">add outfit</span>
    </div>
  );
}

export default AddOutfit;
