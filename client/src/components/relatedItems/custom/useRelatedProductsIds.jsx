import { useState, useEffect } from 'react';

const useRelatedProductsIds = (id, products) => {
  const [ids, setIds] = useState([]);
  useEffect(() => {
    if (id) setIds(products[id].relatedItemsIds);
  }, [id]);
  return ids;
};

export default useRelatedProductsIds;
