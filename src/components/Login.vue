<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Logo/Header Section -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
        <p class="text-gray-600 text-lg">Continue your learning journey</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <!-- Toggle Buttons -->
        <div class="flex bg-gray-100 p-1 rounded-xl">
          <button 
            @click="isLogin = true"
            :class="[
              'flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200',
              isLogin ? 'bg-white shadow-md text-emerald-500' : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            Login
          </button>
          <button 
            @click="isLogin = false"
            :class="[
              'flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200',
              !isLogin ? 'bg-white shadow-md text-emerald-500' : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            Sign Up
          </button>
        </div>

        <!-- Form Fields -->
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <!-- Email Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div class="relative">
              <input 
                type="email" 
                v-model="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter your email"
                required
              >
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div class="relative">
              <input 
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter your password"
                required
              >
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="showPassword" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path v-if="showPassword"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  <path v-else
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Additional Sign Up Fields -->
          <template v-if="!isLogin">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                v-model="fullName"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter your full name"
                required
              >
            </div>
          </template>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between" v-if="isLogin">
            <div class="flex items-center">
              <input type="checkbox" id="remember-me" class="h-4 w-4 text-emerald-500 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" class="text-sm text-emerald-500 hover:text-emerald-600">Forgot password?</a>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            class="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors text-lg font-medium"
          >
            {{ isLogin ? 'Login' : 'Sign Up' }}
          </button>
        </form>

        <!-- Social Login -->
        <div class="space-y-4">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const fullName = ref('')
const showPassword = ref(false)

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', {
    isLogin: isLogin.value,
    email: email.value,
    password: password.value,
    fullName: fullName.value
  })
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
