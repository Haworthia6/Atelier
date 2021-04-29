import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import RelatedItems from './RelatedItems';
import Outfits from './Outfits';
import Comparing from './Comparing';
import useRelatedProductsIds from './custom/useRelatedProductsIds';

function RelatedAndOutfits () {

  const currentProdId = useSelector((state) => state.currentProductId);
  const products = useSelector((state) => state.products, shallowEqual);
  const relatedProductsIds = useRelatedProductsIds(currentProdId, products);
  // Comparing Modal
  const [toggleComparing, setToggleComparing] = useState('fade-out');
  const [showModal, setShowModal] = useState(false);
  const [comparedProducts, setComparedProducts] = useState({});

  const handleComparingToggle = useCallback((relatedId) => {
    setComparedProducts({
      current: products[currentProdId],
      related: products[relatedId]
    });
  }, [products]);

  useEffect(() => {
    // Closes Modal
    if (toggleComparing.match(/fade-out/)) return;
    function closeModal() {
      setToggleComparing('fade-out');
      setShowModal(false);
    }
    document.body.addEventListener('click', closeModal, false);
    return () => document.body.removeEventListener('click', closeModal, false);
  }, [comparedProducts]);

  return (
    <section id="related-items-and-outfits-component">
      <h2>RELATED PRODUCTS</h2>
      <RelatedItems
        relatedProductsIds={relatedProductsIds}
        products={products}
        setToggleComparing={setToggleComparing}
        setShowModal={setShowModal}
        handleComparingToggle={handleComparingToggle}
      />
      <h2>YOUR OUTFIT</h2>
      <Outfits
        currentProdId={currentProdId}
        products={products}
      />
      { showModal &&
        <div id="comparing-position">
          <Comparing
            visibility={toggleComparing}
            comparedProducts={comparedProducts}
          />
        </div>
      }
    </section>
  );
}

export default RelatedAndOutfits;
