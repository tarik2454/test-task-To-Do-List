import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';
import { orange } from '@mui/material/colors';

const baseTheme: ThemeOptions = {
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  status: {
    danger: orange[500],
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark' as PaletteMode,
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    },
  },
};

export const getTheme = (mode: 'light' | 'dark' = 'light') =>
  createTheme({
    ...(mode === 'light' ? baseTheme : { ...baseTheme, ...darkTheme }),
  });
