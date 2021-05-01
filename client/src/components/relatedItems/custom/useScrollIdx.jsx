import { useState, useEffect } from 'react';
import { isNull, isUndefined } from 'lodash';

function useScrollIdx (ele = 0) {
  const [scrollLeft, setScrollLeft] = useState(ele);

  useEffect(() => {
    if (isNull(ele)) return [null, null];
    if (isNull(ele.current) || isUndefined(ele.current)) return [null, null];
    if (isNull(ele.current.scrollLeft) || isUndefined(ele.current.scrollLeft)) return [null, null];
    setScrollLeft(ele.current.scrollLeft);
  }, [ele]);
  // Supercharged setScrollLeft
  const setScrollIdx = {
    handleLeftScroll: (ele, scrollSize) => {
      ele.scrollLeft -= (scrollSize + 40);
      setScrollLeft(ele.scrollLeft);
    },
    handleRightScroll: (ele, scrollSize) => {
      ele.scrollLeft += (scrollSize + 40);
      setScrollLeft(ele.scrollLeft);
    },
    reset: (ele) => {
      ele.scrollLeft = 0;
      setScrollLeft(0);
    }
  };

  return [scrollLeft, setScrollIdx];
}

export default useScrollIdx;
