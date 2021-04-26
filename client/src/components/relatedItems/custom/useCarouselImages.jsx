import { useState } from 'react';
import { isNull } from 'lodash';

function useCarouselImages (carousel) {
  const [photosNode, setPhotosNode] = useState(() => carousel.head);
  const [images, setImages] = useState(() => photosNode.val);
  const setNodeAndImages = {
    next: () => {
      if (!isNull(photosNode.next)) {
        const nextImages = photosNode.next.val;
        setPhotosNode(photosNode.next);
        setImages(nextImages);
      }
    },
    prev: () => {
      if (!isNull(photosNode.prev)) {
        const prevImages = photosNode.prev.val;
        setPhotosNode(photosNode.prev);
        setImages(prevImages);
      }
    }
  };
  return [images, setNodeAndImages, photosNode.prev, photosNode.next];
}

export default useCarouselImages;
