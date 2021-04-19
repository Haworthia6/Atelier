import React, { useEffect, useState } from 'react';
import RelatedCard from './RelatedCard';
import { isEmpty } from 'lodash';
import useRelatedProducts from './custom/useRelatedProducts';

function RelatedItems ({ relatedProductsIds }) { // will receive an array of products
  // console.log(relatedProducts)
  const [loading, setLoading] = useState(true)
  const relatedProducts = useRelatedProducts(relatedProductsIds);


  useEffect(() => {
    if (!isEmpty(relatedProducts)) {
      setLoading(false);
    }
  }, [relatedProducts])

  return(
    <div className="horizontal-container">
      { loading ? null :

        relatedProducts.map((p) => {
          return (<RelatedCard
            key={p.id}
            product={p}
          />);
        })
      }
      <div>left arrow</div>
      <div>right arrow</div>
    </div>
  );
}

export default RelatedItems;
