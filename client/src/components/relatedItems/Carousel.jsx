import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { isNull } from 'lodash';
import useFourLimitCarousel from './custom/useFourLimitCarousel';
import useCarouselImages from './custom/useCarouselImages';

function Carousel ({ product, handleThumbnailClick }) {
  const carousel = useFourLimitCarousel(product.styleList);
  const [images, setImages, prev, next] = useCarouselImages(carousel);
  return (
    <div className="carousel-container">
      { !isNull(prev) &&
        <div
          className="carousel-left-arrow"
          onClick={setImages.prev}>
          <FiChevronsLeft />
        </div>
      }
      {
        images.map((imgUrl, i) => {
          return (<img
            className="carousel-card-thumbnail"
            key={i}
            src={imgUrl}
            alt="thumbnail style"
            onClick={() => handleThumbnailClick(imgUrl)}
          />);
        })
      }
      { !isNull(next) &&
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
  handleThumbnailClick: PropTypes.func.isRequired
};

export default React.memo(Carousel);
