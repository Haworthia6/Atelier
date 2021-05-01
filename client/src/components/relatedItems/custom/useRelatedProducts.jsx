import { useEffect, useState } from 'react';
// Store
import addRelatedProduct from '../../../../store/actions/addRelated';
import { useDispatch } from 'react-redux';
// Utility
import { isEmpty } from 'lodash';
import fetchProductRequest from '../../../../store/helpers/fetchProductRequest';

const useRelatedProducts = (relatedProductsIds, products) => {
  const [relatedProducts, setRelatedProducts] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(relatedProductsIds)) {
      setRelatedProducts(false);
      const nonCached = relatedProductsIds.filter(id => !products[id]);
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
        });
    }
  }, [relatedProductsIds]);

  return relatedProducts;
};

export default useRelatedProducts;
