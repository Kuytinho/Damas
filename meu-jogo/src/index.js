import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './Provider/Provider';

const rootElement = document.getElementById('root');

// Use createRoot ao invés de ReactDOM.render
createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);