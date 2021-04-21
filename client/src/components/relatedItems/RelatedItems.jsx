import React, { useEffect, useState } from 'react';
import RelatedCard from './RelatedCard';
import { isEmpty } from 'lodash';
import useRelatedProducts from './custom/useRelatedProducts';
import { useDispatch } from 'react-redux';

function RelatedItems (props) { // will receive an array of products

  const { relatedProductsIds, products, handleComparingToggle, setToggleComparing } = props;

  const dispatch = useDispatch();
  // Set loading to true on re renders
  const [loading, setLoading] = useState(true)
  const haveRelatedProducts = useRelatedProducts(relatedProductsIds, products, dispatch);

  useEffect(() => {
    if (haveRelatedProducts) {
      setLoading(false);
    }
    // else {
    //   setLoading(true);
    // }
  }, [haveRelatedProducts])

  return(
    <div className="horizontal-container">
      <div id="left-arrow" className="arrow">left arrow</div>
      { loading ? null :
        relatedProductsIds.map((id, i) => {
          return (<RelatedCard
            key={`${id}` + i}
            product={products[id]}
            dispatch={dispatch}
            setLoading={setLoading}
            setToggleComparing={setToggleComparing}
            handleComparingToggle={handleComparingToggle}
          />);
        })
      }
      <div id="right-arrow" className="arrow">right arrow</div>
    </div>
  );
}

export default RelatedItems;
