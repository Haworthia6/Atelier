import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
// Components
import createRows from '../../helpers/createRows';
// Utility
import createComparisons from '../../helpers/createComparisons';

function Rows ({ comparedProducts }) {
  const comparisonRows = useMemo(() => {
    const { current, related } = comparedProducts;
    return createRows(createComparisons(current, related));
  }, [comparedProducts]);
  return (
    <>
      { comparisonRows }
    </>
  );
}

// Prop Checking ------------------------
Rows.propTypes = {
  comparedProducts: PropTypes.shape({
    current: PropTypes.shape({
      features: PropTypes.array.isRequired,
    }),
    related: PropTypes.shape({
      features: PropTypes.array.isRequired,
    })
  })
};

export default Rows;
