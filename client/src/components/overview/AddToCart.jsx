import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function AddToCart ({currentStyle}) {
  const [currentSize, setSize] = useState('SELECT SIZE');
  const [currentQty, setQty] = useState('1');
  const dis = useDispatch();
  useEffect(() => {
    setSize('SELECT SIZE');
  }, [currentStyle]);
  const onSizeChange = (e) => {
    setSize(e.target.value);
  }
  const onQtyChange = (e) => {
    setQty(e.target.value)
  }
  const addButtonClick = (e) => {
    e.preventDefault();
    console.log('ADD ' + currentQty + ' SIZE ' + currentSize + ' ' + currentStyle.name  + ' OF THE ITEM TO THE CART');
  }
  const renderQtyBar = () => {
    if (currentSize === 'SELECT SIZE') {
      return (
        <select disabled>
          <option value="-">-</option>
        </select>)
    } else {
      var range = 0;
      for (var j = 0; j < Object.keys(currentStyle.skus).length; j++) {
        var currentSku = Object.keys(currentStyle.skus)[j];
        if (currentStyle.skus[currentSku].size === currentSize) {
          range = currentStyle.skus[currentSku].quantity;
        }
      }
      var options = [];
      for (var i = 1; (i <= range && i< 16); i++) {
        options.push(i);
      }
      return (
        <select value={currentQty} onChange={onQtyChange}>
          {options.map((num, i) => {
            return (<option value={num} key={i}>{num}</option>)
          })}
        </select>
      )
    }
  }
  return (
    <div>
      <form onSubmit={addButtonClick}>
        <select name="size" id="size" value={currentSize} onChange={onSizeChange}>
        <option value="SELECT SIZE">SELECT SIZE</option>
          {Object.keys(currentStyle.skus).map((sku, i) => {
            if (currentStyle.skus[sku].quantity !== 0) {
              return <option value={currentStyle.skus[sku].size} key={i} id={sku}>{currentStyle.skus[sku].size}</option>
            } else {
              return null;
            }
          })}
        </select>
        {renderQtyBar()}
        <input type="submit" value="ADD TO CART "/>
      </form>
    </div>
  )
}

export default AddToCart;