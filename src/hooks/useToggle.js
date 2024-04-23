import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
};

export default useToggle;

// 사용예시
// const [isDarkMode, toggleDarkMode] = useToggle(false);

// return (
//   <div className={isDarkMode ? "dark-mode" : "light-mode"}>
//     <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
//     <Content />
//   </div>
// );
