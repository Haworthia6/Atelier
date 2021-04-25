import { isNull } from 'lodash';
import calculateScrollWidth from './calculateScrollWidth';

function getScrollLimits (ele, scrollSize, numberOfElements) {

  if (isNull(ele)) return [null, null];
  // Calculate scrollWidth
  const scrollWidth = calculateScrollWidth(scrollSize, numberOfElements, 10);
  const leftLimit = 0;
  const rightLimit = scrollWidth - ele.clientWidth;

  return [leftLimit, rightLimit];
}

export default getScrollLimits;
