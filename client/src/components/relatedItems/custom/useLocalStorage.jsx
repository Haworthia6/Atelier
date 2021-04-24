import { useState } from 'react';
import { isObject } from 'lodash';

function useLocalStorage (key) {
  const [storage, setStorage] = useState(() => {
    if (isObject(window.localStorage)) {
      if (window.localStorage[key]) {
        return JSON.parse(window.localStorage.getItem(key));
      }
    }
    return {};
  });

  const setLocalStorage = (key, action, data) => {
    let newState;
    switch (action) {
    case 'setItem': {
      newState = {...storage, [data.id]: data };
      setStorage(newState);
      window.localStorage.setItem(key, JSON.stringify(newState));
      return;
    }
    case 'removeItem': {
      newState = { ...storage };
      delete newState[data];
      setStorage(newState);
      window.localStorage.setItem(key, JSON.stringify(newState));
      return;
    }
    default: {
      return;
    }
    }
  };

  return [storage, setLocalStorage];
}

export default useLocalStorage;
