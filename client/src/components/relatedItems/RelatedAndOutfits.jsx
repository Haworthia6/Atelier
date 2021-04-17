import React, { useEffect, shallowEqual } from 'react';
import { useSelector } from 'react-redux';
import RelatedItems from './RelatedItems';
import Outfits from './Outfits';
import Comparing from './Comparing';
import { isEmpty } from 'lodash';

function RelatedAndOutfits () {
  const currentProdId = useSelector((state) => state.currentProductId);
  const products = useSelector((state) => state.products, shallowEqual);

  useEffect(() => {
    console.log(isEmpty(products));
    if (!isEmpty(products)) {
      console.log(products[currentProdId]['relatedItemsIds']);
    }
  }, [currentProdId]);

  return (
    <div>
      <RelatedItems />
      <Outfits />
      <Comparing />
    </div>
  );
}

export default RelatedAndOutfits;

