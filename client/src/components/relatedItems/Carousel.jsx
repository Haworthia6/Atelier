import React from 'react';
import PropTypes from 'prop-types';
// Imported Components
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
// Utility
import { isNull, isUndefined } from 'lodash';
// Hooks
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
          <FiChevronsLeft stroke="#E6B7B2"/>
        </div>
      }
      { images.map((imgUrl, i) => {
        if (!isNull(imgUrl)) {
          return (
            <div
              key={i}
              className="carousel-card-container"
              style={{ backgroundImage: `url(${imgUrl})`}}
              onClick={handleThumbnailClick}
            />
          );
        }
      })
      }
      { (!isNull(next) && !isUndefined(next)) &&
        <div
          className="carousel-right-arrow"
          onClick={setImages.next}>
          <FiChevronsRight stroke="#E6B7B2"/>
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
