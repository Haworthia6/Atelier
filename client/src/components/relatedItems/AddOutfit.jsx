import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';

function AddOutfit () {
  return (
    <div
      className="add-outfit-container"
      onClick={() => alert('This should add outfit to component')}
    >
      <i className="add-outfit-graphic"><FiPlusSquare />
      </i>
      <span className="add-outfit-detail">add outfit</span>
    </div>
  );
}

export default AddOutfit;
