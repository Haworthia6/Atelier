import { useState } from 'react';
import DblLinkedList from './DblLinkedList';

function useFourLimitCarousel (styles) {
  const [carousel] = useState(() => {
    let allImages = new DblLinkedList();
    let left = 0, right = 4;
    while (left < styles.length) {
      let fourStyles = styles.slice(left, right);
      allImages.push(
        fourStyles.reduce(
          (fourImages, style) => {
            return [...fourImages, style.photos[0]['thumbnail_url']];
          }, []));
      left = right;
      right = right + 4;
    }
    return allImages;
  });
  return carousel;
}

export default useFourLimitCarousel;
