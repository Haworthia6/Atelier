import React, {useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import ImageGallery from './ImageGallery';
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ExpandedView from './ExpandedView';
import {withRouter} from 'react-router-dom';

function Overview (props) {

  const currentId = useSelector(({ currentProductId }) => currentProductId);
  const currentProduct = useSelector(({products}) => products[currentId]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    props.history.push('/products/' + currentId);
  },[currentId]);
  const onStyleChange = (e) => {
    if (e.target.id !== currentStyle) {
      setCurrentPhoto(0);
      setCurrentStyle(parseInt(e.target.id));
    }
  };
  const toggleExpanded = () => {
    var modal = document.getElementsByClassName('expandedModal')[0];
    var currentSlide = document.getElementsByClassName('currentSlide')[0];
    if (!modal.style.display || modal.style.display === 'none') {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
    currentSlide.onclick = () => {
      if (!modal.style.display) {
        modal.style.display = 'block';
      }
    };
  };

  if (currentId === null) {
    return <span>loading product info</span>;
  } else {
    return (
      <div className="overview">
        <div className="overview-row-1">
          {<ExpandedView
            photos={currentProduct.styleList[currentStyle].photos}
            changePhoto={setCurrentPhoto}
            currentPhoto={currentPhoto}
            changeView={toggleExpanded}/>}
          <div className="image-gallery-box">
            <ImageGallery
              photos={currentProduct.styleList[currentStyle].photos}
              imageClick={toggleExpanded}
              changePhoto={setCurrentPhoto}
              currentPhoto={currentPhoto}/>
          </div>

          <div className="product-info-box">
            <ProductInfo
              product={currentProduct}
              category={currentProduct.category}
              name={currentProduct.name}
              price={currentProduct.styleList[currentStyle].original_price}
              salePrice={currentProduct.styleList[currentStyle].sale_price}/>

            <StyleSelector
              styleList={currentProduct.styleList}
              currentStyle={currentStyle}
              onStyleChange={onStyleChange}/>

            <AddToCart
              currentStyle={currentProduct.styleList[currentStyle]}/>
          </div>
        </div>
        <div className="overview-row-2">
          <ProductDescription
            description={currentProduct.description}
            features={currentProduct.features}/>
        </div>
      </div>
    );
  }

}

export default withRouter(Overview);