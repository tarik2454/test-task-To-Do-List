import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';

const baseTheme: ThemeOptions = {
  palette: {
    mode: 'light' as PaletteMode,
    // primary: {
    //   main: '#1976d2',
    // },
    // background: {
    //   default: '#f5f5f5',
    // },
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark' as PaletteMode,
    // primary: {
    //   main: '#90caf9',
    // },
    // background: {
    //   default: '#121212',
    // },
  },
};

export const getTheme = (mode: 'light' | 'dark' = 'light') =>
  createTheme({
    ...(mode === 'light' ? baseTheme : { ...baseTheme, ...darkTheme }),
  });
