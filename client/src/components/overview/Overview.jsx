import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import changeProduct from '../../../store/actions/changeProduct';
import ImageGallery from './ImageGallery';
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ExpandedView from './ExpandedView';

function Overview () {
  const currentId = useSelector(({ currentProductId }) => currentProductId);
  const currentProduct = useSelector(({products}) => products[currentId]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [view, setView] = useState('normal');
  const onStyleChange = (e) => {
    if (e.target.id === currentStyle) {
      return;
    }
    setCurrentPhoto(0);
    setCurrentStyle(e.target.id);
  };
  const imageClick = () => {
    setView('expanded');
  };
  const changePhoto = (num) => {
    setCurrentPhoto(num);
  };
  const defaultView = () => {
    setView('default');
  };
  const dis = useDispatch();

  // if currentId === null

  useEffect(() => {
    dis(changeProduct(11003));
  },[]);

  if (currentId === null) {
    return <span>loading product info</span>;
  } else if (view === 'expanded') {
    return (
      <ExpandedView
        photos={currentProduct.styleList[currentStyle].photos}
        changePhoto={changePhoto}
        currentPhoto={currentPhoto}
        changeView={defaultView}/>);
  } else {
    return (
      <div>
        <p>current id: {currentId}</p>

        <ImageGallery
          photos={currentProduct.styleList[currentStyle].photos}
          imageClick={imageClick}
          changePhoto={changePhoto}
          currentPhoto={currentPhoto}/>

        <div>Product Info Box here:

        This is where product info goes<br/>
        <ProductInfo
          rating={currentProduct.avgRating}
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

export default Overview;