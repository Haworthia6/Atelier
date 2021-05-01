import { isNull } from 'lodash';
import calculateScrollWidth from './calculateScrollWidth';

function getScrollLimits (ele, scrollSize, numberOfElements, ...others) {
  if (isNull(ele)) return [null, null];
  const scrollWidth = calculateScrollWidth(scrollSize, numberOfElements, others);
  const rightLimit = scrollWidth - ele.clientWidth;
  return [0, rightLimit];
}

export default getScrollLimits;
