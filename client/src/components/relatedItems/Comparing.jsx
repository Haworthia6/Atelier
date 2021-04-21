import React, { useCallback, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import createComparison from '../../helpers/createComparisons';

function Comparing ({ visibility, modal}) {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const comparison = useCallback((current, related) => createComparison(current, related), [modal]);

  // TODO: Let this handle checkmarks (when one is value null === checkmark)
  const createRows = useCallback((combinedInfo) => {
    const rows = [];
    for (let feat in combinedInfo) {
      rows.push(
        <tr key={feat}>
          <td>{combinedInfo[feat][0] || ''}</td>
          <td>{feat}</td>
          <td>{combinedInfo[feat][1] || ''}</td>
        </tr>
      )
    }
    return rows;
  }, []);

  useEffect(() => {
    if (!isEmpty(modal.current) && !isEmpty(modal.related)) {
      setLoading(true);
      // [CURRENT, RELATED] -- Tuple
      setInfo(comparison(modal.current, modal.related));
      setLoading(false);
    }
  }, [modal]);

  return loading ? null
    : (
    <div className={"comparing-container " + visibility}>
      <h6>Comparing</h6>
      <table className="comparing-table">
        <thead>
          <tr>
            <th>current product</th>
            <th></th>
            <th>related product</th>
          </tr>
        </thead>
        <tbody>
          { createRows(info) }
        </tbody>
      </table>
    </div>
  );
}

export default Comparing;
