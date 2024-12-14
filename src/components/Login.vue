<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full space-y-8 p-8">
      <div v-if="error" class="bg-red-500/10 text-red-400 p-4 rounded-lg">
        {{ error }}
      </div>

      <form @submit.prevent="isLogin ? handleSignIn() : handleSignUp()" class="space-y-6">
        <!-- Name field (show only during signup) -->
        <div v-if="!isLogin">
          <label class="block text-sm font-medium text-blue-100/80">Name</label>
          <input
            v-model="formData.name"
            type="text"
            required
            class="mt-1 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email field -->
        <div>
          <label class="block text-sm font-medium text-blue-100/80">Email</label>
          <input
            v-model="formData.email"
            type="email"
            required
            class="mt-1 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
            placeholder="Enter your email"
          />
        </div>

        <!-- Password field -->
        <div>
          <label class="block text-sm font-medium text-blue-100/80">Password</label>
          <input
            v-model="formData.password"
            type="password"
            required
            class="mt-1 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
            placeholder="Enter your password"
          />
        </div>

        <!-- Confirm Password field (show only during signup) -->
        <div v-if="!isLogin">
          <label class="block text-sm font-medium text-blue-100/80">Confirm Password</label>
          <input
            v-model="formData.confirmPassword"
            type="password"
            required
            class="mt-1 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg"
        >
          {{ loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Sign Up') }}
        </button>
      </form>

      <div class="text-center mt-4">
        <button
          @click="isLogin = !isLogin"
          class="text-indigo-400 hover:text-indigo-300"
        >
          {{ isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/api'

const router = useRouter()
const error = ref('')
const loading = ref(false)
const isLogin = ref(true)

const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

async function handleSignUp() {
  try {
    if (formData.value.password !== formData.value.confirmPassword) {
      error.value = 'Passwords do not match!'
      return
    }

    if (!formData.value.name) {
      error.value = 'Name is required!'
      return
    }

    loading.value = true
    error.value = ''
    
    const userData = {
      name: formData.value.name,
      email: formData.value.email,
      password: formData.value.password,
      userType: 'student'
    }

    console.log('Sending user data:', userData) // Debug log
    const response = await authService.register(userData)
    window.dispatchEvent(new Event('auth-change'))
    router.push({ name: 'StudentProfilePage' })
  } catch (err) {
    console.error('Registration error:', err) // Debug log
    error.value = err.response?.data?.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}

async function handleSignIn() {
  try {
    if (!formData.value.email || !formData.value.password) {
      error.value = 'Please provide both email and password'
      return
    }

    loading.value = true
    error.value = ''

    const response = await authService.login({
      email: formData.value.email,
      password: formData.value.password
    })

    // Store user data
    localStorage.setItem('token', response.token)
    localStorage.setItem('userType', response.user.userType)
    localStorage.setItem('userData', JSON.stringify(response.user))

    // Trigger a custom event to update navigation
    window.dispatchEvent(new Event('auth-change'))
    
    // Redirect based on user type
    if (response.user.userType === 'teacher') {
      router.push({ name: 'TeacherDashboard' })
    } else {
      router.push({ name: 'StudentProfilePage' })
    }
  } catch (err) {
    console.error('Login error:', err)
    error.value = err.response?.data?.message || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>
  