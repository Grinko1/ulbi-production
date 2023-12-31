import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProvider {
  initialTheme?:Theme
}
const ThemeProvider:FC<ThemeProvider> = ({children, initialTheme}) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
      const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  const defaultProps = useMemo(()=>({
    theme:theme,
    setTheme:setTheme
  }),[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;