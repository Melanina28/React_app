import api from '../config/api';

const prefix = 'editor';

const getDiagrams = () => api.get(`${prefix}/diagrams`);
const getInternships = () => api.get(`${prefix}/internships`);
const getCompetence = () => api.get(`${prefix}/competence`);
const postProyect = () => api.post(`${prefix}/proyect`);


export default {
  getDiagrams,
  getInternships,
  getCompetence,
  postProyect,
};
