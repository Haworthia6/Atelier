import React from 'react';

function Counter (props) {
  return (
  <div>
    {props.count}
    <button onClick={() => props.increment(props.count)}>+</button>
    <button onClick={() => props.decrement(props.count)}>-</button>
  </div>)
}

export default Counter;