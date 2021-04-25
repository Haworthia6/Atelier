import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

function RightArrow ({ onClick }) {
  return (
    <div
      id="right-arrow"
      className="arrow-right-container"
      onClick={onClick}
    >
      <FiChevronRight  className="arrow-right" />
    </div>
  );
}

// Prop Checking ------------------------
RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};


export default RightArrow;
