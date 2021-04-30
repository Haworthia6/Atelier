import React from 'react';
import PropTypes from 'prop-types';
import { isNull, isString } from 'lodash';

const Price = (({ price, salePrice }) => (
  <div className="price-container">
    { salePrice ?
      (<>
        <p className="crossed-out-price price">${price}</p>
        <p className="price">${salePrice}</p>
      </>)
      : <p className="price">${price}</p>
    }
  </div>
));

// Prop Checking --------------
Price.propTypes = {
  price: PropTypes.string.isRequired,
  salePrice: (({salePrice}) => {
    if (isNull(salePrice)) return;
    if (!isString(salePrice)) {
      throw new Error(`Expected salePrice to be type string but it is ${typeof salePrice}`);
    }
  })
};

export default Price;
