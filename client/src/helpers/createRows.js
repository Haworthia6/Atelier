import React from 'react';
// TODO: Let this handle checkmarks (when one is value null === checkmark)
export default (combinedInfo) => {
  const rows = [];
  for (let feat in combinedInfo) {
    rows.push(
      <tr key={feat} clasName="compared-row">
        <td className="modal-left">{combinedInfo[feat][0] || ''}</td>
        <td className="modal-center">{feat}</td>
        <td className="modal-right">{combinedInfo[feat][1] || ''}</td>
      </tr>
    );
  }
  return rows;
};

