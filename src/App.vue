<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 backdrop-blur-md bg-indigo-950/50 border-b border-white/20 shadow-lg">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo - Left Side -->
          <div class="flex-shrink-0">
            <router-link to="/" class="flex items-center space-x-2">
              <svg class="w-8 h-8 text-indigo-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 8V16L12 21L21 16V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 10.5V15.5L12 18L16.5 15.5V10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                TutorVue
              </span>
            </router-link>
          </div>

          <!-- Desktop Navigation - Center and Right -->
          <div class="hidden md:flex md:flex-1 md:items-center md:justify-end">
            <div class="flex space-x-12">
              <router-link to="/" class="nav-link">Home</router-link>
              <router-link to="/about" class="nav-link">About</router-link>
              <router-link to="/requestTutor" class="nav-link">Request Tutor</router-link>
              <router-link to="/becomeTutor" class="nav-link">Become Tutor</router-link>
              <router-link to="/topTeachers" class="nav-link">Top Teachers</router-link>
              <router-link to="/login" class="nav-link login-btn">Login</router-link>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="isMenuOpen = !isMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white focus:outline-none"
            >
              <svg 
                class="h-6 w-6" 
                :class="{'hidden': isMenuOpen, 'block': !isMenuOpen }"
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                class="h-6 w-6" 
                :class="{'block': isMenuOpen, 'hidden': !isMenuOpen }"
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        class="md:hidden"
        :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md bg-indigo-950/50">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path" 
            :to="item.path"
            class="mobile-nav-link"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Decorative Background Elements -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl transform rotate-12"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl transform -rotate-12"></div>
    </div>

    <!-- Main Content -->
    <div class="pt-16">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Request Tutor', path: '/requestTutor' },
  { name: 'Become Tutor', path: '/becomeTutor' },
  { name: 'Top Teachers', path: '/topTeachers' },
  { name: 'Login', path: '/login' }
]
</script>

<style scoped>
.nav-link {
  position: relative;
  color: rgba(199, 210, 254, 0.8);
  font-weight: 500;
  padding: 0.5rem;
  transition: all 300ms;
  white-space: nowrap;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 1);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #818cf8, #a78bfa);
  transition: all 300ms;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

.login-btn {
  color: white;
  background: linear-gradient(to right, #818cf8, #a78bfa);
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
}

.login-btn::after {
  display: none;
}

.login-btn:hover {
  opacity: 0.9;
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: rgba(199, 210, 254, 0.8);
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 300ms;
}

.mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 1);
}

/* Active link styles */
.router-link-active {
  color: white;
}

.router-link-active::after {
  width: 100%;
}

/* Don't show active indicator on login button */
.login-btn.router-link-active::after {
  display: none;
}
</style>
