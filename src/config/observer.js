import axios from 'axios';
import auth from './auth';
/**
 * @module observer
 * Verificación de errores en petición
 */

const observer = {
  /**
 * requestObserver
 * Interceptor de errores para la validación o redirección
 * del lado del cliente
 */
  // eslint-disable-next-line consistent-return
  requestObserver: (() => axios.interceptors.response.use((response) => response, (error) => {
    const errorObject = {
      status: error.response.status,
      error: error.response.data.message,
    };

    switch (error.response.status) {
      case 401:
        auth.destroyAuthorization();
        break;
      case 500:
        // eslint-disable-next-line no-console
        return error.response.data;
        // console.warn('observer.js (define 500 return)', error.response.data);
        break;
      case 501:
        // eslint-disable-next-line no-console
        return error.response.data;
        // console.warn('observer.js (define 501 return)', error.response.data);
        break;
      default:
        throw errorObject;
    }
  })),
};

export default observer;
