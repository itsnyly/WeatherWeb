import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TemperatureUnitProvider } from './context/TemperatureUnitContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemperatureUnitProvider>
      <App />
    </TemperatureUnitProvider>
  </React.StrictMode>
);


