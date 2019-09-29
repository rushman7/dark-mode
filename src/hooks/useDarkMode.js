import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const body = window.document.body;

    if (value) {
      body.classList.add("dark-mode")
    } else {
      body.classList.remove("dark-mode");
    }
  }, [value])

  return [value, setValue];
}