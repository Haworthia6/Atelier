import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import RelatedItems from './RelatedItems';
import Outfits from './Outfits';
import Comparing from './Comparing';
import { isEmpty } from 'lodash';
import addRelatedProduct from '../../../store/actions/addRelated';

// Custom hook to grab related items ids only when id changes
const useRelatedItemsIds = (id = 0, products) => {
  const [ids, setIds] = useState([])

  useEffect(() => {
    if (id) {
      setIds(products[id].relatedItemsIds)
    }
  }, [id])

  return ids;
}

function RelatedAndOutfits () {
  const currentProdId = useSelector((state) => state.currentProductId);
  const products = useSelector((state) => state.products, shallowEqual);
  const relatedProductsIds = useRelatedItemsIds(currentProdId, products);
  const dispatch = useDispatch();

  console.log(relatedProductsIds)
  useEffect(() => {
    // if (!isEmpty(products)) {
    //   console.log(products[currentProdId]['relatedItemsIds']);
    // }
    // Make a request and send an array of numbers and created the container
    // The action creator will need to handle an array or you will send a single id each time

    // Creates product objects in products state
    if (!isEmpty(relatedProductsIds)) {
      relatedProductsIds.forEach((id) => {
        dispatch(addRelatedProduct(id))
      })
    }
  }, [relatedProductsIds]);
  // subscribe to currentProdId

  return (
    <div>
      <RelatedItems />
      <Outfits />
      <Comparing />
    </div>
  );
}

export default RelatedAndOutfits;

