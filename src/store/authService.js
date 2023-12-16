import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url';

const authService = {
  login: async (credentials) => {
    return axios.post(`${API_BASE_URL}/api/login`, credentials);
  },
  register: async (userData) => {
    return axios.post(`${API_BASE_URL}/api/register`, userData);
  },
};

export default authService;
