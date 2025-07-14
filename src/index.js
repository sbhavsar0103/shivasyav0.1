import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="page-wrapper">
    <App />
  </div>
);