<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
        Expert Tutors
      </h1>
      <p class="text-xl text-blue-100/80 max-w-3xl mx-auto">
        Connect with our experienced tutors and start your learning journey today
      </p>
    </div>

    <!-- Tutor Grid -->
    <div class="max-w-7xl mx-auto">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="profile in tutorProfiles"
          :key="profile.id"
          class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer"
          @click="openTutorModal(profile)"
        >
          <!-- Tutor Card Header -->
          <div class="flex items-center gap-4 mb-4">
            <img
              :src="profile.image"
              :alt="profile.name"
              class="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/30"
            />
            <div>
              <h3 class="text-xl font-semibold text-white">{{ profile.name }}</h3>
              <p class="text-blue-100/80">{{ profile.subjects.join(', ') }}</p>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center text-blue-100/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ profile.experience }}
            </div>
            <div class="flex items-center text-blue-100/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ profile.location }}
            </div>
          </div>

          <!-- Rating and Reviews -->
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="ml-1 text-white">{{ profile.rating }}</span>
            </div>
            <span class="text-blue-100/80">{{ profile.reviews }} reviews</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Modal -->
    <div v-if="selectedTutor" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-gray-900/95 rounded-xl shadow-xl w-full max-w-3xl overflow-hidden border border-indigo-500/30">
        <!-- Modal Header -->
        <div class="relative p-6 border-b border-white/10">
          <button
            @click="closeTutorModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="flex items-center gap-6">
            <img
              :src="selectedTutor.image"
              :alt="selectedTutor.name"
              class="w-24 h-24 rounded-xl object-cover border-2 border-indigo-500/30"
            />
            <div>
              <h2 class="text-2xl font-bold text-white">{{ selectedTutor.name }}</h2>
              <p class="text-blue-100/80">{{ selectedTutor.subjects.join(', ') }}</p>
            </div>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6 space-y-6">
          <!-- Stats Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="stat-item">
              <span class="stat-label">Experience</span>
              <span class="stat-value">{{ selectedTutor.experience }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Rating</span>
              <span class="stat-value">{{ selectedTutor.rating }} ({{ selectedTutor.reviews }} reviews)</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Rate</span>
              <span class="stat-value">{{ selectedTutor.hourlyRate }}/hour</span>
            </div>
          </div>

          <!-- Details -->
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">Education</h3>
              <p class="text-blue-100/80">{{ selectedTutor.education }}</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">Specializations</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="spec in selectedTutor.specializations" 
                  :key="spec"
                  class="px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-300"
                >
                  {{ spec }}
                </span>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">Achievements</h3>
              <ul class="list-disc list-inside text-blue-100/80 space-y-1">
                <li v-for="achievement in selectedTutor.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-6 border-t border-white/10 flex justify-end gap-4">
          <button
            @click="closeTutorModal"
            class="px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            Close
          </button>
          <button
            @click="handleContact(selectedTutor.id)"
            class="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            Contact Tutor
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedTutor = ref(null)

const tutorProfiles = ref([
  {
    id: 1,
    name: 'Dr. Arin Kumar',
    image: 'https://i.pravatar.cc/150?img=11',
    subjects: ['Mathematics', 'Physics'],
    experience: '5 years teaching experience',
    location: 'Rajasthan',
    rating: 4.9,
    reviews: 128,
    specializations: ['Calculus', 'Linear Algebra', 'Mechanics'],
    education: 'PhD in Mathematics from IIT',
    availability: 'Available Now',
    hourlyRate: '$40',
    languages: ['English', 'Hindi'],
    achievements: [
      'Best Teacher Award 2023',
      'Published Research Papers',
      '500+ Students Taught'
    ]
  },
  {
    id: 2,
    name: 'Prof. Alokesh Singh',
    image: 'https://i.pravatar.cc/150?img=12',
    subjects: ['Computer Science', 'Mathematics'],
    experience: '3 years teaching experience',
    location: 'Rajasthan',
    rating: 4.8,
    reviews: 95,
    specializations: ['Data Structures', 'Algorithms', 'Web Development'],
    education: 'MTech in Computer Science',
    availability: 'Available Today',
    hourlyRate: '$35',
    languages: ['English', 'Hindi'],
    achievements: [
      'Technical Lead at Major Tech Company',
      'Open Source Contributor',
      '300+ Students Mentored'
    ]
  },
  {
    id: 3,
    name: 'Dr. Priya Sharma',
    image: 'https://i.pravatar.cc/150?img=13',
    subjects: ['Biology', 'Chemistry'],
    experience: '7 years teaching experience',
    location: 'Delhi',
    rating: 4.9,
    reviews: 156,
    specializations: ['Molecular Biology', 'Organic Chemistry', 'Biochemistry'],
    education: 'PhD in Biotechnology',
    availability: 'Available This Week',
    hourlyRate: '$45',
    languages: ['English', 'Hindi', 'Bengali'],
    achievements: [
      'Research Excellence Award',
      'Published in Nature Journal',
      '600+ Students Guided'
    ]
  }
])

function openTutorModal(profile) {
  selectedTutor.value = profile
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function closeTutorModal() {
  selectedTutor.value = null
}

function handleContact(tutorId) {
  router.push('/inbox')
}
</script>

<style scoped>
.stat-item {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-label {
  display: block;
  font-size: 0.875rem;
  color: rgba(219, 234, 254, 0.6);
  margin-bottom: 0.25rem;
}

.stat-value {
  display: block;
  font-size: 1.125rem;
  color: white;
  font-weight: 500;
}

/* Animation for cards */
.grid > div {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animations */
.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }
</style>
  

  