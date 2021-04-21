import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import RelatedItems from './RelatedItems';
import Outfits from './Outfits';
import Comparing from './Comparing';
import useRelatedProductsIds from './custom/useRelatedProductsIds';

function RelatedAndOutfits () {
  const currentProdId = useSelector((state) => state.currentProductId);
  const products = useSelector((state) => state.products);
  const relatedProductsIds = useRelatedProductsIds(currentProdId, products);
  const [toggleComparing, setToggleComparing] = useState('fade-out'); // Handle turning back to false on close
  const [modal, setModal] = useState({});

  const handleComparingToggle = (relatedId) => {

    setModal({
      current: products[currentProdId]['features'],
      related: products[relatedId]['features']
    });
  };

  return (
    <div id="related-items-and-outfits-component">
      <button onClick={() => setToggleComparing('fade-out')}>toggle</button>
      <h2>RELATED PRODUCTS</h2>
      <RelatedItems
        relatedProductsIds={relatedProductsIds}
        products={products}
        setToggleComparing={setToggleComparing}
        handleComparingToggle={handleComparingToggle}
      />
      {/* <h2>YOUR OUTFIT</h2>
      <Outfits /> */}
      <div id="comparing-position">
        <Comparing
          visibility={toggleComparing}
          modal={modal}
        />
      </div>
    </div>
  );
}

export default RelatedAndOutfits;

