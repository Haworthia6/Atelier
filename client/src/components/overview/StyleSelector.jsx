import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function StyleSelector (props) {
  const [currentStyle, setCurrentStyle] = useState(0);
  const dis = useDispatch();

  return (
    <div>This is the Style Selector </div>
  )
}

export default StyleSelector;