<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Debug info (remove in production) -->
    <div class="hidden">
      Debug: {{ isAuthenticated ? 'Authenticated' : 'Not Authenticated' }}
      User Type: {{ authStore.getUserType }}
    </div>

    <!-- Login Required Message -->
    <div v-if="showLoginMessage" class="max-w-2xl mx-auto text-center">
      <div class="backdrop-blur-md bg-indigo-950/20 border border-white/10 rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
          {{ !isLoggedIn ? 'Login Required' : 'Student Access Only' }}
        </h2>
        <p class="text-blue-100/80 mb-8">
          {{ !isLoggedIn 
            ? 'Please login or create an account to request a tutor'
            : 'This section is only available for student accounts'
          }}
        </p>
        <div class="flex justify-center gap-4">
          <button
            v-if="!isLoggedIn"
            @click="navigateToLogin"
            class="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            Login
          </button>
          <button
            v-if="!isLoggedIn"
            @click="navigateToSignup"
            class="px-6 py-2 rounded-lg border border-indigo-500/30 text-white hover:bg-indigo-500/10 transition-all duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content (Only shown when authenticated and is student) -->
    <div v-else>
      <!-- Step-by-Step Form -->
      <div v-if="!showTutorList" class="max-w-2xl mx-auto">
        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="flex justify-between mb-2">
            <span class="text-blue-100/80">Step {{ currentStep }} of 3</span>
            <span class="text-blue-100/80">{{ Math.round((currentStep / 3) * 100) }}%</span>
          </div>
          <div class="h-2 bg-indigo-950/50 rounded-full">
            <div 
              class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              :style="{ width: `${(currentStep / 3) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- Step 1: Class Selection -->
        <div v-if="currentStep === 1" class="space-y-6">
          <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200">
            What class are you in?
          </h2>
          <p class="text-blue-100/80">This helps us find tutors who specialize in your grade level</p>
          
          <div class="grid grid-cols-2 gap-4">
            <button
              v-for="grade in grades"
              :key="grade"
              @click="selectGrade(grade)"
              class="p-4 rounded-xl border border-white/10 backdrop-blur-md hover:border-indigo-500/30 transition-all duration-300"
              :class="{ 'border-indigo-500 bg-indigo-500/10': selectedGrade === grade }"
            >
              <span class="text-white font-medium">{{ grade }}</span>
            </button>
          </div>
        </div>

        <!-- Step 2: Subject Selection -->
        <div v-if="currentStep === 2" class="space-y-6">
          <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200">
            What subject do you need help with?
          </h2>
          <p class="text-blue-100/80">Select the subject you want to focus on</p>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button
              v-for="subject in subjects"
              :key="subject"
              @click="selectSubject(subject)"
              class="p-4 rounded-xl border border-white/10 backdrop-blur-md hover:border-indigo-500/30 transition-all duration-300"
              :class="{ 'border-indigo-500 bg-indigo-500/10': selectedSubject === subject }"
            >
              <span class="text-white font-medium">{{ subject }}</span>
            </button>
          </div>
        </div>

        <!-- Step 3: Location Selection -->
        <div v-if="currentStep === 3" class="space-y-6">
          <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200">
            Where are you located?
          </h2>
          <p class="text-blue-100/80">Help us find the most suitable tutors in your area</p>

          <div class="space-y-6">
            <!-- Location Input -->
            <div class="space-y-2">
              <label for="location" class="block text-sm font-medium text-blue-100/80">Your Location</label>
              <input
                id="location"
                v-model="location"
                type="text"
                placeholder="Enter your city, area, or postal code"
                class="w-full px-4 py-3 rounded-lg bg-indigo-950/50 border border-indigo-500/20 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
              >
            </div>

            <!-- Tutoring Preferences -->
            <div class="space-y-4 bg-indigo-950/30 p-4 rounded-lg border border-indigo-500/20">
              <h3 class="text-lg font-medium text-white">Do you want to be tutored in person?</h3>

              <!-- Home Tutoring Toggle Switch -->
              <div class="flex items-center gap-3">
                <label for="home" class="text-blue-100/80">
                  <span class="font-medium block">Home Tutoring</span>
                  <span class="text-sm text-blue-100/60">Have tutors come to your location</span>
                </label>
                <div class="relative inline-block w-12 ml-auto select-none">
                  <input
                    v-model="tutoringPreference"
                    type="checkbox"
                    id="home"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-indigo-500/20 appearance-none cursor-pointer transition-transform duration-200 ease-in-out"
                  >
                  <label
                    for="home"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-indigo-950/50 border border-indigo-500/20 cursor-pointer"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-8">
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="px-6 py-2 rounded-lg border border-indigo-500/30 text-white hover:bg-indigo-500/10 transition-all duration-300"
          >
            Back
          </button>
          <button
            v-if="currentStep < 3"
            @click="nextStep"
            class="ml-auto px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            :disabled="!canProceed"
          >
            Next
          </button>
          <button
            v-else
            @click="showResults"
            class="ml-auto px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            :disabled="!canProceed"
          >
            Find Tutors
          </button>
        </div>
      </div>

      <!-- Original Tutor List (shown after form completion) -->
      <div v-else>
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
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                  <option value="all">All Ratings</option>
                </select>
              </div>
            </div>

            <!-- Reset Button Row -->
            <div class="flex justify-end mt-4 pt-4 border-t border-white/10">
              <button
                @click="resetSearch"
                class="px-4 py-2 rounded-lg border border-indigo-500/30 text-white hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        <!-- Tutors List -->
        <div class="max-w-7xl mx-auto space-y-6">
          <div 
            v-for="tutor in filteredTutors" 
            :key="tutor.id"
            class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 flex flex-col md:flex-row items-center gap-6"
          >
            <!-- Tutor Avatar -->
            <img 
              :src="tutor.avatar" 
              :alt="tutor.name"
              class="w-24 h-24 rounded-xl object-cover border-2 border-indigo-500/30"
            >

            <!-- Tutor Info -->
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ tutor.name }}</h3>
                  <p class="text-blue-100/80">{{ tutor.subject }}</p>
                </div>
                <div class="flex items-center gap-4">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span class="ml-1 text-white">{{ tutor.rating }}</span>
                  </div>
                  <span class="text-blue-100/80">{{ tutor.reviews }} Reviews</span>
                </div>
              </div>

              <!-- Additional Info -->
              <div class="flex flex-wrap gap-4 mb-4">
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
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="badge in tutor.badges" 
                    :key="badge"
                    class="px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300"
                  >
                    {{ badge }}
                  </span>
                </div>
              </div>

              <p class="text-blue-100/80 line-clamp-2">{{ tutor.about }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col gap-3 min-w-[150px]">
              <button 
                @click="requestTutor(tutor)"
                class="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
              >
                Request Tutor
              </button>
              <button 
                @click="viewProfile(tutor)"
                class="w-full px-4 py-2 rounded-lg border border-indigo-500/30 text-white hover:bg-indigo-500/10 transition-all duration-300"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredTutors.length === 0" class="text-center py-12">
          <p class="text-xl text-blue-100/80">No tutors found matching your criteria</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import teacherData from '../data/teachers.json'

const router = useRouter()
const authStore = useAuthStore()

// Direct localStorage checks
const isLoggedIn = ref(localStorage.getItem('isAuthenticated') === 'true')
const userType = ref(localStorage.getItem('userType'))

// Computed property to determine if login message should be shown
const showLoginMessage = computed(() => {
  return !isLoggedIn.value || userType.value !== 'student'
})

// Navigation functions
const navigateToLogin = () => {
  router.push({ 
    name: 'Login',
    query: { redirect: '/requestTutor' }
  })
}

const navigateToSignup = () => {
  router.push({ 
    name: 'Login',
    query: { redirect: '/requestTutor', signup: 'true' }
  })
}

// Check authentication on mount
onMounted(() => {
  // Check localStorage directly
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  const currentUserType = localStorage.getItem('userType')
  
  console.log('Auth Check:', { isAuthenticated, userType: currentUserType })

  if (!isAuthenticated) {
    navigateToLogin()
  } else if (currentUserType !== 'student') {
    router.push('/')
  }

  // Update reactive refs
  isLoggedIn.value = isAuthenticated
  userType.value = currentUserType
})

// Initialize with session storage or default values
const showTutorList = ref(JSON.parse(sessionStorage.getItem('showTutorList')) || false)
const currentStep = ref(parseInt(sessionStorage.getItem('currentStep')) || 1)
const selectedGrade = ref(sessionStorage.getItem('selectedGrade') || '')
const selectedSubject = ref(sessionStorage.getItem('selectedSubject') || '')
const location = ref(sessionStorage.getItem('location') || '')
const tutoringPreference = ref(sessionStorage.getItem('tutoringPreference') === 'true')
const additionalNotes = ref(sessionStorage.getItem('additionalNotes') || '')

// Watch for changes and update session storage
const updateSessionStorage = () => {
  sessionStorage.setItem('showTutorList', JSON.stringify(showTutorList.value))
  sessionStorage.setItem('currentStep', currentStep.value)
  sessionStorage.setItem('selectedGrade', selectedGrade.value)
  sessionStorage.setItem('selectedSubject', selectedSubject.value)
  sessionStorage.setItem('location', location.value)
  sessionStorage.setItem('tutoringPreference', tutoringPreference.value)
  sessionStorage.setItem('additionalNotes', additionalNotes.value)
}

// Save filters to session storage
const filters = ref({
  subject: sessionStorage.getItem('filterSubject') || '',
  priceRange: sessionStorage.getItem('filterPriceRange') || '',
  availability: sessionStorage.getItem('filterAvailability') || '',
  rating: sessionStorage.getItem('filterRating') || ''
})

// Watch for filter changes
const updateFilterStorage = () => {
  sessionStorage.setItem('filterSubject', filters.value.subject)
  sessionStorage.setItem('filterPriceRange', filters.value.priceRange)
  sessionStorage.setItem('filterAvailability', filters.value.availability)
  sessionStorage.setItem('filterRating', filters.value.rating)
}

const grades = [
  'Grade 6-8',
  'Grade 9-10',
  'Grade 11-12',
  'University',
  'Professional',
  'Other'
]

const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'History',
  'Computer Science',
  'Economics',
  'Languages',
  'Psychology'
]

const canProceed = computed(() => {
  switch (currentStep.value) {
    case 1:
      return selectedGrade.value !== ''
    case 2:
      return selectedSubject.value !== ''
    case 3:
      return location.value !== ''
    default:
      return false
  }
})

const selectGrade = (grade) => {
  selectedGrade.value = grade
  updateSessionStorage()
}

const selectSubject = (subject) => {
  selectedSubject.value = subject
  updateSessionStorage()
}

const nextStep = () => {
  if (currentStep.value < 3 && canProceed.value) {
    currentStep.value++
    updateSessionStorage()
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    updateSessionStorage()
  }
}

const showResults = () => {
  if (canProceed.value) {
    filters.value.subject = selectedSubject.value
    showTutorList.value = true
    updateSessionStorage()
    updateFilterStorage()
  }
}

// Clear session when component unmounts
const clearSession = () => {
  const shouldClear = confirm('Do you want to clear your current search progress?')
  if (shouldClear) {
    sessionStorage.clear()
    showTutorList.value = false
    currentStep.value = 1
    selectedGrade.value = ''
    selectedSubject.value = ''
    location.value = ''
    tutoringPreference.value = false
    additionalNotes.value = ''
    filters.value = {
      subject: '',
      priceRange: '',
      availability: '',
      rating: ''
    }
  }
}

// Add a reset button to your template
const resetSearch = () => {
  clearSession()
}

// Watch for changes in location and onlineOnly
watch([location, tutoringPreference, additionalNotes], () => {
  updateSessionStorage()
})

// Watch for changes in filters
watch(filters, () => {
  updateFilterStorage()
}, { deep: true })

// Use teachers from json file
const tutors = ref(teacherData.teachers)

// Computed property for filtered tutors
const filteredTutors = computed(() => {
  return tutors.value.filter(tutor => {
    // Subject filter
    if (filters.value.subject && !tutor.subject.toLowerCase().includes(filters.value.subject.toLowerCase())) {
      return false
    }

    // Price range filter
    if (filters.value.priceRange) {
      const [min, max] = filters.value.priceRange.split('-').map(Number)
      if (max) {
        if (tutor.hourlyRate < min || tutor.hourlyRate > max) return false
      } else {
        // For "101+" case
        if (tutor.hourlyRate < min) return false
      }
    }

    // Availability filter
    if (filters.value.availability) {
      if (filters.value.availability === 'weekdays' && !tutor.availability.includes('Today')) return false
      if (filters.value.availability === 'weekends' && tutor.availability !== 'Available Now') return false
      if (filters.value.availability === 'evenings' && !tutor.availability.includes('Today')) return false
    }

    // Rating filter
    if (filters.value.rating) {
      const minRating = parseInt(filters.value.rating)
      if (tutor.rating < minRating) return false
    }

    return true
  })
})

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

/* Add these new animations */
.space-y-6 > div {
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

/* Stagger animations for cards */
.space-y-6 > div:nth-child(1) { animation-delay: 0.1s; }
.space-y-6 > div:nth-child(2) { animation-delay: 0.2s; }
.space-y-6 > div:nth-child(3) { animation-delay: 0.3s; }
.space-y-6 > div:nth-child(4) { animation-delay: 0.4s; }
.space-y-6 > div:nth-child(5) { animation-delay: 0.5s; }
.space-y-6 > div:nth-child(6) { animation-delay: 0.6s; }

/* Hover effects */
.space-y-6 > div:hover {
  box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Toggle Switch Styles */
.toggle-checkbox:checked {
  right: 0;
  border-color: rgb(99, 102, 241);
}

.toggle-label {
  transition: background-color 0.2s ease-in-out;
}

.toggle-checkbox:checked + .toggle-label {
  background-color: rgba(99, 102, 241, 0.2);
}
</style>

