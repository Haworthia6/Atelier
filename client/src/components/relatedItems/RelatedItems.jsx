import React, { useEffect, useState } from 'react';
import RelatedCard from './RelatedCard';

function RelatedItems ({ relatedProducts }) { // will receive an array of products
  console.log(relatedProducts)
  return(
    <div className="horizontal-container">
      <div>left arrow</div>
      <RelatedCard />
      <div>right arrow</div>
    </div>
  );
}

export default RelatedItems;
