import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';
import merge from 'deepmerge';

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light' as PaletteMode,
  },
  typography: {
    h1: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#fff',
    },
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark' as PaletteMode,
  },
  typography: {
    h1: {
      color: '#121212',
    },
  },
};

export const getTheme = (mode: 'light' | 'dark' = 'light') => {
  const theme = mode === 'light' ? lightTheme : merge(lightTheme, darkTheme);

  return createTheme(theme);
};
