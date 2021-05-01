export default (product) => {
  const styles = product.styleList;
  for (let style of styles) {
    if (style['default?']) return style;
  }
  return styles[0];
};
