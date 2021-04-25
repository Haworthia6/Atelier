import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';

function LeftArrow ({ onClick }) {

  return (
    <div
      id="left-arrow"
      className="arrow-left-container"
      onClick={onClick}
    >
      <FiChevronLeft  className="arrow-left" />
    </div>
  );
}

// Prop Checking ------------------------
LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LeftArrow;
