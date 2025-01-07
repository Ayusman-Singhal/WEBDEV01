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
  login(credentials) {
    return api.post('/auth/login', credentials)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userType', response.data.user.userType)
          localStorage.setItem('userData', JSON.stringify(response.data.user))
          // Trigger auth change event
          window.dispatchEvent(new Event('auth-change'))
        }
        return response.data
      })
  },

  register(userData) {
    return api.post('/auth/register', userData)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userType', response.data.user.userType)
          localStorage.setItem('userData', JSON.stringify(response.data.user))
          // Trigger auth change event
          window.dispatchEvent(new Event('auth-change'))
        }
        return response.data
      })
  },

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.removeItem('userData')
    // Trigger auth change event
    window.dispatchEvent(new Event('auth-change'))
  },

  isAuthenticated() {
    return !!localStorage.getItem('token')
  },

  getCurrentUser() {
    const userData = localStorage.getItem('userData')
    return userData ? JSON.parse(userData) : null
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