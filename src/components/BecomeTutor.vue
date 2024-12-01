<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Main Content (shown when form is hidden) -->
    <div v-if="!showApplicationForm" class="space-y-20">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
          Share Your Knowledge, Inspire Others
        </h1>
        <p class="text-xl text-blue-100/80 max-w-3xl mx-auto mb-8">
          Join our community of expert tutors and help students achieve their academic goals while building a rewarding career.
        </p>
        <button 
          @click="showApplicationForm = true"
          class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Apply Now
        </button>
      </div>

      <!-- Benefits Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="benefit-card group">
            <div class="icon-wrapper mb-4">
              <svg class="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Competitive Earnings</h3>
            <p class="text-blue-100/80">Set your own rates and earn competitive income while doing what you love.</p>
          </div>

          <div class="benefit-card group">
            <div class="icon-wrapper mb-4">
              <svg class="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Flexible Schedule</h3>
            <p class="text-blue-100/80">Choose your own hours and work from anywhere that suits you best.</p>
          </div>

          <div class="benefit-card group">
            <div class="icon-wrapper mb-4">
              <svg class="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Professional Growth</h3>
            <p class="text-blue-100/80">Access training resources and join a community of educators.</p>
          </div>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <h2 class="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3 class="text-lg font-semibold text-white mb-2">Apply</h3>
            <p class="text-blue-100/80">Submit your application and credentials for review.</p>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <h3 class="text-lg font-semibold text-white mb-2">Verify</h3>
            <p class="text-blue-100/80">Complete our verification process and background check.</p>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <h3 class="text-lg font-semibold text-white mb-2">Setup</h3>
            <p class="text-blue-100/80">Create your profile and set your availability.</p>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <h3 class="text-lg font-semibold text-white mb-2">Start</h3>
            <p class="text-blue-100/80">Begin accepting students and start teaching.</p>
          </div>
        </div>
      </div>

      <!-- Requirements Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="requirements-card">
          <h2 class="text-2xl font-bold text-white mb-6">Requirements</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="requirement-item">
              <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Bachelor's degree or higher</span>
            </div>
            <div class="requirement-item">
              <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Teaching experience</span>
            </div>
            <div class="requirement-item">
              <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Strong communication skills</span>
            </div>
            <div class="requirement-item">
              <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Reliable internet connection</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Start Teaching?</h2>
        <p class="text-xl text-blue-100/80 mb-8">
          Join thousands of tutors who are making a difference while doing what they love.
        </p>
        <button 
          @click="showApplicationForm = true"
          class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Start Your Application
        </button>
      </div>
    </div>

    <!-- Application Form (shown when main content is hidden) -->
    <div v-else class="max-w-3xl mx-auto">
      <!-- Form Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-4">
          Tutor Application
        </h2>
        <p class="text-blue-100/80">
          Fill out the form below to start your journey as a tutor
        </p>
      </div>

      <!-- Back Button -->
      <button 
        @click="showApplicationForm = false"
        class="mb-8 flex items-center text-blue-300 hover:text-white transition-colors duration-300"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Information
      </button>

      <!-- Application Form -->
      <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Personal Information -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input 
                type="text" 
                v-model="formData.fullName"
                required
                class="form-input"
                placeholder="Enter your full name"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                v-model="formData.email"
                required
                class="form-input"
                placeholder="Enter your email"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Phone</label>
              <input 
                type="tel" 
                v-model="formData.phone"
                required
                class="form-input"
                placeholder="Enter your phone number"
              >
            </div>
          </div>

          <!-- Professional Information -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Education Level</label>
              <select 
                v-model="formData.education"
                required
                class="form-input"
              >
                <option value="">Select education level</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Subject to Teach</label>
              <select 
                v-model="formData.subject"
                required
                class="form-input"
              >
                <option value="">Select subject</option>
                <option v-for="subject in subjects" :key="subject" :value="subject">
                  {{ subject }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Teaching Experience (years)</label>
              <input 
                type="number" 
                v-model="formData.experience"
                required
                min="0"
                class="form-input"
                placeholder="Years of teaching experience"
              >
            </div>
          </div>

          <!-- Availability -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Availability</label>
            <div class="grid grid-cols-2 gap-3">
              <label v-for="option in availabilityOptions" :key="option" class="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  :value="option" 
                  v-model="formData.availability"
                  class="form-checkbox"
                >
                <span class="text-gray-300">{{ option }}</span>
              </label>
            </div>
          </div>

          <!-- Resume Upload -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Resume/CV</label>
            <input 
              type="file" 
              @change="handleFileUpload"
              accept=".pdf,.doc,.docx"
              class="form-input file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-500/20 file:text-indigo-300 hover:file:bg-indigo-500/30"
            >
          </div>

          <!-- About -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">About You</label>
            <textarea 
              v-model="formData.about"
              rows="4"
              class="form-input"
              placeholder="Tell us about yourself and your teaching experience"
            ></textarea>
          </div>

          <!-- Form Actions -->
          <div class="flex items-center space-x-4">
            <button 
              type="button"
              @click="showApplicationForm = false"
              class="px-6 py-3 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
            >
              Cancel
            </button>
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/api'

const router = useRouter()
const error = ref('')
const loading = ref(false)

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  subjects: [],
  experience: '',
  location: '',
  bio: '',
  qualifications: '',
  teachingLevel: ''
})

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
        subjects: form.value.subjects,
        experience: form.value.experience,
        location: form.value.location,
        bio: form.value.bio,
        qualifications: form.value.qualifications,
        teachingLevel: form.value.teachingLevel
      }
    }

    const response = await authService.register(userData)
    
    // Store user data and token
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
</script>

<style scoped>
/* Add transition for content switching */
.min-h-screen > div {
  animation: fadeIn 0.5s ease-out;
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

.benefit-card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms;
}

.benefit-card:hover {
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.3);
}

.icon-wrapper {
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: inline-block;
  background-color: rgba(99, 102, 241, 0.2);
}

.step-card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  transition: all 300ms;
}

.step-card:hover {
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.3);
}

.step-number {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-image: linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
}

.requirements-card {
  padding: 2rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.requirement-item {
  display: flex;
  align-items: center;
  color: rgba(219, 234, 254, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
}

/* Animation for cards */
.benefit-card, .step-card {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
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
.benefit-card:nth-child(1) { animation-delay: 0.1s; }
.benefit-card:nth-child(2) { animation-delay: 0.2s; }
.benefit-card:nth-child(3) { animation-delay: 0.3s; }

.step-card:nth-child(1) { animation-delay: 0.4s; }
.step-card:nth-child(2) { animation-delay: 0.5s; }
.step-card:nth-child(3) { animation-delay: 0.6s; }
.step-card:nth-child(4) { animation-delay: 0.7s; }

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: white;
  transition: all 300ms;
}

.form-input:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.form-checkbox {
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  cursor: pointer;
}

.form-checkbox:checked {
  background-color: rgb(99, 102, 241);
  border-color: rgb(99, 102, 241);
}
</style>
