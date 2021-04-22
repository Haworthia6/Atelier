import React, { useCallback, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import createComparison from '../../helpers/createComparisons';
import PropTypes from 'prop-types';

function Comparing ({ visibility, comparedProducts }) {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const comparison = useCallback((current, related) => createComparison(current, related), [comparedProducts]);

  // TODO: Let this handle checkmarks (when one is value null === checkmark)
  const createRows = useCallback((combinedInfo) => {
    const rows = [];
    for (let feat in combinedInfo) {
      rows.push(
        <tr key={feat}>
          <td className="modal-left">{combinedInfo[feat][0] || ''}</td>
          <td className="modal-center">{feat}</td>
          <td className="modal-right">{combinedInfo[feat][1] || ''}</td>
        </tr>
      );
    }
    return rows;
  }, []);

  useEffect(() => {
    const { current, related } = comparedProducts;
    if (!isEmpty(current) && !isEmpty(related)) {
      setLoading(true);
      // [CURRENT, RELATED] -- Tuple
      setInfo(comparison(current, related));
      setLoading(false);
    }
  }, [comparedProducts]);

  return loading ? null
    : (
      <div className={'comparing-container ' + visibility}>
        <main className="modal">
          <div className="modal-header">
            <h6>Comparing</h6>
          </div>
          <table className="modal-content">
            <thead>
              <tr>
                <th>{comparedProducts.current.name}</th>
                <th></th>
                <th>{comparedProducts.related.name}</th>
              </tr>
            </thead>
            <tbody>
              { createRows(info) }
            </tbody>
          </table>
          <div className="modal-footer"></div>
        </main>
      </div>
    );
}

// Prop Checking
Comparing.propTypes = {
  visibility: PropTypes.oneOf(['fade-in', 'fade-out']).isRequired,
  comparedProducts: PropTypes.shape({
    current: PropTypes.shape({
      features: PropTypes.array.isRequired,
      name: PropTypes.string.isRequired
    }),
    related: PropTypes.shape({
      features: PropTypes.array.isRequired,
      name: PropTypes.string.isRequired
    })
  })
};

export default Comparing;
