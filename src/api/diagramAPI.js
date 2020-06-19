import api from '../config/api';

const prefix = 'editor';

const getDiagrams = () => api.get(`${prefix}/diagrams`);
const getInternships = () => api.get(`${prefix}/internships`);

export default {
  getDiagrams,
  getInternships,
};
