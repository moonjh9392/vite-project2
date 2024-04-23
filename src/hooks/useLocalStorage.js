import { useState } from 'react';

// const [storedValue, setValue] = useLocalStorage(key, initialValue)
const useLocalStorage = (key, initialValue) => {
  //초기화 (값있으면 들고옴 없으면 새로만듬)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      //value가 함수인지 판단 ex) setValue(prevValue => prevValue + 1);
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
