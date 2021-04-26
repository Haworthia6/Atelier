import React, {useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';

function AddToCart ({currentStyle}) {
  const [currentSize, setSize] = useState('SELECT SIZE');
  const [currentQty, setQty] = useState('1');
  const [displayText, setDisplayText] = useState(false);
  const sizeBar = useRef();
  useEffect(() => {
    setSize('SELECT SIZE');
  }, [currentStyle]);
  const onSizeChange = (e) => {
    setSize(e.target.value);
  };
  const onQtyChange = (e) => {
    setQty(e.target.value);
  };
  const addButtonClick = (e) => {
    e.preventDefault();
    // if currentSize is select size, open dropdown bar
    if (currentSize === 'SELECT SIZE') {
      displayMessage();
      sizeBar.current.size = sizeBar.current.length;
      console.log(sizeBar);
    }
    // if
    console.log('ADD ' + currentQty + ' SIZE ' + currentSize + ' ' + currentStyle.name  + ' OF THE ITEM TO THE CART');
  };
  const renderQtyBar = () => {
    if (currentSize === 'SELECT SIZE') {
      return (
        <select disabled>
          <option value="-">-</option>
        </select>);
    } else {
      var range = 0;
      for (var j = 0; j < Object.keys(currentStyle.skus).length; j++) {
        var currentSku = Object.keys(currentStyle.skus)[j];
        if (currentStyle.skus[currentSku].size === currentSize) {
          range = currentStyle.skus[currentSku].quantity;
          if (range !== 0 && currentQty === 0) {
            setQty(1);
          }
          if (range === 0) {
            setQty(0);
          }
        }
      }
      var options = [];
      for (var i = 1; (i <= range && i< 16); i++) {
        options.push(i);
      }
      if (currentQty === 0) {
        return (
          <select disabled>
            <option value="OUT OF STOCK">OUT OF STOCK</option>
          </select>);
      }
      else {
        return (
          <select value={currentQty} onChange={onQtyChange}>
            {options.map((num, i) => {
              return (<option value={num} key={i}>{num}</option>);
            })}
          </select>
        );
      }
    }
  };
  const renderAddButton = () => {
    if (currentQty === 0) {
      return null;
    } else {
      return <input type="submit" value="ADD TO CART "/>;
    }
  };
  const renderMessage = () => {
    if (displayText === true) {
      return <span className="sizeMessage">PLEASE SELECT SIZE</span>
    } else {
      return null;
    }
  };
  const displayMessage = () => {
    setDisplayText(true);
    setTimeout(() => {
      setDisplayText(false);
      sizeBar.current.size = 0;
    }, 10000);
  };
  const renderSizeBar = () => {
    var currentSizeBar = (
      <select ref={sizeBar} name="size" id="size" value={currentSize} onChange={onSizeChange}>
        <option value="SELECT SIZE">SELECT SIZE</option>
        {Object.keys(currentStyle.skus).map((sku, i) => {
          if (currentStyle.skus[sku].quantity !== 0) {
            return <option value={currentStyle.skus[sku].size} key={i} id={sku}>{currentStyle.skus[sku].size}</option>;
          } else {
            return null;
          }
        })}
      </select>);
    if (currentSizeBar.length === 1) {
      return (
        <select disabled>
          <option id="size" value="OUT OF STOCK">OUT OF STOCK</option>
        </select>);
    }
    return currentSizeBar;
  };
  return (
    <div>
      {renderMessage()}
      <form onSubmit={addButtonClick}>
        {renderSizeBar()}
        {renderQtyBar()}
        {renderAddButton()}
      </form>
    </div>
  );
}

export default AddToCart;