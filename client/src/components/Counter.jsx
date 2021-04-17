import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import increment from '../../store/actions/addCount'
import decrement from '../../store/actions/subtractCount'
import changeProduct from '../../store/actions/changeProduct'

function Counter (props) {
  const count = useSelector(({ count }) => count);
  const dis = useDispatch();

  return (
  <div>
    {count}
    <button onClick={() => dis(changeProduct(11003))}>TEST</button>
    <button onClick={() => dis(increment(count))}>+</button>
    <button onClick={() => dis(decrement(count))}>-</button>
  </div>
  )
}

export default Counter;