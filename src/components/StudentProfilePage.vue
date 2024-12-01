<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Profile Header -->
    <div class="max-w-7xl mx-auto">
      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
        <div class="flex flex-col md:flex-row gap-8">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Student Profile" 
            class="w-32 h-32 rounded-full border-4 border-indigo-500/30 shadow-xl"
          />
          <div class="flex-1">
            <h1 class="text-3xl font-bold text-white mb-4">Aditya Ranjan</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100/80">
              <p><span class="font-medium">Class:</span> 3rd year</p>
              <p><span class="font-medium">Preferred Subjects:</span> Mathematics</p>
              <p><span class="font-medium">Location:</span> India</p>
              <p><span class="font-medium">Email:</span> aditya@example.com</p>
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
const navLinks = [
  { to: '/about', text: 'About' },
  { to: '/requestTutor', text: 'Request A Tutor' },
  { to: '/becomeTutor', text: 'Become A Tutor' },
  { to: '/topTeachers', text: 'Top Teachers' },
  { to: '/tutorProfiles', text: 'Tutor Profiles' }
]
</script> 