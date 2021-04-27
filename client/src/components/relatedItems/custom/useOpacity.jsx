import { useState } from 'react';

function useOpacity (initial) {
  const [style, setState] = useState(initial);

  const setStyle = {
    fadeIn: () => {
      setState({opacity: 1});
    },
    fadeOut: () => {
      setState({opacity: 0});
    }
  };

  return [style, setStyle];
}

export default useOpacity;
