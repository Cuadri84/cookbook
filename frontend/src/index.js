import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecepisContextProvider } from './context/RecepisContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecepisContextProvider>
      <App />
    </RecepisContextProvider>
  </React.StrictMode>
);


