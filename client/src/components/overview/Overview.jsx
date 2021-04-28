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
      setCurrentStyle(e.target.id);
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
      <div>
        <p>current id: {currentId}</p>
        {<ExpandedView
          photos={currentProduct.styleList[currentStyle].photos}
          changePhoto={setCurrentPhoto}
          currentPhoto={currentPhoto}
          changeView={toggleExpanded}/>}

        <ImageGallery
          photos={currentProduct.styleList[currentStyle].photos}
          imageClick={toggleExpanded}
          changePhoto={setCurrentPhoto}
          currentPhoto={currentPhoto}/>

        <div>Product Info Box here:

        This is where product info goes<br/>
        <ProductInfo
          product={currentProduct}
          category={currentProduct.category}
          name={currentProduct.name}
          price={currentProduct.styleList[currentStyle].original_price}
          salePrice={currentProduct.styleList[currentStyle].sale_price}/>

        This is where style selector goes<br/>
        <StyleSelector
          styleList={currentProduct.styleList}
          currentStyle={currentStyle}
          onStyleChange={onStyleChange}/>

        This is where add to cart goes
        <AddToCart
          currentStyle={currentProduct.styleList[currentStyle]}/>
        </div>

        <p>This is where product description goes</p>
        <ProductDescription
          description={currentProduct.description}
          features={currentProduct.features}/>
      </div>
    );
  }

}

export default withRouter(Overview);