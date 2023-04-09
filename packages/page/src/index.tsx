import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/application/app';

const container = document.querySelector('#root') as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
