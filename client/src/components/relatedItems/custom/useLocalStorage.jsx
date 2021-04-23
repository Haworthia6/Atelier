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

  const setLocalStorage = (key, data) => {
    const newState = {...storage, [data.id]: data };
    setStorage(newState);
    window.localStorage.setItem(key, JSON.stringify(newState));
  };

  return [storage, setLocalStorage];
}

export default useLocalStorage;
