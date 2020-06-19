import axios from 'axios';

/**
 * @module auth
 * Modulo encargado de definir la autenticación de usuario
 * así como tambien destruir una sesión o verificar.
 */

const auth = {
  /**
 * @return authorization
 * @param sessionID | almacenamiento de token Bearer
 */
  authorization: ((token) => {
    const bearerToken = `Bearer ${token}`;
    localStorage.setItem('sessionID', bearerToken);

    axios.defaults.headers.common.Authorization = bearerToken;
    console.log(axios.defaults.headers.common.Authorization, 'axios');
  }),
  authUser: ((user) => {
    if (user) {
      localStorage.setItem('profile-name', user);
    }

    const userSession = localStorage.getItem('profile-name');
    return userSession;
  }),
  /**
 * @return destroyAuthorization
 * Destruir sesión de usuario desde localStorage
 */
  destroyAuthorization: (() => {
    localStorage.clear();

    const session = delete axios
      .defaults
      .headers
      .common
      .Authorization;

    if (session) {
      // window.location = '/login';
      window.location = process.env.REACT_APP_LOGIN_LANDING_URL;
    }
  }),
  /**
 * @return authValidateToken
 * Verificar autenticación de usuario
 */
  authValidateToken: (() => {
    const sessionID = localStorage.getItem('sessionID') || false;
    if (sessionID) {
      axios.defaults.headers.common.Authorization = sessionID;
    } else {
      // eslint-disable-next-line no-console
      console.warn('sessionID not found (redirect page to login)');
    }
  }),

};

export default auth;
