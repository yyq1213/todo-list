import { useState, useEffect } from 'react';

export const useTheme = (initialTheme = 'blue') => {
  const [theme, setTheme] = useState(initialTheme);
  
  // 使用 useEffect 监听 initialTheme 的变化
  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);
  
  const themeClass = `theme-${theme}`;
  
  return {
    theme,
    themeClass
  };
}; 