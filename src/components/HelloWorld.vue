<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
    <!-- Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Abstract shapes -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      
      <!-- Floating elements -->
      <div class="absolute top-20 right-20 animate-float-slow">
        <svg class="w-20 h-20 text-blue-300/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="8" fill="none"/>
        </svg>
      </div>
      <div class="absolute bottom-40 left-20 animate-float">
        <svg class="w-16 h-16 text-purple-300/20" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" stroke-width="8" fill="none"/>
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <!-- Hero Section -->
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-8 animate-fade-in">
          {{ msg }}
        </h1>
        
        <p class="text-xl sm:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto">
          Connect with expert tutors and unlock your learning potential. Join thousands of successful students.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <router-link to="/requestTutor" 
            class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-indigo-500/25">
            Find a Tutor
          </router-link>
          <router-link to="/becomeTutor"
            class="px-8 py-4 bg-transparent border-2 border-indigo-300/50 text-white rounded-lg font-semibold hover:bg-indigo-900/30 transform hover:scale-105 transition duration-300 backdrop-blur-sm">
            Become a Tutor
          </router-link>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="stat-card group">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg transform group-hover:scale-105 transition duration-300"></div>
            <h3 class="relative text-4xl font-bold text-blue-200 mb-2">500+</h3>
            <p class="relative text-blue-100/80">Expert Tutors</p>
          </div>
          <div class="stat-card group">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg transform group-hover:scale-105 transition duration-300"></div>
            <h3 class="relative text-4xl font-bold text-blue-200 mb-2">1000+</h3>
            <p class="relative text-blue-100/80">Happy Students</p>
          </div>
          <div class="stat-card group">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg transform group-hover:scale-105 transition duration-300"></div>
            <h3 class="relative text-4xl font-bold text-blue-200 mb-2">50+</h3>
            <p class="relative text-blue-100/80">Subjects</p>
          </div>
        </div>
      </div>

      <!-- Inquiry Button -->
      <button 
        @click="toggleInquiry" 
        class="fixed right-0 top-1/2 transform -translate-y-1/2 rotate-90 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300 font-semibold"
        style="margin-right: -35px;">
        Enquire Now
      </button>

      <!-- Inquiry Form -->
      <div v-if="showInquiry"
        class="fixed right-0 top-0 h-full w-96 bg-gradient-to-br from-gray-900/95 to-indigo-900/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-500 ease-in-out z-50 border-l border-indigo-500/30"
        :class="{ 'translate-x-0': showInquiry, 'translate-x-full': !showInquiry }">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">Quick Inquiry</h2>
            <button @click="toggleInquiry" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form @submit.prevent="submitInquiry" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" v-model="inquiryForm.name" class="form-input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" v-model="inquiryForm.email" class="form-input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Subject</label>
              <select v-model="inquiryForm.subject" class="form-input">
                <option value="">Select a subject</option>
                <option value="mathematics">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Message</label>
              <textarea v-model="inquiryForm.message" rows="4" class="form-input"></textarea>
            </div>
            <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: 'Transform Your Learning Journey'
  }
})

const showInquiry = ref(false)
const inquiryForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const toggleInquiry = () => {
  showInquiry.value = !showInquiry.value
}

const submitInquiry = () => {
  // Handle form submission
  console.log('Form submitted:', inquiryForm.value)
  // Reset form
  inquiryForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  showInquiry.value = false
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.stat-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateZ(0);
  transition: all 300ms;
}

.form-input {
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}
</style>
