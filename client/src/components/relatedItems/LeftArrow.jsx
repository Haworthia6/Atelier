import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';

function LeftArrow ({ onClick }) {
  return (
    <div
      id="left-arrow" // Rmv?
      className="arrow-left-container light-arrow-background-left"
      onClick={onClick}
    >
      <FiChevronLeft  className="arrow-left"/>
    </div>
  );
}

// Prop Checking ------------------------
LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LeftArrow;
