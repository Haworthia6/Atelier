import React, { useEffect, useState } from 'react';
import fetchProductRequest from '../../../../store/helpers/fetchProductRequest';
import { isEmpty } from 'lodash';

const useRelatedProducts = (relatedProductsIds) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!isEmpty(relatedProductsIds)) {
      Promise.all(
        relatedProductsIds.map((id) => {
        return fetchProductRequest(id)
      }))
        .then((products) => {
          setRelatedProducts(products)
        })
        .catch((err) => {
          console.error(err);
        })
    }

  }, [relatedProductsIds])

  return relatedProducts;
}

export default useRelatedProducts;
