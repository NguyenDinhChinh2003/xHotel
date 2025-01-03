// App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes'; // Adjust the path if needed

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
