import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this to your backend URL

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authService = {
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userType', response.data.user.userType);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  async register(userData) {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userType', response.data.user.userType);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('userData'));
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};

export const checkUserType = async (email) => {
  try {
    const response = await api.post('/auth/check-user', { email });
    return response.data.userType;
  } catch (error) {
    console.error('Error checking user type:', error);
    return null;
  }
};

export default api;