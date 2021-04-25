import { useState, useEffect } from 'react';
import { isNull, isUndefined } from 'lodash';

function useScrollIdx (ele = 0) {
  const [state, setState] = useState(ele);

  useEffect(() => {
    if (isNull(ele)) return [null, null];
    if (isNull(ele.current) || isUndefined(ele.current)) return [null, null];
    if (isNull(ele.current.scrollLeft) || isUndefined(ele.current.scrollLeft)) return [null, null];
    setState(ele.current.scrollLeft);
  }, [ele]);

  const setScrollIdx = {
    handleLeftScroll: (ele, scrollSize) => {
      ele.scrollLeft -= (scrollSize + 40);
      setState(ele.scrollLeft);
    },
    handleRightScroll: (ele, scrollSize) => {
      ele.scrollLeft += (scrollSize + 40);
      setState(ele.scrollLeft);
    }
  };

  return [state, setScrollIdx];
}

export default useScrollIdx;
