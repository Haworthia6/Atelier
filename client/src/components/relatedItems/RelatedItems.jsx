import React, { useEffect, useState } from 'react';
import RelatedCard from './RelatedCard';
import { isEmpty } from 'lodash';
import useRelatedProducts from './custom/useRelatedProducts';
import { useDispatch } from 'react-redux';

function RelatedItems ({ relatedProductsIds }) { // will receive an array of products
  // console.log(relatedProducts)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const relatedProducts = useRelatedProducts(relatedProductsIds, dispatch);


  useEffect(() => {
    if (!isEmpty(relatedProducts)) {
      setLoading(false);
    }
  }, [relatedProducts])

  return(
    <div className="horizontal-container">
      <div id="left-arrow" className="arrow">left arrow</div>
      { loading ? null :

        relatedProducts.map((p) => {
          return (<RelatedCard
            key={p.id}
            product={p}
            dispatch={dispatch}
          />);
        })
      }
      <div id="right-arrow" className="arrow">right arrow</div>
    </div>
  );
}

export default RelatedItems;
