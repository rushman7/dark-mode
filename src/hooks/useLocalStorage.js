import { useState } from 'react';

export const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    // setting item to retrieve local storage data
    return JSON.parse(item);
    // if data exists, we parse it into js else we return the initial data.
  })

  const setValue = value => {
    setStoredValue(value);
    // stores value into state
    window.localStorage.setItem(key, JSON.stringify(value));
    // adds that state value into new local storage and parses it into JSON
  }

  return [storedValue, setValue];
}