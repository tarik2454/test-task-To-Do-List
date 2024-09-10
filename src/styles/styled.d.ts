import 'styled-components';
// import { ThemeOptions } from '@mui/material';
// import { Theme } from '@mui/material/styles';

// interface CustomTheme {
//   bg: {
//     main: string;
//     light: string;
//   };
//   text: {
//     main: string;
//     light: string;
//   };
// }

// declare module '@mui/material/styles' {
//   interface Theme extends CustomTheme {}
//   interface ThemeOptions extends CustomTheme {}
// }

// declare module 'styled-components' {
//   export interface DefaultTheme extends Theme {}
// }

declare module '@mui/material/styles' {
  interface Theme {
    bg: {
      main: string;
      light: string;
    };
    text: {
      main: string;
      light: string;
    };
  }

  interface ThemeOptions {
    bg?: {
      main?: string;
      light?: string;
    };
    text?: {
      main?: string;
      light?: string;
    };
  }
}
