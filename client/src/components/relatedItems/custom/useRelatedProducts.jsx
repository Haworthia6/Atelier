import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchProductRequest from '../../../../store/helpers/fetchProductRequest';
import { isEmpty } from 'lodash';
import addRelatedProduct from '../../../../store/actions/addRelated';

const useRelatedProducts = (relatedProductsIds) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(relatedProductsIds)) {
      Promise.all(
        relatedProductsIds.map((id) => {
        return fetchProductRequest(id)
      }))
        .then((products) => {
          // Create array of products
          products.forEach((prod) => {
            dispatch(addRelatedProduct(prod));
          })
          // Create array of products to pass and say THESE PRODUCTS EXIST NOW
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
