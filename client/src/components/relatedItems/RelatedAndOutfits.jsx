import React, { useEffect, shallowEqual } from 'react';
import { useSelector } from 'react-redux';
import RelatedItems from './RelatedItems';
import Outfits from './Outfits';
import Comparing from './Comparing';
import { isEmpty } from 'lodash';
const exampleIds = [11003]

function RelatedAndOutfits () {
  // const currentProdId = useSelector((state) => state.currentProductId);
  // const products = useSelector((state) => state.products, shallowEqual);

  const testId = 11003;

  useEffect(() => {
    // if (!isEmpty(products)) {
    //   console.log(products[currentProdId]['relatedItemsIds']);
    // }

    // Make an axios request and send an array of numbers and created the container
    // The action creator will need to handle an array or you will send a single id each time

    // TEST PURPOSES
    // Make a dispatch to the action creator ADD_RELATED_ITEM
      // this should create that object in products
      // Once that object has been created, pass products down to the RelatedItems component
  }, []);
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

