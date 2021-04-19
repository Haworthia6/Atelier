import React from 'react';
import RelatedCard from './RelatedCard';

function RelatedItems () { // This will receive an array of products that represent the related products

  // Map over the array and for each item, create the cards
  // For each card, will pass down the specific product object to RelatedCard

  return(
    <div className="horizontal-container">
      <div>left arrow</div>
      <RelatedCard />
      <div>right arrow</div>
    </div>
  );
}

export default RelatedItems;
