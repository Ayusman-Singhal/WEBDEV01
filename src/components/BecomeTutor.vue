<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
        Join Our Teaching Community
      </h1>
      <p class="text-xl text-blue-100/80 max-w-3xl mx-auto">
        Transform lives through education while building a rewarding career
      </p>
    </div>

    <!-- Benefits Section -->
    <div v-if="!showForm" class="max-w-7xl mx-auto mb-16">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Flexible Schedule -->
        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
          <div class="w-12 h-12 mb-6">
            <svg class="w-full h-full text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">Flexible Schedule</h3>
          <p class="text-blue-100/80">Choose your own hours and work from anywhere. Perfect for maintaining work-life balance.</p>
        </div>

        <!-- Competitive Earnings -->
        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
          <div class="w-12 h-12 mb-6">
            <svg class="w-full h-full text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">Competitive Earnings</h3>
          <p class="text-blue-100/80">Set your own rates and earn competitive income while doing what you love.</p>
        </div>

        <!-- Professional Growth -->
        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
          <div class="w-12 h-12 mb-6">
            <svg class="w-full h-full text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">Professional Growth</h3>
          <p class="text-blue-100/80">Access professional development resources and join a community of expert educators.</p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-12">
        <button 
          @click="showForm = true"
          class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-indigo-500/25"
        >
          Become a Tutor
        </button>
      </div>
    </div>

    <!-- Application Form -->
    <div v-if="showForm" class="max-w-2xl mx-auto">
      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
        <!-- Progress indicator -->
        <div class="mb-8 text-center">
          <span class="text-blue-300">Step {{ currentStep }} of 6</span>
        </div>

        <form @submit.prevent="handleSubmit" class="applicationform space-y-6">
          <!-- Step 1: Personal Information -->
          <div v-if="currentStep === 1" class="space-y-6">
            <h2 class="text-2xl font-semibold text-white mb-4">Personal Information</h2>
            
            <div>
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Full Name</label>
              <input 
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white placeholder-blue-100/50"
                placeholder="Enter your full name"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Email Address</label>
              <input 
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white placeholder-blue-100/50"
                placeholder="Enter your email"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Password</label>
              <input 
                v-model="form.password"
                type="password"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white placeholder-blue-100/50"
                placeholder="Create a password"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Confirm Password</label>
              <input 
                v-model="form.confirmPassword"
                type="password"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white placeholder-blue-100/50"
                placeholder="Confirm your password"
              >
            </div>
          </div>

          <!-- Step 2: Verification -->
          <div v-if="currentStep === 2" class="space-y-6">
            <h2 class="text-2xl font-semibold text-white mb-4">Verification</h2>
            
            <!-- Photo Capture Section -->
            <div class="space-y-4">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">ID Verification Photo</label>
              
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
                  class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
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
                  class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                >
                  Retake
                </button>
              </div>

              <!-- Start Camera Button -->
              <div v-else class="text-center">
                <button
                  @click="startCamera"
                  type="button"
                  class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                >
                  Take Photo
                </button>
              </div>

              <!-- Error Message -->
              <p v-if="cameraError" class="text-red-400 text-sm text-center mt-2">
                {{ cameraError }}
              </p>
            </div>

            <!-- Government ID Type -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Government ID Type</label>
              <select 
                v-model="form.govtIdType"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
              >
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="drivingLicense">Driving License</option>
                <option value="nationalId">National ID</option>
              </select>
            </div>

            <!-- ID Number -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">ID Number</label>
              <input 
                v-model="form.govtIdNumber"
                type="text"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="Enter your ID number"
              >
            </div>
          </div>

          <!-- Step 3: Education -->
          <div v-if="currentStep === 3" class="space-y-6">
            <h2 class="text-2xl font-semibold text-white mb-4">Education Qualification</h2>
            
            <!-- Qualification -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Highest Qualification</label>
              <select 
                v-model="form.qualification"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
              >
                <option value="">Select Qualification</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            <!-- Experience -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Teaching Experience (Years)</label>
              <input 
                v-model="form.experience"
                type="number"
                required
                min="0"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="Years of teaching experience"
              >
            </div>

            <!-- Certificates -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Upload Certificates</label>
              <input 
                type="file"
                @change="handleCertificateUpload"
                accept=".pdf,.doc,.docx"
                multiple
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
              >
            </div>
          </div>

          <!-- Step 4: Teaching Details -->
          <div v-if="currentStep === 4" class="space-y-6">
            <h2 class="text-2xl font-semibold text-white mb-4">Teaching Details</h2>
            
            <!-- Subjects -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Subjects</label>
              <select 
                v-model="form.subjects"
                multiple
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
              >
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="english">English</option>
              </select>
            </div>

            <!-- Classes -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Classes</label>
              <select 
                v-model="form.classes"
                multiple
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
              >
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
            </div>

            <!-- Extra Activities -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Extra Activities</label>
              <input 
                v-model="form.extraActivities"
                type="text"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="Enter any extra activities you can teach"
              >
            </div>
          </div>

          <!-- Step 5: Self Description -->
          <div v-if="currentStep === 5" class="space-y-6">
            <h2 class="text-2xl font-semibold text-white mb-4">About You</h2>
            
            <!-- Description -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Brief Description</label>
              <textarea 
                v-model="form.description"
                rows="4"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="Tell us about yourself"
              ></textarea>
            </div>

            <!-- Teaching Experience -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Teaching Experience</label>
              <textarea 
                v-model="form.teachingExperience"
                rows="4"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="Describe your teaching experience"
              ></textarea>
            </div>

            <!-- Achievements -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Achievements</label>
              <textarea 
                v-model="form.achievements"
                rows="4"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="List your achievements"
              ></textarea>
            </div>
          </div>

          <!-- Step 6: Location -->
          <div v-if="currentStep === 6" class="space-y-6">
            <h2 class="text-2xl font-semibold text-white mb-4">Location Details</h2>
            
            <!-- City -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">City</label>
              <input 
                v-model="form.city"
                type="text"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="Enter your city"
              >
            </div>

            <!-- Teaching Areas -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-100/80 mb-2">Teaching Areas</label>
              <input 
                v-model="form.teachingAreas"
                type="text"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 text-white"
                placeholder="Enter areas where you can teach"
              >
            </div>

            <!-- Terms Acceptance -->
            <div class="space-y-2">
              <label class="flex items-center space-x-2">
                <input 
                  v-model="form.termsAccepted"
                  type="checkbox"
                  required
                  class="form-checkbox text-indigo-500"
                >
                <span class="text-sm text-blue-100/80">I accept the terms and conditions</span>
              </label>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-8">
            <button
              v-if="currentStep > 1"
              @click="previousStep"
              type="button"
              class="px-6 py-3 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-500/10"
            >
              Previous
            </button>
            <button
              v-if="currentStep < 6"
              @click="nextStep"
              type="button"
              class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg"
            >
              Next
            </button>
            <button
              v-if="currentStep === 6"
              type="submit"
              :disabled="loading"
              class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg"
            >
              {{ loading ? 'Submitting...' : 'Submit Application' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/api'

const router = useRouter()
const error = ref('')
const loading = ref(false)
const showForm = ref(false)
const currentStep = ref(1)

const form = ref({
  // Personal Info (Step 1)
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  
  // Verification (Step 2)
  photo: null,
  photoUrl: null,
  govtIdType: '',
  govtIdNumber: '',
  govtIdName: '',
  
  // Education (Step 3)
  qualification: '',
  experience: '',
  certificates: [],
  
  // Teaching Details (Step 4)
  subjects: [],
  classes: [],
  extraActivities: [],
  
  // Self Description (Step 5)
  description: '',
  teachingExperience: '',
  achievements: '',
  teachingApproach: '',
  
  // Location (Step 6)
  city: '',
  teachingAreas: [],
  termsAccepted: false,
  cameraError: ''
})

const nextStep = () => {
  if (currentStep.value < 6) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = async () => {
  try {
    if (form.value.password !== form.value.confirmPassword) {
      error.value = 'Passwords do not match'
      return
    }

    loading.value = true
    error.value = ''

    const userData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      userType: 'teacher',
      profile: {
        // Add all the form fields here
        // ...form.value
      }
    }

    const response = await authService.register(userData)
    
    localStorage.setItem('token', response.token)
    localStorage.setItem('userType', 'teacher')
    localStorage.setItem('userData', JSON.stringify(response.user))

    router.push({ name: 'TeacherDashboard' })
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}

const handlePhotoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    form.value.photo = file
    form.value.photoUrl = URL.createObjectURL(file)
  }
}

const handleCertificateUpload = (event) => {
  const files = Array.from(event.target.files)
  form.value.certificates = files
}

// Add these refs
const videoRef = ref(null)
const showCamera = ref(false)
let stream = null

// Updated camera methods
const startCamera = async () => {
  try {
    // Request both front and back cameras
    const constraints = {
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    }

    stream = await navigator.mediaDevices.getUserMedia(constraints)
    
    if (videoRef.value) {
      videoRef.value.srcObject = stream
      // Ensure video is loaded
      videoRef.value.onloadedmetadata = () => {
        videoRef.value.play()
      }
    }
    showCamera.value = true
  } catch (err) {
    console.error('Error accessing camera:', err)
    alert('Unable to access camera. Please ensure camera permissions are granted and your camera is connected.')
  }
}

const stopCamera = () => {
  if (stream) {
    const tracks = stream.getTracks()
    tracks.forEach(track => track.stop())
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
    // Set canvas size to match video dimensions
    canvas.width = videoRef.value.videoWidth
    canvas.height = videoRef.value.videoHeight
    
    const context = canvas.getContext('2d')
    // Flip horizontally if using front camera
    // context.scale(-1, 1)
    context.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height)
    
    // Convert to base64
    form.value.photoUrl = canvas.toDataURL('image/jpeg', 0.8)
    
    // Convert to Blob
    canvas.toBlob((blob) => {
      form.value.photo = blob
    }, 'image/jpeg', 0.8)
    
    stopCamera()
  } catch (error) {
    console.error('Error capturing photo:', error)
    alert('Error capturing photo. Please try again.')
  }
}

// Clean up on component unmount
onUnmounted(() => {
  stopCamera()
})
</script>
