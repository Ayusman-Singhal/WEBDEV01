<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Decorative Doodles -->
    <div class="fixed left-0 inset-y-0 pointer-events-none overflow-hidden w-96 opacity-40 hidden lg:block">
      <!-- Student with Book Doodle -->
      <div class="absolute top-20 left-8 animate-float-slow">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-pink-400">
          <!-- Student -->
          <circle cx="50" cy="35" r="12" stroke-width="1.2"/>
          <path d="M50 45v20" stroke-width="1.2"/>
          <path d="M40 65l10 10 10-10" stroke-width="1.2"/>
          <path d="M35 55h30" stroke-width="1.2"/>
          <!-- Book -->
          <rect x="30" y="50" width="40" height="30" stroke-width="1.2"/>
          <path d="M50 50v30" stroke-width="1.2"/>
          <path d="M35 55c0 0 5-2 15-2s15 2 15 2" stroke-width="1.2"/>
        </svg>
      </div>

      <!-- Floating Math Symbols -->
      <div class="absolute top-1/3 left-12 animate-float-slow" style="animation-delay: -2s;">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-red-400">
          <path d="M30 50h40M50 30v40" stroke-width="1.2"/>
          <path d="M25 70l10-10M25 60l10 10" stroke-width="1.2"/>
          <path d="M65 65h20M75 55v20" stroke-width="1.2"/>
          <path d="M20 40c0 0 15-10 30 0s30 0 30 0" stroke-width="1.2"/>
        </svg>
      </div>

      <!-- Letters and Numbers -->
      <div class="absolute bottom-1/3 left-16 animate-float-slow" style="animation-delay: -3s;">
        <svg width="260" height="260" viewBox="0 0 100 100" fill="none" class="text-blue-400">
          <text x="20" y="40" fill="currentColor" font-size="15">A</text>
          <text x="40" y="60" fill="currentColor" font-size="15">B</text>
          <text x="60" y="40" fill="currentColor" font-size="15">1</text>
          <text x="80" y="60" fill="currentColor" font-size="15">2</text>
          <text x="30" y="80" fill="currentColor" font-size="15">x</text>
          <text x="50" y="30" fill="currentColor" font-size="15">y</text>
        </svg>
      </div>
    </div>

    <!-- Right Side Doodles -->
    <div class="fixed right-0 inset-y-0 pointer-events-none overflow-hidden w-96 opacity-40 hidden lg:block">
      <!-- Teaching Board -->
      <div class="absolute top-32 right-8 animate-float-slow" style="animation-delay: -1.5s;">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-purple-400">
          <rect x="20" y="20" width="60" height="40" stroke-width="1.2"/>
          <path d="M30 30l20 20M50 30L30 50" stroke-width="1.2"/>
          <path d="M70 35H40" stroke-width="1.2"/>
          <path d="M70 45H40" stroke-width="1.2"/>
        </svg>
      </div>

      <!-- Books Stack with Color -->
      <div class="absolute top-1/2 right-12 animate-float-slow" style="animation-delay: -2.5s;">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="none" class="text-pink-400">
          <path d="M30 30h40v10H30z" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.1"/>
          <path d="M25 45h40v10H25z" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.1"/>
          <path d="M35 60h40v10H35z" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.1"/>
        </svg>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute bottom-1/4 right-16 animate-float-slow" style="animation-delay: -3.5s;">
        <svg width="260" height="260" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-blue-400">
          <circle cx="50" cy="50" r="20" stroke-width="1.2" fill="currentColor" fill-opacity="0.1"/>
          <path d="M30 50h40" stroke-width="1.2"/>
          <path d="M50 30v40" stroke-width="1.2"/>
        </svg>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div class="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>

    <!-- Header Section with Enhanced Design -->
    <div class="max-w-7xl mx-auto text-center mb-20 relative">
      <!-- Decorative Grid Pattern -->
      <div class="absolute inset-0 grid grid-cols-6 gap-4 opacity-5 pointer-events-none">
        <div v-for="n in 24" :key="n" class="h-8 bg-white/10 rounded-lg"></div>
      </div>

      <div class="relative">
        <!-- Professional Icon -->
        <div class="mb-8 flex justify-center">
          <div class="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
            <div class="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <svg class="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5z M12 14l9-5-9-5-9 5 9 5z"/>
              </svg>
            </div>
          </div>
        </div>

        <h1 class="text-5xl md:text-6xl font-extrabold mb-6">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Become an Expert Tutor
          </span>
        </h1>
        <p class="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
          Join our elite community of educators and shape the future of learning.
          Share your expertise, inspire students, and grow professionally.
        </p>
      </div>
    </div>

    <!-- Enhanced Benefits Section -->
    <div v-if="!showForm" class="max-w-7xl mx-auto mb-20">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Enhanced Benefit Cards -->
        <div v-for="(benefit, index) in benefits" :key="index"
             class="group relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 
                    hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-500/5 rounded-2xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="w-14 h-14 mb-6 p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl">
              <component :is="benefit.icon" class="w-full h-full text-indigo-400"/>
            </div>
            <h3 class="text-xl font-semibold text-black mb-4">{{ benefit.title }}</h3>
            <p class="text-blue-100/70 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>

      <!-- Enhanced CTA Button -->
      <div class="text-center mt-16">
        <button @click="showForm = true"
                class="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold
                       hover:from-indigo-500 hover:to-purple-500 transform transition duration-300 
                       shadow-lg hover:shadow-indigo-500/25">
          <span class="relative z-10 text-black text-lg">Start Your Teaching Journey</span>
          <div class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>

    <!-- Application Form (Enhanced with detailed steps) -->
    <div v-if="showForm" class="max-w-4xl mx-auto relative">
      <!-- Decorative elements for the form -->
      <div class="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"></div>
      <div class="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
      
      <!-- Enhanced form container -->
      <div class="relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <!-- Glass effect overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl"></div>
        
        <!-- Form content -->
        <div class="relative z-10">
          <!-- Progress indicator with enhanced styling -->
          <div class="mb-12">
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center space-x-2">
                <span class="text-xl font-semibold text-blue-300">Step {{ currentStep }}</span>
                <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                </svg>
                <span class="text-blue-300/70">of 6</span>
              </div>
              <span class="text-blue-300/70 text-sm">{{ Math.round((currentStep/6) * 100) }}% Complete</span>
            </div>
            
            <!-- Enhanced progress bar -->
            <div class="h-2 bg-white/5 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
                   :style="`width: ${(currentStep/6) * 100}%`">
                <div class="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            </div>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Step 1: Personal Information -->
            <div v-if="currentStep === 1" class="space-y-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Basic Information</h2>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Create a password"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input 
                  v-model="form.confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm your password"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>
            </div>

            <!-- Step 2: Verification -->
            <div v-if="currentStep === 2" class="space-y-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Verification</h2>
              
              <!-- Photo Capture Section -->
              <div class="space-y-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">ID Verification Photo</label>
                
                <!-- Camera Preview -->
                <div v-if="showCamera" class="relative w-full max-w-sm mx-auto">
                  <video
                    ref="videoRef"
                    autoplay
                    playsinline
                    class="w-full rounded-lg border-2 border-indigo-500"
                  ></video>
                  <button
                    @click="capturePhoto"
                    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-indigo-500 text-black rounded-lg hover:bg-indigo-600"
                  >
                    Capture
                  </button>
                </div>

                <!-- Captured Photo Preview -->
                <div v-else-if="form.photoUrl" class="relative w-full max-w-sm mx-auto">
                  <img
                    :src="form.photoUrl"
                    class="w-full rounded-lg border-2 border-indigo-500"
                    alt="Captured photo"
                  >
                  <button
                    @click="startCamera"
                    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-indigo-500 text-black rounded-lg hover:bg-indigo-600"
                  >
                    Retake
                  </button>
                </div>

                <!-- Start Camera Button -->
                <div v-else class="text-center">
                  <button
                    @click="startCamera"
                    type="button"
                    class="px-4 py-2 bg-indigo-500 text-black rounded-lg hover:bg-indigo-600"
                  >
                    Take Photo
                  </button>
                </div>
              </div>

              <!-- Government ID Type -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Government ID Type</label>
                <select 
                  v-model="form.govtIdType"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
                  <option value="">Select ID Type</option>
                  <option value="passport">Passport</option>
                  <option value="drivingLicense">Driving License</option>
                  <option value="nationalId">National ID</option>
                </select>
              </div>

              <!-- ID Number -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">ID Number</label>
                <input 
                  v-model="form.govtIdNumber"
                  type="text"
                  required
                  placeholder="Enter your ID number"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>
            </div>

            <!-- Step 3: Education -->
            <div v-if="currentStep === 3" class="space-y-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Education Qualification</h2>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highest Qualification</label>
                <select 
                  v-model="form.qualification"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
                  <option value="">Select Qualification</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Teaching Experience (Years)</label>
                <input 
                  v-model="form.experience"
                  type="number"
                  required
                  min="0"
                  placeholder="Years of teaching experience"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Certificates</label>
                <input 
                  type="file"
                  @change="handleCertificateUpload"
                  accept=".pdf,.doc,.docx"
                  multiple
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>
            </div>

            <!-- Step 4: Teaching Details -->
            <div v-if="currentStep === 4" class="space-y-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Teaching Details</h2>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subjects</label>
                <select 
                  v-model="form.subjects"
                  multiple
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="english">English</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Classes</label>
                <select 
                  v-model="form.classes"
                  multiple
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Extra Activities</label>
                <input 
                  v-model="form.extraActivities"
                  type="text"
                  placeholder="Enter any extra activities you can teach"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>
            </div>

            <!-- Step 5: Self Description -->
            <div v-if="currentStep === 5" class="space-y-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">About You</h2>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Brief Description</label>
                <textarea 
                  v-model="form.description"
                  rows="4"
                  required
                  placeholder="Tell us about yourself"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Teaching Experience</label>
                <textarea 
                  v-model="form.teachingExperience"
                  rows="4"
                  required
                  placeholder="Describe your teaching experience"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements</label>
                <textarea 
                  v-model="form.achievements"
                  rows="4"
                  placeholder="List your achievements"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                ></textarea>
              </div>
            </div>

            <!-- Step 6: Location -->
            <div v-if="currentStep === 6" class="space-y-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Location Details</h2>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input 
                  v-model="form.city"
                  type="text"
                  required
                  placeholder="Enter your city"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Teaching Areas</label>
                <input 
                  v-model="form.teachingAreas"
                  type="text"
                  required
                  placeholder="Enter areas where you can teach"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                >
              </div>

              <div class="flex items-center space-x-2">
                <input 
                  v-model="form.termsAccepted"
                  type="checkbox"
                  required
                  class="form-checkbox text-indigo-500"
                >
                <span class="text-sm text-gray-700">I accept the terms and conditions</span>
              </div>
            </div>

            <!-- Add this before the Navigation Buttons div -->
            <div v-if="error" class="text-red-600 text-sm mb-4">
              {{ error }}
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between mt-8">
              <button
                v-if="currentStep > 1"
                @click="previousStep"
                type="button"
                class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                v-if="currentStep < 6"
                @click="nextStep"
                type="button"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
              <button
                v-if="currentStep === 6"
                type="submit"
                :disabled="loading"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {{ loading ? 'Submitting...' : 'Submit Application' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const error = ref('')
const loading = ref(false)
const showForm = ref(false)
const currentStep = ref(1)
const photoPreview = ref(null)
const certificateFiles = ref([])
const videoRef = ref(null)
const showCamera = ref(false)
let stream = null

const form = ref({
  // Keep your existing form structure
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  photo: null,
  photoUrl: null,
  govtIdType: '',
  govtIdNumber: '',
  govtIdName: '',
  qualification: '',
  experience: '',
  certificates: [],
  subjects: [],
  classes: [],
  extraActivities: [],
  description: '',
  teachingExperience: '',
  achievements: '',
  teachingApproach: '',
  city: '',
  teachingAreas: [],
  termsAccepted: false,
  cameraError: ''
})

// Updated handleSubmit function
const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''

    // Get token from localStorage
    const token = localStorage.getItem('token')
    if (!token) {
      error.value = 'Please login first'
      router.push('/login')
      return
    }

    // Create FormData
    const formData = new FormData()
    
    // Add photo if exists
    if (form.value.photo) {
      formData.append('photo', form.value.photo)
    }

    // Add certificates if exists
    if (form.value.certificates && form.value.certificates.length > 0) {
      Array.from(form.value.certificates).forEach(cert => {
        formData.append('certificates', cert)
      })
    }

    // Add other form data
    const tutorData = {
      name: form.value.name,
      email: form.value.email,
      qualification: form.value.qualification,
      experience: form.value.experience,
      subjects: form.value.subjects,
      classes: form.value.classes,
      description: form.value.description,
      teachingExperience: form.value.teachingExperience,
      achievements: form.value.achievements,
      teachingApproach: form.value.teachingApproach,
      city: form.value.city,
      teachingAreas: form.value.teachingAreas
    }

    formData.append('tutorData', JSON.stringify(tutorData))

    // Send request with token in headers
    const response = await fetch('http://localhost:5000/api/tutor/register', {
      method: 'POST',
      headers: {
        'x-auth-token': token  // Add token here
      },
      body: formData
    })

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message || 'Registration failed')
    }

    const data = await response.json()
    
    // Update local storage with new user data
    localStorage.setItem('userType', 'teacher')
    localStorage.setItem('userData', JSON.stringify(data.user))
    
    // Redirect to dashboard
    router.push('/teacher-dashboard')
  } catch (err) {
    console.error('Error:', err)
    error.value = err.message || 'Registration failed'
    if (err.message === 'Token is not valid') {
      // Clear invalid token and redirect to login
      localStorage.removeItem('token')
      localStorage.removeItem('userData')
      router.push('/login')
    }
  } finally {
    loading.value = false
  }
}

// Updated camera methods
const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    })
    
    if (videoRef.value) {
      videoRef.value.srcObject = stream
      videoRef.value.onloadedmetadata = () => {
        videoRef.value.play()
      }
    }
    showCamera.value = true
    form.value.cameraError = ''
  } catch (err) {
    console.error('Error accessing camera:', err)
    form.value.cameraError = 'Unable to access camera. Please ensure camera permissions are granted.'
  }
}

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop())
    stream = null
  }
  if (videoRef.value) {
    videoRef.value.srcObject = null
  }
  showCamera.value = false
}

const capturePhoto = () => {
  if (!videoRef.value) return

  try {
    const canvas = document.createElement('canvas')
    canvas.width = videoRef.value.videoWidth
    canvas.height = videoRef.value.videoHeight
    
    const context = canvas.getContext('2d')
    context.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height)
    
    // Convert to blob and store in form
    canvas.toBlob((blob) => {
      form.value.photo = blob
      form.value.photoUrl = URL.createObjectURL(blob)
      stopCamera()
    }, 'image/jpeg', 0.8)
  } catch (error) {
    console.error('Error capturing photo:', error)
    form.value.cameraError = 'Error capturing photo. Please try again.'
  }
}

// Updated file upload handlers
const handlePhotoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    form.value.photo = file
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.photoUrl = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleCertificateUpload = (event) => {
  const files = Array.from(event.target.files)
  certificateFiles.value = files
}

// Clean up on component unmount
onUnmounted(() => {
  stopCamera()
})

// Keep your existing benefits data and icon components
const benefits = [
  {
    title: 'Flexible Schedule',
    description: 'Design your own teaching schedule. Work when and where you want.',
    icon: 'ClockIcon'
  },
  {
    title: 'Competitive Earnings',
    description: 'Set your own rates and earn what you deserve.',
    icon: 'CurrencyDollarIcon'
  },
  {
    title: 'Professional Growth',
    description: 'Access exclusive training resources and collaborate with experts.',
    icon: 'AcademicCapIcon'
  }
]

// Keep your existing icon components

// Add these functions after the form ref in your script setup
const nextStep = () => {
  // Validate current step before proceeding
  if (validateCurrentStep()) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

// Add validation function for each step
const validateCurrentStep = () => {
  switch (currentStep.value) {
    case 1: // Personal Information
      if (!form.value.name || !form.value.email || !form.value.password || !form.value.confirmPassword) {
        error.value = 'Please fill in all fields'
        return false
      }
      if (form.value.password !== form.value.confirmPassword) {
        error.value = 'Passwords do not match'
        return false
      }
      break

    case 2: // Verification
      if (!form.value.govtIdType || !form.value.govtIdNumber) {
        error.value = 'Please complete verification details'
        return false
      }
      break

    case 3: // Education
      if (!form.value.qualification || !form.value.experience) {
        error.value = 'Please fill in education details'
        return false
      }
      break

    case 4: // Teaching Details
      if (!form.value.subjects || form.value.subjects.length === 0) {
        error.value = 'Please select at least one subject'
        return false
      }
      break

    case 5: // Self Description
      if (!form.value.description || !form.value.teachingExperience) {
        error.value = 'Please fill in your description and teaching experience'
        return false
      }
      break
  }
  error.value = '' // Clear any previous errors
  return true
}
</script>
<style scoped>
/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Add custom animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* Add custom form styling */
input[type="text"],
input[type="email"],
input[type="password"],
select,
textarea {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
}

/* Add custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.7);
}

/* Additional form input styles */
input[type="text"],
input[type="email"],
input[type="password"],
select,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  color: white;
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* Focus styles with keyboard navigation */
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid rgba(99, 102, 241, 0.8);
  outline-offset: 2px;
}

/* Disabled state */
input:disabled,
select:disabled,
textarea:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Error state */
input.error,
select.error,
textarea.error {
  border-color: rgba(239, 68, 68, 0.5);
}

/* Success state */
input.success,
select.success,
textarea.success {
  border-color: rgba(34, 197, 94, 0.5);
}

/* Additional form-specific styles */
.form-group {
  margin-bottom: 1.5rem;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
select,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  color: white;
  transition: all 0.3s ease;
}

select[multiple] {
  min-height: 120px;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-checkbox {
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  cursor: pointer;
}

.form-checkbox:checked {
  background-color: rgb(99, 102, 241);
  border-color: rgb(99, 102, 241);
}

/* Error state */
.error-message {
  color: rgb(239, 68, 68);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

input.error,
select.error,
textarea.error {
  border-color: rgb(239, 68, 68);
}

/* Loading state */
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* File input styling */
input[type="file"] {
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.75rem;
  cursor: pointer;
}

input[type="file"]::file-selector-button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(99, 102, 241, 0.5);
  border: none;
  color: white;
  margin-right: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

input[type="file"]::file-selector-button:hover {
  background: rgba(99, 102, 241, 0.7);
}

/* Add new animations */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-float-slow {
  animation: float-slow 7s ease-in-out infinite;
}

/* Enhanced form styling */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

/* Enhanced input styling */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
select,
textarea {
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input:focus,
select:focus,
textarea:focus {
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.04));
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25),
              0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Enhanced file input */
input[type="file"] {
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px dashed rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

input[type="file"]:hover {
  border-color: rgba(99, 102, 241, 0.5);
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.04));
}

/* Enhanced select multiple */
select[multiple] {
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
}

select[multiple] option {
  background-color: rgba(17, 24, 39, 0.95);
  padding: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

select[multiple] option:checked {
  background: linear-gradient(to right, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
}

/* Enhanced checkbox */
.form-checkbox {
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.375rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  transition: all 0.3s ease;
}

.form-checkbox:checked {
  background: linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247));
  border-color: transparent;
}

.form-checkbox:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.875rem;
}

/* Step transitions */
.space-y-6 > * {
  transition: all 0.3s ease-out;
}

/* Loading animation for submit button */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

button:disabled {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Add new doodle-specific animations */
@keyframes float-slow-reverse {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1); 
    opacity: 0.4;
  }
  50% { 
    transform: translateY(-25px) rotate(-2deg) scale(1.05); 
    opacity: 0.6;
  }
}

@keyframes gentle-swing {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-slow:nth-child(odd) {
  animation: float-slow-reverse 9s ease-in-out infinite;
}

.animate-gentle-swing {
  animation: gentle-swing 6s ease-in-out infinite;
  transform-origin: top center;
}

/* Add hover effects for doodles */
svg path {
  transition: all 0.3s ease;
}

svg:hover path {
  stroke-width: 0.8;
}

/* Make doodles responsive */
@media (max-width: 1280px) {
  .fixed.left-0,
  .fixed.right-0 {
    width: 48px;
  }

  svg {
    transform: scale(0.7);
  }
}

/* Enhanced doodle animations */
@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1); 
    opacity: 0.4;
  }
  50% { 
    transform: translateY(-20px) rotate(2deg) scale(1.05); 
    opacity: 0.6;
  }
}

@keyframes float-slow-reverse {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1); 
    opacity: 0.4;
  }
  50% { 
    transform: translateY(-25px) rotate(-2deg) scale(1.05); 
    opacity: 0.6;
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-slow:nth-child(odd) {
  animation: float-slow-reverse 9s ease-in-out infinite;
}

/* Enhanced hover effects */
svg {
  transition: all 0.5s ease;
}

svg:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

svg path, svg rect, svg circle {
  transition: all 0.3s ease;
}

svg:hover path,
svg:hover rect,
svg:hover circle {
  stroke-width: 1.5;
  filter: drop-shadow(0 0 8px currentColor);
}

/* Make doodles more visible on different backgrounds */
.text-pink-400 {
  filter: drop-shadow(0 0 5px rgba(244, 114, 182, 0.3));
}

.text-blue-400 {
  filter: drop-shadow(0 0 5px rgba(96, 165, 250, 0.3));
}

.text-purple-400 {
  filter: drop-shadow(0 0 5px rgba(167, 139, 250, 0.3));
}

.text-red-400 {
  filter: drop-shadow(0 0 5px rgba(248, 113, 113, 0.3));
}

/* Responsive adjustments */
@media (max-width: 1280px) {
  .fixed.left-0,
  .fixed.right-0 {
    width: 64px;
  }

  svg {
    transform: scale(0.8);
  }
}

/* Add these styles for better visibility */
label {
  color: #374151;
}

input::placeholder,
textarea::placeholder,
select {
  color: #6B7280;
}

input,
textarea,
select {
  color: #111827;
}

.text-blue-100\/80 {
  color: #374151;
}

/* Update any other text colors as needed */
</style>

