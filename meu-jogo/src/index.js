import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './Provider/Provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider> {/* Coloque o UserProvider aqui */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);