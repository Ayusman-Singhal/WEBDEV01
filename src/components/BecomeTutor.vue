<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section (visible when form is hidden) -->
    <section v-if="!showApplicationForm" class="w-full py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Join Our Teaching Community
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Share your knowledge, inspire students, and earn on your own terms. Join thousands of tutors making a difference.
          </p>
          <button 
            @click="showApplicationForm = true"
            class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl 
                   text-lg font-medium hover:from-blue-600 hover:to-indigo-700 
                   transform hover:scale-105 transition-all duration-300">
            Start Your Application
          </button>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <!-- Benefit Cards -->
          <div v-for="(benefit, index) in benefits" 
               :key="index"
               class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <component :is="benefit.icon" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form (visible when showApplicationForm is true) -->
    <div v-else class="max-w-3xl mx-auto px-4 py-12">
      <!-- Form Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Tutor Application Form</h2>
        <p class="text-gray-600">Step {{ currentStep }} of {{ totalSteps }}</p>
        
        <!-- Progress Bar -->
        <div class="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div class="bg-blue-600 h-2 rounded-full transition-all duration-300"
               :style="{ width: `${(currentStep / totalSteps) * 100}%` }">
          </div>
        </div>
      </div>

      <!-- Form Content -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Step 1: Personal Information -->
          <div v-show="currentStep === 1" class="space-y-6">
            <div class="flex items-center space-x-2">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 class="text-2xl font-semibold text-gray-900">Personal Information</h3>
            </div>
            
            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input 
                  v-model="form.name"
                  type="text"
                  required
                  @blur="validateName"
                  :class="['w-full pl-10 pr-10 py-3 bg-white border rounded-lg focus:outline-none focus:ring-1 text-gray-900 placeholder-gray-400', nameError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500']" placeholder="Enter your full name">
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  <svg v-if="form.name && !nameError" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-if="nameError" class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p v-if="nameError" class="mt-1 text-sm text-red-500">{{ nameError }}</p>
            </div>

            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input 
                  v-model="form.email"
                  type="email"
                  required
                  @blur="validateEmail"
                  :class="[
                    'w-full pl-10 pr-10 py-3 bg-white border rounded-lg focus:outline-none focus:ring-1 text-gray-900 placeholder-gray-400',
                    emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  ]"
                  placeholder="Enter your email"
                >
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  <svg v-if="form.email && !emailError" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-if="emailError" class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p v-if="emailError" class="mt-1 text-sm text-red-500">{{ emailError }}</p>
            </div>

            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input 
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  @input="validatePassword"
                  :class="[
                    'w-full pl-10 pr-10 py-3 bg-white border rounded-lg focus:outline-none focus:ring-1 text-gray-900 placeholder-gray-400',
                    passwordError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  ]"
                  placeholder="Create a password"
                >
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                  <button 
                    type="button" 
                    @click="showPassword = !showPassword"
                    class="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                  <svg v-if="form.password && !passwordError" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-if="passwordError" class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p v-if="passwordError" class="mt-1 text-sm text-red-500">{{ passwordError }}</p>
            </div>
            
            <!-- Password strength indicator -->
            <div v-if="form.password" class="mt-2">
              <div class="flex items-center space-x-2">
                <div class="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    class="h-full transition-all duration-300"
                    :class="{
                      'w-1/4 bg-red-500': passwordStrength === 'weak',
                      'w-2/4 bg-yellow-500': passwordStrength === 'medium',
                      'w-3/4 bg-blue-500': passwordStrength === 'strong',
                      'w-full bg-green-500': passwordStrength === 'very-strong'
                    }"
                  ></div>
                </div>
                <span class="text-sm" :class="{
                  'text-red-500': passwordStrength === 'weak',
                  'text-yellow-500': passwordStrength === 'medium',
                  'text-blue-500': passwordStrength === 'strong',
                  'text-green-500': passwordStrength === 'very-strong'
                }">{{ passwordStrengthText }}</span>
              </div>
              <ul v-if="passwordRequirements.length" class="mt-2 space-y-1">
                <li v-for="(req, index) in passwordRequirements" 
                    :key="index" 
                    class="text-sm text-gray-500 flex items-center space-x-1">
                  <svg class="w-4 h-4" :class="req.met ? 'text-green-500' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ req.text }}</span>
                </li>
              </ul>
            </div>
            
            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input 
                  v-model="form.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  required
                  :class="[
                    'w-full pl-10 pr-10 py-3 bg-white border rounded-lg focus:outline-none focus:ring-1 text-gray-900 placeholder-gray-400',
                    passwordError && form.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  ]"
                  placeholder="Confirm your password"
                >
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                  <button 
                    type="button" 
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <svg v-if="showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                  <svg v-if="form.confirmPassword && form.confirmPassword === form.password" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-if="form.confirmPassword && form.confirmPassword !== form.password" class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p v-if="passwordError && form.confirmPassword" class="mt-1 text-sm text-red-500">{{ passwordError }}</p>
            </div>
          </div>

          <!-- Step 2: Verification -->
          <div v-show="currentStep === 2" class="space-y-6">
            <div class="flex items-center space-x-2 mb-6">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 class="text-2xl font-semibold text-gray-900">Verification</h3>
            </div>

            <!-- Government ID Type Selection -->
            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Government ID Type <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select 
                  v-model="form.govtIdType"
                  required
                  :class="[
                    'w-full pl-10 pr-10 py-3 bg-white border rounded-lg focus:outline-none focus:ring-1 text-gray-900',
                    idTypeError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  ]"
                >
                  <option value="">Select ID Type</option>
                  <option value="passport">Passport</option>
                  <option value="drivingLicense">Driving License</option>
                  <option value="nationalId">National ID</option>
                </select>
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  <svg v-if="form.govtIdType" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p v-if="idTypeError" class="mt-1 text-sm text-red-500">{{ idTypeError }}</p>
            </div>

            <!-- ID Number -->
            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                ID Number <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input 
                  v-model="form.govtIdNumber"
                  type="text"
                  required
                  :class="[
                    'w-full pl-10 pr-10 py-3 bg-white border rounded-lg focus:outline-none focus:ring-1 text-gray-900 placeholder-gray-400',
                    idNumberError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  ]"
                  placeholder="Enter your ID number"
                >
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  <svg v-if="form.govtIdNumber" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p v-if="idNumberError" class="mt-1 text-sm text-red-500">{{ idNumberError }}</p>
            </div>

            <!-- ID Photo Upload -->
            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                ID Photo <span class="text-red-500">*</span>
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                <div class="space-y-1 text-center">
                  <div v-if="!form.idPhotoUrl" class="flex flex-col items-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input 
                          type="file" 
                          class="sr-only" 
                          accept="image/*"
                          @change="handleIdPhotoUpload"
                        >
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <div v-else class="relative">
                    <img :src="form.idPhotoUrl" class="max-h-48 rounded-lg" alt="ID Preview">
                    <button 
                      @click="removeIdPhoto" 
                      class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p v-if="idPhotoError" class="mt-1 text-sm text-red-500">{{ idPhotoError }}</p>
            </div>

            <!-- Selfie Photo Section -->
            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Selfie Photo <span class="text-red-500">*</span>
              </label>
              
              <div class="flex flex-col items-center space-y-4">
                <!-- Camera Feed Box -->
                <div 
                  v-if="showCamera" 
                  class="w-64 h-64 border-2 border-blue-500 rounded-lg overflow-hidden bg-black"
                >
                  <video
                    ref="videoRef"
                    autoplay
                    playsinline
                    class="w-full h-full object-cover"
                  ></video>
                </div>

                <!-- Captured Photo Display -->
                <div 
                  v-else-if="form.selfieUrl" 
                  class="w-64 h-64 border-2 border-green-500 rounded-lg overflow-hidden"
                >
                  <img 
                    :src="form.selfieUrl" 
                    class="w-full h-full object-cover" 
                    alt="Captured photo"
                  />
                </div>

                <!-- Empty State -->
                <div 
                  v-else
                  class="w-64 h-64 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"
                >
                  <div class="text-center">
                    <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p class="text-gray-500">No photo captured</p>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex space-x-4">
                  <button
                    v-if="!showCamera && !form.selfieUrl"
                    @click="initializeCamera"
                    class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Take Photo
                  </button>

                  <template v-if="showCamera">
                    <button
                      @click="capturePhoto"
                      class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Capture
                    </button>
                    <button
                      @click="stopCamera"
                      class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </template>

                  <button
                    v-if="form.selfieUrl"
                    @click="retakePhoto"
                    class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Retake
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-6">
            <button
              type="button"
              @click="previousStep"
              class="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Previous
            </button>
            
            <button
              v-if="currentStep < totalSteps"
              @click="nextStep"
              type="button"
              :disabled="!isStep2Valid"
              :class="[
                'px-6 py-3 rounded-lg transition-colors',
                isStep2Valid 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted, onMounted } from 'vue'

// Form visibility state
const showApplicationForm = ref(false)
const currentStep = ref(1)
const totalSteps = 3 // Adjust based on your needs

// Benefits data
const benefits = [
  {
    title: 'Flexible Schedule',
    description: 'Choose your own hours and work when it suits you best.',
    icon: 'CalendarIcon' // You'll need to import these icons
  },
  {
    title: 'Competitive Earnings',
    description: 'Set your own rates and earn what you deserve.',
    icon: 'CurrencyDollarIcon'
  },
  {
    title: 'Growing Community',
    description: 'Join a supportive network of passionate educators.',
    icon: 'UserGroupIcon'
  }
]

// Form navigation methods
const nextStep = () => {
  if (currentStep.value === 1) {
    if (!isFormValid.value) {
      // Show all validation errors
      if (!form.value.name) nameError.value = 'Name is required'
      if (!form.value.email) emailError.value = 'Email is required'
      if (!form.value.password) passwordError.value = 'Password is required'
      if (form.value.password !== form.value.confirmPassword) {
        passwordError.value = 'Passwords do not match'
      }
      return
    }
  } else if (currentStep.value === 2) {
    if (!isStep2Valid.value) {
      // Show validation errors for step 2
      if (!form.value.govtIdType) idTypeError.value = 'Please select an ID type'
      if (!form.value.govtIdNumber) idNumberError.value = 'ID number is required'
      if (!form.value.idPhotoUrl) idPhotoError.value = 'Please upload your ID photo'
      if (!form.value.selfieUrl) selfieError.value = 'Please take a selfie photo'
      return
    }
  }
  
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const cancelApplication = () => {
  if (confirm('Are you sure you want to cancel your application?')) {
    showApplicationForm.value = false
    currentStep.value = 1
    // Reset form data here
  }
}

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted')
}

// Add form state
const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  govtIdType: '',
  govtIdNumber: '',
  idPhotoUrl: '',
  idPhoto: null,
  selfieUrl: '',
  selfie: null
})

// Add password visibility toggles
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Form validation state
const nameError = ref('')
const emailError = ref('')
const passwordError = ref('')
const idTypeError = ref('')
const idNumberError = ref('')
const idPhotoError = ref('')
const selfieError = ref('')
const debugInfo = ref('')
const videoRef = ref(null)
const showCamera = ref(false)
let stream = null

// Validation methods
const validateName = () => {
  if (!form.value.name) {
    nameError.value = 'Name is required'
    return false
  }
  if (form.value.name.length < 2) {
    nameError.value = 'Name must be at least 2 characters long'
    return false
  }
  if (!/^[a-zA-Z\s]*$/.test(form.value.name)) {
    nameError.value = 'Name can only contain letters and spaces'
    return false
  }
  nameError.value = ''
  return true
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.value.email) {
    emailError.value = 'Email is required'
    return false
  }
  if (!emailRegex.test(form.value.email)) {
    emailError.value = 'Please enter a valid email address'
    return false
  }
  emailError.value = ''
  return true
}

const validatePassword = () => {
  const password = form.value.password
  if (!password) {
    passwordError.value = 'Password is required'
    return false
  }
  
  // Reset error if password is being typed
  passwordError.value = ''
  return true
}

// Password strength computation
const passwordStrength = computed(() => {
  const password = form.value.password
  if (!password) return ''
  
  let strength = 0
  if (password.length >= 8) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++

  if (strength <= 2) return 'weak'
  if (strength === 3) return 'medium'
  if (strength === 4) return 'strong'
  return 'very-strong'
})

const passwordStrengthText = computed(() => {
  switch (passwordStrength.value) {
    case 'weak': return 'Weak'
    case 'medium': return 'Medium'
    case 'strong': return 'Strong'
    case 'very-strong': return 'Very Strong'
    default: return ''
  }
})

const passwordRequirements = computed(() => {
  const password = form.value.password
  return [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(password) },
    { text: 'Contains number', met: /[0-9]/.test(password) },
    { text: 'Contains special character', met: /[^A-Za-z0-9]/.test(password) }
  ]
})

// Watch for password confirmation
watch(() => form.value.confirmPassword, (newVal) => {
  if (newVal && newVal !== form.value.password) {
    passwordError.value = 'Passwords do not match'
  } else {
    passwordError.value = ''
  }
})

// Form validation state
const isFormValid = computed(() => {
  if (currentStep.value === 1) {
    return (
      form.value.name && 
      form.value.email && 
      form.value.password && 
      form.value.confirmPassword &&
      !nameError.value && 
      !emailError.value && 
      !passwordError.value &&
      form.value.password === form.value.confirmPassword &&
      passwordStrength.value !== 'weak' &&
      passwordStrength.value !== 'medium'
    )
  }
  return true
})

// Handle ID photo upload
const handleIdPhotoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 10 * 1024 * 1024) {
      idPhotoError.value = 'File size must be less than 10MB'
      return
    }
    form.value.idPhoto = file
    form.value.idPhotoUrl = URL.createObjectURL(file)
    idPhotoError.value = ''
  }
}

const removeIdPhoto = () => {
  form.value.idPhoto = null
  form.value.idPhotoUrl = ''
}

// Start camera function
const initializeCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ 
      video: true, 
      audio: false 
    })
    
    if (videoRef.value) {
      videoRef.value.srcObject = stream
    }
    showCamera.value = true
  } catch (error) {
    console.error('Error accessing camera:', error)
    alert('Unable to access camera. Please ensure camera permissions are granted.')
  }
}

const capturePhoto = () => {
  if (!videoRef.value) return

  // Create canvas and capture frame
  const canvas = document.createElement('canvas')
  canvas.width = videoRef.value.videoWidth
  canvas.height = videoRef.value.videoHeight
  
  const context = canvas.getContext('2d')
  context.drawImage(videoRef.value, 0, 0)
  
  // Convert to base64 and store
  form.value.selfieUrl = canvas.toDataURL('image/jpeg', 0.8)
  
  // Store in localStorage
  localStorage.setItem('tutorVerificationPhoto', form.value.selfieUrl)
  
  // Stop camera and reset state
  stopCamera()
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

const retakePhoto = () => {
  form.value.selfieUrl = null
  localStorage.removeItem('tutorVerificationPhoto')
  showCamera.value = true
  initializeCamera()
}

// Watch for camera show/hide
watch(() => showCamera.value, (newVal) => {
  if (newVal) {
    initializeCamera()
  } else {
    stopCamera()
  }
})

// Initialize photo from localStorage if available
onMounted(() => {
  const savedPhoto = localStorage.getItem('tutorVerificationPhoto')
  if (savedPhoto) {
    form.value.selfieUrl = savedPhoto
  }
})

// Clean up on unmount
onUnmounted(() => {
  stopCamera()
})

// Add validation computed property for Step 2
const isStep2Valid = computed(() => {
  if (currentStep.value !== 2) return true
  
  return (
    form.value.govtIdType && 
    form.value.govtIdNumber && 
    form.value.idPhotoUrl &&
    form.value.selfieUrl
  )
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>

