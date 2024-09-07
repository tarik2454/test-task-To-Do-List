import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import { ThemeContextProvider } from './providers/ThemeContextProvider.tsx';
import { GlobalStyles } from '@mui/material';
import { globalStyles } from './styles/globalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalStyles styles={globalStyles} />
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
