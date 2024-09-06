import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

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
  status: {
    danger: orange[500],
  },
};

export const getTheme = (mode: 'light' | 'dark' = 'light') =>
  createTheme({
    ...((mode === 'light' ? baseTheme : darkTheme) as ThemeOptions),
  });
