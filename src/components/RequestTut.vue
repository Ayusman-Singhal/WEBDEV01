<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
        Find Your Perfect Tutor
      </h1>
      <p class="text-xl text-blue-100/80 max-w-3xl mx-auto">
        Connect with expert tutors who can help you achieve your academic goals
      </p>
    </div>

    <!-- Search and Filter Section -->
    <div class="max-w-7xl mx-auto mb-12">
      <div class="backdrop-blur-md bg-indigo-950/20 border border-white/10 rounded-2xl p-6 shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Subject Search -->
          <div class="relative">
            <input 
              type="text" 
              v-model="filters.subject"
              placeholder="Search subject..."
              class="filter-input pl-12"
            >
            <svg class="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- Price Range -->
          <div>
            <select v-model="filters.priceRange" class="filter-input">
              <option value="">Price Range</option>
              <option value="0-50">$0 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101+">$101+</option>
            </select>
          </div>

          <!-- Availability -->
          <div>
            <select v-model="filters.availability" class="filter-input">
              <option value="">Availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="evenings">Evenings</option>
            </select>
          </div>

          <!-- Rating -->
          <div>
            <select v-model="filters.rating" class="filter-input">
              <option value="">Rating</option>
              <option value="4+">4+ Stars</option>
              <option value="3+">3+ Stars</option>
              <option value="all">All Ratings</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Tutors Grid -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="tutor in tutors" :key="tutor.id" 
        class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300">
        <!-- Tutor Header -->
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center">
            <img :src="tutor.avatar" :alt="tutor.name" class="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/30">
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-white">{{ tutor.name }}</h3>
              <p class="text-blue-100/80">{{ tutor.subject }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="ml-1 text-white">{{ tutor.rating }}</span>
          </div>
        </div>

        <!-- Tutor Info -->
        <div class="space-y-3 mb-6">
          <div class="flex items-center text-blue-100/80">
            <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>{{ tutor.availability }}</span>
          </div>
          <div class="flex items-center text-blue-100/80">
            <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>${{ tutor.hourlyRate }}/hour</span>
          </div>
          <p class="text-blue-100/80 line-clamp-2 h-12">{{ tutor.description }}</p>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-3">
          <button @click="requestTutor(tutor)" 
            class="flex-1 py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
            Request Tutor
          </button>
          <button @click="viewProfile(tutor)" 
            class="py-2 px-4 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-500/10 transition-all duration-300">
            View Profile
          </button>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-if="tutors.length === 0" class="text-center py-12">
      <p class="text-xl text-blue-100/80">No tutors found matching your criteria</p>
    </div>

    <!-- Add this right after opening template div -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <!-- Education-themed SVG Decorations -->
      <div class="absolute top-20 left-8 animate-float-slow opacity-40">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-pink-400">
          <!-- Graduation Cap -->
          <path d="M20 50l30-15 30 15-30 15z" stroke-width="1.2"/>
          <path d="M35 57.5v7.5L50 70l15-5v-7.5" stroke-width="1.2"/>
          <path d="M50 65v10" stroke-width="1.2"/>
        </svg>
      </div>

      <!-- Subject Icons -->
      <div class="absolute top-1/3 right-12 animate-float-slow opacity-40" style="animation-delay: -2s;">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-purple-400">
          <!-- Science Flask -->
          <path d="M40 20h20v30l15 25H25l15-25V20z" stroke-width="1.2"/>
          <path d="M35 60q15-10 30 0" stroke-width="1.2"/>
        </svg>
      </div>

      <!-- Math Symbols -->
      <div class="absolute bottom-1/4 left-16 animate-float-slow opacity-40" style="animation-delay: -3s;">
        <svg width="260" height="260" viewBox="0 0 100 100" fill="none" class="text-blue-400">
          <path d="M30 50h40M50 30v40" stroke-width="1.2" stroke="currentColor"/>
          <path d="M20 80l60-60M20 20l60 60" stroke-width="1.2" stroke="currentColor"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const filters = reactive({
  subject: '',
  priceRange: '',
  availability: '',
  rating: ''
})

// Sample data - replace with actual API calls
const tutors = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    subject: 'Mathematics',
    rating: 4.8,
    availability: 'Weekdays & Evenings',
    hourlyRate: 45,
    description: 'Experienced math tutor specializing in calculus and algebra. Over 5 years of teaching experience with proven success in helping students improve their grades and understanding of mathematical concepts.',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Michael Chen',
    subject: 'Physics',
    rating: 4.9,
    availability: 'Weekends',
    hourlyRate: 50,
    description: 'PhD in Physics with a passion for making complex concepts easy to understand. Specialized in mechanics, thermodynamics, and quantum physics with research experience.',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    subject: 'English Literature',
    rating: 4.7,
    availability: 'Flexible Hours',
    hourlyRate: 40,
    description: 'Published author helping students improve their writing and analytical skills. Expertise in creative writing, essay composition, and literary analysis with a focus on contemporary literature.',
    avatar: 'https://i.pravatar.cc/150?img=3'
  }
])

const requestTutor = (tutor) => {
  router.push({ 
    name: 'Inbox',
    query: { teacherId: tutor.id }
  })
}

const viewProfile = (tutor) => {
  router.push({ 
    name: 'TutorProfilePage',
    query: { id: tutor.id }
  })
}
</script>

<style scoped>
.filter-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 0.75rem;
  color: white;
  transition: all 300ms ease;
  backdrop-filter: blur(4px);
  cursor: pointer;
  transform-origin: top;
}

.filter-input:hover {
  border-color: rgba(99, 102, 241, 0.3);
  background-color: rgba(99, 102, 241, 0.15);
  transform: translateY(-1px);
}

.filter-input:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.5);
  background-color: rgba(99, 102, 241, 0.2);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
  transform: translateY(-1px);
}

.filter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* Enhanced select styles */
select.filter-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238B5CF6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

/* Dropdown styling */
select.filter-input:focus {
  animation: pulse 1.5s infinite;
}

/* Select options styling with blur effect */
select.filter-input option {
  background-color: rgba(30, 27, 75, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  transition: all 300ms ease;
}

/* Styling the dropdown container */
select.filter-input:focus {
  border-radius: 0.75rem 0.75rem 0 0;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  select.filter-input {
    border-radius: 0.75rem !important;
  }
  
  select.filter-input option {
    background-color: rgba(30, 27, 75, 0.95);
    border-radius: 0.5rem;
    margin: 0.25rem;
    padding: 0.75rem;
  }
}

/* Hover effect for options */
select.filter-input option:hover,
select.filter-input option:focus {
  background-color: rgba(99, 102, 241, 0.3);
  cursor: pointer;
}

/* Animation keyframes */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
  }
}

/* Smooth opening animation for dropdowns */
select.filter-input {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

select.filter-input:focus {
  transform: translateY(-1px);
  animation: dropdownOpen 150ms ease-out forwards;
}

@keyframes dropdownOpen {
  0% {
    opacity: 0.8;
    transform: translateY(-1px) scaleY(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(-1px) scaleY(1);
  }
}

/* Keep existing styles */
.line-clamp-2 {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.h-12 {
  height: 3rem;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

/* Enhanced SVG animations */
@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1); 
    opacity: 0.4;
  }
  50% {
    transform: translateY(-5px) rotate(5deg) scale(1.05);
    opacity: 0.6;
  }
}
</style>

