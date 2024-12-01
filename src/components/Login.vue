<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <!-- Left Side: Welcome Section -->
    <div class="flex-1 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      <!-- Decorative Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl transform rotate-12"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl transform -rotate-12"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col justify-center items-center p-8 md:p-12 h-full text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200">
          Welcome to TutorVue
        </h2>
        <p class="text-lg md:text-xl text-blue-100/80 max-w-xl mb-8">
          Join our community of learners and educators. Experience personalized tutoring that adapts to your needs.
        </p>
        
        <!-- Features List -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
          <div class="feature-item">
            <div class="icon-wrapper">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <span>Personalized Learning</span>
          </div>
          <div class="feature-item">
            <div class="icon-wrapper">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span>Flexible Schedule</span>
          </div>
          <div class="feature-item">
            <div class="icon-wrapper">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <span>Verified Tutors</span>
          </div>
          <div class="feature-item">
            <div class="icon-wrapper">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span>Instant Access</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Form Section -->
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="max-w-md w-full space-y-8">
        <!-- Error Alert -->
        <div v-if="error" class="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded relative mb-4">
          {{ error }}
        </div>

        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 class="text-3xl font-bold text-white mb-8 text-center">
            {{ isLogin ? 'Welcome Back' : 'Create Account' }}
          </h2>

          <form @submit.prevent="isLogin ? handleSignIn() : handleSignUp()" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-blue-100/80 mb-2">
                Email
              </label>
              <input
                v-model="emailOrEnroll"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-blue-100/80 mb-2">
                Password
              </label>
              <input
                v-model="password"
                type="password"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
              />
            </div>

            <div v-if="!isLogin">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">
                Confirm Password
              </label>
              <input
                v-model="confirmPassword"
                type="password"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50"
            >
              {{ loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Sign Up') }}
            </button>
          </form>

          <p class="mt-6 text-center text-blue-100/60">
            {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
            <button
              @click="toggleForm"
              class="text-indigo-400 hover:text-indigo-300 font-medium ml-2"
            >
              {{ isLogin ? 'Sign Up' : 'Sign In' }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/api'

const router = useRouter()
const emailOrEnroll = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLogin = ref(true)
const error = ref('')
const loading = ref(false)

async function handleSignIn() {
  try {
    loading.value = true
    error.value = ''
    
    const response = await authService.login(emailOrEnroll.value, password.value)
    
    // Redirect based on user type
    if (response.user.userType === 'teacher') {
      router.push({ name: 'TeacherDashboard' })
    } else {
      router.push({ name: 'StudentProfilePage' })
    }
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed'
  } finally {
    loading.value = false
  }
}

async function handleSignUp() {
  try {
    if (password.value !== confirmPassword.value) {
      error.value = 'Passwords do not match!'
      return
    }

    loading.value = true
    error.value = ''
    
    const userData = {
      email: emailOrEnroll.value,
      password: password.value,
      userType: 'student' // or you can add a selector for user type
    }

    const response = await authService.register(userData)
    
    router.push({ name: 'StudentProfilePage' })
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}

function toggleForm() {
  isLogin.value = !isLogin.value
  error.value = ''
}
</script>

<style scoped>
.feature-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  background-color: rgba(99, 102, 241, 0.2);
  border-radius: 0.5rem;
  color: rgba(199, 210, 254, 0.8);
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgb(17, 24, 39);
  border: 1px solid rgb(55, 65, 81);
  border-radius: 0.5rem;
  color: white;
  transition: all 300ms;
}

.form-input:focus {
  outline: none;
  border-color: rgb(99, 102, 241);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.form-checkbox {
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(55, 65, 81);
  background-color: rgb(17, 24, 39);
  cursor: pointer;
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-image: linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247));
  color: white;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 300ms;
}

.submit-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: rgb(17, 24, 39);
  border: 1px solid rgb(55, 65, 81);
  border-radius: 0.5rem;
  color: rgb(156, 163, 175);
  transition: all 300ms;
}

.social-button:hover {
  background-color: rgb(31, 41, 55);
  color: white;
}

.social-button svg {
  margin-right: 0.5rem;
}
</style>
  