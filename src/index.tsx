import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootContainer = document.getElementById('root') as HTMLElement;

createRoot(rootContainer).render(
  <StrictMode>
    <App />
  </StrictMode>
);
