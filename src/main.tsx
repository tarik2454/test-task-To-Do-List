import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import { ThemeContextProvider } from './providers/ThemeContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
