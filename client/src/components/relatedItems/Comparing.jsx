import React from 'react';
import Rows from './Rows';
import PropTypes from 'prop-types';

function Comparing ({ visibility, comparedProducts }) {

  return (
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
            <Rows
              comparedProducts={comparedProducts}
            />
          </tbody>
        </table>
        <div className="modal-footer"></div>
      </main>
    </div>
  );
}

// Prop Checking --------------------------------
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
