import React from 'react';
import RelatedCard from './RelatedCard';
function RelatedItems () {
  return(
    <div className="horizontal-container">
      <div>left arrow</div>
      <RelatedCard />
      <div>right arrow</div>
    </div>
  );
}

export default RelatedItems;
