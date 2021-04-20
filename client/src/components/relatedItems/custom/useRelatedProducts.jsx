import React, { useEffect, useState } from 'react';
import fetchProductRequest from '../../../../store/helpers/fetchProductRequest';
import { isEmpty } from 'lodash';
import addRelatedProduct from '../../../../store/actions/addRelated';

const useRelatedProducts = (relatedProductsIds, products, dispatch) => {
  const [relatedProducts, setRelatedProducts] = useState(false);

  useEffect(() => {
    if (!isEmpty(relatedProductsIds)) {
      setRelatedProducts(false);
      const nonCached = relatedProductsIds.filter(id => !products[id])
      Promise.all(nonCached.map(id => fetchProductRequest(id)))
        .then((results) => {
          for (let i = 0; i < results.length; i++) {
            dispatch(addRelatedProduct(results[i]));
          }
        })
        .then(() => {
          setRelatedProducts(true);
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }, [relatedProductsIds])

  return relatedProducts;
}

export default useRelatedProducts;


// if (!isEmpty(relatedProductsIds)) {
//   setRelatedProducts(false);
//   const nonCached = relatedProductsIds.filter(id => !products[id]);
//   Promise.all(
//     nonCached.map((id) => {
//     return fetchProductRequest(id)
//   }))
//   .then((results) => {
//     // Add to products state
//     for (let i = 0; i < results.length; i++) {
//       dispatch(addRelatedProduct(results[i]));
//       if (i >= results.length - 1) {
//         setRelatedProducts(true)
//       }
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   })
// }
