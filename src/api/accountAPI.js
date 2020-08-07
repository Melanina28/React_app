import api from '../config/api';

const prefix = 'account';

const accountLogin = (data) => api.postJson(`${prefix}/login/admin`, data);

const accountLogout = () => api.get(`${prefix}logout`);

const accountRecovery = (data) => api.get(`${prefix}recovery`, data);

const accountRecoveryPassword = (data) => api.postJson(`${prefix}/recoverpassword`, data);

const accountPassword = (data) => api.put(`${prefix}password`, data);

const accountProfile = () => api.get(`${prefix}profile`);

const accountRegisterStudent = (data) => api.postJson(`${prefix}/register-student`, data);

const accountAvatar = () => api.get(`${prefix}/avatar`);



export default {
  accountLogin,
  accountLogout,
  accountRecovery,
  accountRecoveryPassword,
  accountPassword,
  accountProfile,
  accountRegisterStudent,
  accountAvatar,
};
