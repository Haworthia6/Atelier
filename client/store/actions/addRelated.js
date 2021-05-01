export default (product) => {
  return {
    type: 'ADD_RELATED_PRODUCT',
    payload: { [product.id]: product }
  };
};
