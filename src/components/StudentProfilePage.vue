<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Profile Header -->
    <div class="max-w-7xl mx-auto">
      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
        <div class="flex flex-col md:flex-row gap-8">
          <img 
            :src="userData?.profile?.avatar || 'https://via.placeholder.com/150'" 
            :alt="userData?.name" 
            class="w-32 h-32 rounded-full border-4 border-indigo-500/30 shadow-xl"
          />
          <div class="flex-1">
            <h1 class="text-3xl font-bold text-white mb-4">{{ userData?.name || 'Loading...' }}</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100/80">
              <p><span class="font-medium">Class:</span> {{ userData?.profile?.grade || 'Not specified' }}</p>
              <p><span class="font-medium">Preferred Subjects:</span> {{ userData?.profile?.subjects?.join(', ') || 'Not specified' }}</p>
              <p><span class="font-medium">Location:</span> {{ userData?.profile?.location || 'Not specified' }}</p>
              <p><span class="font-medium">Email:</span> {{ userData?.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="max-w-7xl mx-auto mt-8">
      <nav class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
        <ul class="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li v-for="link in navLinks" :key="link.to">
            <router-link 
              :to="link.to"
              class="text-blue-100/80 hover:text-white transition-colors duration-300"
              active-class="text-indigo-400"
            >
              {{ link.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/api'

const router = useRouter()
const userData = ref(null)

onMounted(() => {
  // Get user data from localStorage
  const user = authService.getCurrentUser()
  
  if (!user) {
    // If no user data, redirect to login
    router.push({ name: 'Login' })
    return
  }
  
  userData.value = user
})

const navLinks = [
  { to: '/about', text: 'About' },
  { to: '/requestTutor', text: 'Request A Tutor' },
  { to: '/topTeachers', text: 'Top Teachers' },
  { to: '/tutorProfiles', text: 'Tutor Profiles' }
]
</script> 