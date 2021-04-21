
function addRelated (product) {
  return {
    type: 'ADD_RELATED_PRODUCT',
    payload: { [product.id]: product }
  };
}

export default addRelated;
