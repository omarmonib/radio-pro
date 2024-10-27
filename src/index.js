import React from 'react';
import ReactDOM from 'react-dom/client'; // استيراد createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // استخدام createRoot
root.render(
  <BrowserRouter basename="/omarmonib/radio-pro.git">
  <App />
</BrowserRouter>
);
