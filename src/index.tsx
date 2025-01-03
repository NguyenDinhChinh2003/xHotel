// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App'; // Ensure the correct path

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
