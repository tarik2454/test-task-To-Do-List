import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from '../styles/theme';

interface ThemeContextProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('themeMode') as 'light' | 'dark') || 'light'
  );

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme: themeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext должен использоваться внутри ThemeContextProvider'
    );
  }
  return context;
};
