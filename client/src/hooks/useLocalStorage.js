import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

const getSavedValue = (key, initialValue) => {
  if (localStorage.getItem(key) !== "undefined") {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
  }

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

export default useLocalStorage;
