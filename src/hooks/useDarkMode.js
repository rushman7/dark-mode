import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
  const [value, setValue] = useLocalStorage(key);
  // using our useLocalStorage fnc to set our state value

  useEffect(() => {
    const body = window.document.body;
    // setting body equal to the current jsx element

    value 
    // checking if value exists
    ? body.classList.add("dark-mode")
    // if it does, add .dark-mode class to it
    : body.classList.remove("dark-mode")
    // if it doesn't remove .dark-mode class from it

  }, [value])

  return [value, setValue];
}