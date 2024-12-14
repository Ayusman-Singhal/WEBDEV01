import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    userType: localStorage.getItem('userType') || null
  }),

  actions: {
    setAuth(token, user) {
      this.token = token
      this.user = user
      this.userType = user.userType
      this.isAuthenticated = true
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userType', user.userType)
    },

    clearAuth() {
      this.token = null
      this.user = null
      this.userType = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('userType')
    },

    checkAuth() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      const userType = localStorage.getItem('userType')

      if (token && user && isAuthenticated === 'true') {
        this.token = token
        this.user = JSON.parse(user)
        this.userType = userType
        this.isAuthenticated = true
        return true
      }
      return false
    }
  },

  getters: {
    isStudent: (state) => state.userType === 'student'
  }
})