import React, { useState, useEffect } from 'react';

const useRelatedProductsIds = (id = 0, products) => {
  const [ids, setIds] = useState([])

  useEffect(() => {
    if (id) {
      setIds(products[id].relatedItemsIds)
    }
  }, [id])

  return ids;
}

export default useRelatedProductsIds;
