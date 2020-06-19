import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import auth from './config/auth'
import observer from './config/observer'
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * ::::::::::::::::::::::::::::::::::::::::::::::::::
 */

/**
 * API Configuration
 * @function auth.authValidateToken();
 * + Verificación de autenticación
 * @function observer.requestObserver();
 * + Interceptor de peticiones axios
 */
auth.authValidateToken();
observer.requestObserver();

/**
 * ::::::::::::::::::::::::::::::::::::::::::::::::::
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
