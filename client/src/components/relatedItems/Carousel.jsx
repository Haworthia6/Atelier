import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { isNull, isUndefined } from 'lodash';
import useFourLimitCarousel from './custom/useFourLimitCarousel';
import useCarouselImages from './custom/useCarouselImages';

function Carousel ({ product, handleThumbnailClick, style }) {
  const carousel = useFourLimitCarousel(product.styleList);
  const [images, setImages, prev, next] = useCarouselImages(carousel);
  return (
    images.length > 1 &&
    <div className="carousel-container" style={style}>
      { !isNull(prev) &&
        <div
          className="carousel-left-arrow"
          onClick={setImages.prev}>
          <FiChevronsLeft />
        </div>
      }
      {
        images.map((imgUrl, i) => {
          if (!isNull(imgUrl)) {
            return (<img
              className="carousel-card-thumbnail"
              key={i}
              src={imgUrl}
              alt="thumbnail style"
              onClick={() => handleThumbnailClick(imgUrl)}
            />);
          }
        })
      }
      { (!isNull(next) || isUndefined(next)) &&
        <div
          className="carousel-right-arrow"
          onClick={setImages.next}>
          <FiChevronsRight />
        </div>
      }
    </div>
  );
}

// Prop Checking --------------------
Carousel.propTypes = {
  product: PropTypes.shape({
    styleList: PropTypes.array.isRequired
  }),
  handleThumbnailClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
};

export default React.memo(Carousel);
