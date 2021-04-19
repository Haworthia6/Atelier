import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import RelatedItems from './RelatedItems';
import Outfits from './Outfits';
import Comparing from './Comparing';
import useRelatedProductsIds from './custom/useRelatedProductsIds';

function RelatedAndOutfits () {
  const currentProdId = useSelector((state) => state.currentProductId);
  const products = useSelector((state) => state.products, shallowEqual);
  const relatedProductsIds = useRelatedProductsIds(currentProdId, products);

  return (
    <div>
      <RelatedItems relatedProductsIds={relatedProductsIds}/>
      <Outfits />
      <Comparing />
    </div>
  );
}

export default RelatedAndOutfits;

