import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import { ThemeContextProvider } from './providers/ThemeContextProvider.tsx';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { globalStyles } from './styles/globalStyles.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles styles={globalStyles} />
        <CssBaseline />
        <App />
      </QueryClientProvider>
    </ThemeContextProvider>
  </StrictMode>
);
