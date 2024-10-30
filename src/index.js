import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router basename="/omarmonib/radio-pro.git">
    <App />
  </Router>
);
