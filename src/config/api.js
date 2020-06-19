import axios from 'axios';

/**
 * @param baseUri : Define la dirección de servidor api
 */
const baseUri = `${process.env.REACT_APP_API_URL}/api/`;
// const baseUri = 'https://demo-thincrs-core.thincrs.com/api/';

/**
 * Headers : Objecto para definir headers de envío
 * @param json
 * @param formData
 */

const headers = {
  json: { headers: { 'Content-Type': 'application/json' } },
  formData: { headers: { 'Content-Type': 'multipart/form-data' } },
};


// axios.defaults.headers.common.Authorization = auth.authTokenAccess;

const api = {
  baseUri,
  /**
     * @method GET
     * @param endpoint : recurso ejm. 'user/logout'
     * @param params : parametros que recibe
     */
  get: ((endpoint, params = null) => {
    const url = new URL(baseUri + endpoint);
    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      });
    }
    return axios.get(url.href, headers.json);
  }),
  /**
     * @method FETCH
     * @param endpoint 'http://get.data', recibe una URL completa
     * @param params : parametros que recibe
     */
  fetch(endpoint, params = null) {
    const url = new URL(endpoint);
    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      });
    }
    return axios.get(url.href, headers.json);
  },
  /**
     * @method POST
     * @param endpoint : recurso ejm. 'user/logout'
     * @param params : parametros que recibe formato Form-Data
     */
  postData: ((endpoint, data) => axios.post(baseUri + endpoint, data, headers.formData)),
  /**
     * @method POST
     * @param endpoint : recurso ejm. 'user/logout'
     * @param params : parametros que recibe formato JSON
     */
  postJson: ((endpoint, data) => axios.post(baseUri + endpoint, data, headers.json)),
  /**
     * @method PUT
     * @param endpoint : recurso ejm. 'user/logout'
     * @param params : parametros que recibe formato JSON
     */
  put: ((endpoint, data) => axios.put(baseUri + endpoint, data, headers.json)),
  /**
     * @method PATH
     * @param endpoint : recurso ejm. 'user/logout'
     */
  patch: ((endpoint, data) => axios.patch(baseUri + endpoint, data, headers.json)),

  /**
     * @method POST
     * @param endpoint : recurso ejm. 'user/logout'
     */
  delete: ((endpoint) => axios.delete(baseUri + endpoint, headers.json)),
};

export default api;
