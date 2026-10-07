import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// The non-null assertion documents that public/index.html provides this root.
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Pass a function such as console.log to collect web-vitals measurements.
reportWebVitals();