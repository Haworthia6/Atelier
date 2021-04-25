import { isNull } from 'lodash';

function getScrollSize (selector) {
  const ele = document.querySelector(selector);
  if (isNull(ele)) return null;
  const cardSize = window.getComputedStyle(ele).getPropertyValue('width');
  return Number(cardSize.replace('px', ''));
}

export default getScrollSize;
