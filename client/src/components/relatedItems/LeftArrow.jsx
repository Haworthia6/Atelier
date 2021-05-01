import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronLeft } from 'react-icons/fi';

function LeftArrow ({ onClick }) {
  return (
    <div
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
