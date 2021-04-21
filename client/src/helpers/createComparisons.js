
export default (currentProduct, relatedProduct) => {
  const combined = {};
  const currentFeats = currentProduct.features;
  const relatedFeats = relatedProduct.features;

  for (let feature of currentFeats) {
    combined[feature.feature] = [feature.value, '']
  }

  for (let feature of relatedFeats) {
    if (combined[feature.feature]) {
      combined[feature.feature] = [combined[feature.feature][0], feature.value];
    } else {
      combined[feature.feature] = ['', feature.value];
    }
  }
  return combined;
}