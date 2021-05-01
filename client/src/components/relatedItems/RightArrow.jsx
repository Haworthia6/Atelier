import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronRight } from 'react-icons/fi';

function RightArrow ({ onClick }) {
  return (
    <div
      className="arrow-right-container light-arrow-background-right"
      onClick={onClick}
    >
      <FiChevronRight  className="arrow-right"/>
    </div>
  );
}

// Prop Checking ------------------------
RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};


export default RightArrow;
