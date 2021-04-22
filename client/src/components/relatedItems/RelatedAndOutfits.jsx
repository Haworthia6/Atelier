import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import RelatedItems from './RelatedItems';
// import Outfits from './Outfits';
import Comparing from './Comparing';
import useRelatedProductsIds from './custom/useRelatedProductsIds';

function RelatedAndOutfits () {

  const currentProdId = useSelector((state) => state.currentProductId);
  const products = useSelector((state) => state.products, shallowEqual);
  const relatedProductsIds = useRelatedProductsIds(currentProdId, products);
  const [toggleComparing, setToggleComparing] = useState('fade-out');
  const [comparedProducts, setComparedProducts] = useState({});

  // Not memoized for access to Products
  const handleComparingToggle = (relatedId) => {
    setComparedProducts({
      current: products[currentProdId],
      related: products[relatedId]
    });
  };

  useEffect(() => {
    // Closes modal on outside of modal click
    if (toggleComparing.match(/fade-out/)) return;
    function closeModal() { setToggleComparing('fade-out'); }
    document.body.addEventListener('click', closeModal, false);
    return () => document.body.removeEventListener('click', closeModal, false);
  }, [comparedProducts]);

  return (
    <div id="related-items-and-outfits-component">
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
          comparedProducts={comparedProducts}
        />
      </div>
    </div>
  );
}

export default RelatedAndOutfits;

