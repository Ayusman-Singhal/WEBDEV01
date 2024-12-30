<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <section class="w-full py-24">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12">
        <!-- Left: Image -->
        <div class="relative">
          <div class="absolute -top-10 -left-10 w-20 h-20 text-emerald-500 animate-float">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <img 
            src="https://illustrations.popsy.co/amber/genius.svg" 
            alt="Teacher"
            class="w-full h-auto"
          />
        </div>
        
        <!-- Right: Text & Button -->
        <div class="flex flex-col justify-center">
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <p class="text-lg text-gray-700 leading-relaxed">
              Join our community of expert educators and shape the future of learning. Share your knowledge, inspire students, and grow your teaching career.
            </p>
          </div>
          <button 
            @click="showApplicationForm = true" 
            class="mt-6 become-tutor px-8 py-3 text-base">
            JOIN US
          </button>
        </div>
      </div>
    </section>

    <!-- Main Heading -->
    <div class="text-center py-12 relative">
      <div class="absolute right-1/4 top-0 text-blue-500/20 animate-float-slow">
        <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      </div>
      <h1 class="text-4xl font-bold mb-4">Join us to become<br>a star Teacher</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Transform lives through education while building your teaching career
      </p>
    </div>

    <!-- SVG Section -->
    <section class="border-y border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid grid-cols-3 gap-8">
          <div class="flex justify-center">
            <img 
              src="https://illustrations.popsy.co/amber/remote-work.svg" 
              alt="Remote Work"
              class="w-48 h-48"
            />
          </div>
          <div class="flex flex-col items-center justify-center text-center">
            <h2 class="text-2xl font-bold">A online<br>Teaching Platform</h2>
            <p class="mt-4 text-gray-600">Connect with students worldwide</p>
          </div>
          <div class="flex justify-center">
            <img 
              src="https://illustrations.popsy.co/teal/work-from-home.svg" 
              alt="Student"
              class="w-48 h-48"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Top Teachers Section -->
    <section class="py-16">
      <h2 class="text-2xl font-bold text-center mb-12">Top Teachers</h2>
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-4 gap-8">
          <div v-for="i in 4" :key="i" class="group">
            <div class="relative w-20 h-20 mx-auto">
              <img 
                :src="`https://i.pravatar.cc/300?img=${i+29}`"
                alt="Teacher"
                class="w-full h-full rounded-full object-cover border-2 border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-300"
              />
              <div class="absolute inset-0 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-all duration-300"></div>
            </div>
            <p class="mt-4 text-center font-medium">Sarah Johnson</p>
          </div>
        </div>
        <div class="text-center mt-12">
          <button 
            @click="router.push('/TopTeachers')" 
            class="view-all">
            View All
          </button>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="py-16 bg-gradient-to-b from-white to-gray-50">
      <h2 class="text-2xl font-bold text-center mb-12">Tutor Reviews</h2>
      <div class="max-w-3xl mx-auto px-4">
        <div class="bg-white rounded-2xl p-8 shadow-lg relative">
          <div class="absolute -top-4 -left-4">
            <svg class="w-8 h-8 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <p class="text-gray-700 text-lg mb-4">
            "Teaching on this platform has been an amazing experience. The students are eager to learn and the support system is excellent!"
          </p>
          <p class="text-right text-gray-600">- Professor Smith</p>
        </div>
      </div>
    </section>

    <!-- Bottom Buttons -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 flex justify-center gap-8">
        <button 
            @click="showApplicationForm = true" 
            class="mt-6 become-tutor px-8 py-3 text-base">Become a tutor</button>
        <button class="mt-6 become-tutor px-8 py-3 know-more">Know More</button>
      </div>
    </section>

    <!-- Application Form Modal -->
    <Transition name="modal">
      <div v-if="showApplicationForm">
        <!-- Blurred Overlay -->
        <div class="modal-overlay" @click="showApplicationForm = false"></div>
        
        <!-- Form Content -->
        <div class="application-form" @click.stop>
          <div class="form-container">
            <!-- Your existing form content -->
            <div class="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl">
              <!-- Form Header -->
              <div class="text-center p-8 border-b border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900">Tutor Application Form</h2>
                <p class="mt-2 text-gray-600">Step {{ currentStep }} of {{ totalSteps }}</p>
                
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

                  <!-- ID Photo/Document Upload -->
                  <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      ID Document <span class="text-red-500">*</span>
                      <span class="text-sm text-gray-500 ml-1">(PDF, PNG, JPG, JPEG up to 10MB)</span>
                    </label>
                    
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div class="space-y-1 text-center">
                        <!-- Upload Area -->
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
                                @change="handleIdPhotoUpload" 
                                accept=".pdf,.png,.jpg,.jpeg"
                              >
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                        </div>

                        <!-- Preview Area -->
                        <div v-else class="relative">
                          <!-- PDF Preview -->
                          <div v-if="isUploadedFilePDF" class="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
                            <svg class="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                            <span class="ml-2 text-sm text-gray-600">{{ uploadedFileName }}</span>
                          </div>
                          
                          <!-- Image Preview -->
                          <img 
                            v-else 
                            :src="form.idPhotoUrl" 
                            class="max-h-48 rounded-lg mx-auto"
                            alt="ID Preview"
                          >
                          
                          <!-- Remove Button -->
                          <button
                            @click="removeIdPhoto"
                            class="absolute top-0 right-0 -mt-2 -mr-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
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

                <!-- Step 3: Teaching Preferences -->
                <div v-show="currentStep === 3" class="space-y-6">
                  <div class="flex items-center space-x-2 mb-6">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h3 class="text-2xl font-semibold text-gray-900">Teaching Information</h3>
                  </div>

                  <!-- Subject Selection with Autocomplete -->
                  <div class="space-y-4">
                    <label class="block text-sm font-medium text-gray-700">
                      Subjects You Can Teach <span class="text-red-500">*</span>
                    </label>
                    
                    <!-- Search Input and Dropdown -->
                    <div class="relative">
                      <input
                        type="text"
                        v-model="subjectSearch"
                        @input="filterSubjects"
                        @focus="showSubjectDropdown = true"
                        placeholder="Type to search subjects..."
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      
                      <!-- Dropdown List -->
                      <div 
                        v-if="showSubjectDropdown && filteredSubjects.length > 0"
                        class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                      >
                        <div
                          v-for="subject in filteredSubjects"
                          :key="subject.id"
                          @click="addSubject(subject)"
                          class="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center justify-between"
                        >
                          <span>{{ subject.name }}</span>
                          <span v-if="isSubjectSelected(subject)" class="text-blue-500">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Selected Subjects Display -->
                    <div class="flex flex-wrap gap-2">
                      <div
                        v-for="subject in selectedSubjects"
                        :key="subject.id"
                        class="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1"
                      >
                        <span class="text-sm">{{ subject.name }}</span>
                        <button
                          @click="removeSubject(subject)"
                          class="ml-2 focus:outline-none"
                        >
                          <svg class="w-4 h-4 text-blue-600 hover:text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p v-if="subjectsError" class="mt-1 text-sm text-red-500">{{ subjectsError }}</p>
                  </div>

                  <!-- Education Level -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Education Level <span class="text-red-500">*</span>
                    </label>
                    <select
                      v-model="form.educationLevel"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Education Level</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="other">Other</option>
                    </select>
                    <p v-if="educationError" class="mt-1 text-sm text-red-500">{{ educationError }}</p>
                  </div>

                  <!-- Teaching Experience -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Teaching Experience <span class="text-red-500">*</span>
                    </label>
                    <select
                      v-model="form.teachingExperience"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">More than 5 years</option>
                    </select>
                    <p v-if="experienceError" class="mt-1 text-sm text-red-500">{{ experienceError }}</p>
                  </div>

                  <!-- Introduction -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Brief Introduction <span class="text-red-500">*</span>
                      <span class="text-sm text-gray-500">(This will be shown to students)</span>
                    </label>
                    <textarea
                      v-model="form.introduction"
                      rows="4"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Tell students about yourself and your teaching style..."
                    ></textarea>
                    <p class="text-sm text-gray-500">{{ form.introduction.length }}/500 characters</p>
                    <p v-if="introductionError" class="mt-1 text-sm text-red-500">{{ introductionError }}</p>
                  </div>

                  <!-- Hourly Rate -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Hourly Rate (USD) <span class="text-red-500">*</span>
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        v-model="form.hourlyRate"
                        min="5"
                        max="200"
                        class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0.00"
                      >
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">/hour</span>
                      </div>
                    </div>
                    <p v-if="rateError" class="mt-1 text-sm text-red-500">{{ rateError }}</p>
                  </div>
                </div>

                <!-- Step 4: Availability & Schedule -->
                <div v-show="currentStep === 4" class="space-y-6">
                  <div class="flex items-center space-x-2 mb-6">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 class="text-2xl font-semibold text-gray-900">Availability & Schedule</h3>
                  </div>

                  <!-- Time Zone Selection -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Your Time Zone <span class="text-red-500">*</span>
                    </label>
                    <select
                      v-model="form.timeZone"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Time Zone</option>
                      <option v-for="tz in timeZones" :key="tz.value" :value="tz.value">
                        {{ tz.label }}
                      </option>
                    </select>
                    <p v-if="timeZoneError" class="mt-1 text-sm text-red-500">{{ timeZoneError }}</p>
                  </div>

                  <!-- Enhanced Weekly Schedule -->
                  <div class="space-y-4">
                    <label class="block text-sm font-medium text-gray-700">
                      Weekly Availability <span class="text-red-500">*</span>
                    </label>
                    
                    <!-- Quick Selection Buttons -->
                    <div class="flex space-x-4 mb-4">
                      <button
                        @click="setWeekdayAvailability"
                        type="button"
                        class="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
                      >
                        Set Weekdays
                      </button>
                      <button
                        @click="setWeekendAvailability"
                        type="button"
                        class="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
                      >
                        Set Weekends
                      </button>
                      <button
                        @click="clearAvailability"
                        type="button"
                        class="px-4 py-2 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                      >
                        Clear All
                      </button>
                    </div>

                    <!-- Schedule Grid -->
                    <div class="grid gap-4 bg-white rounded-lg p-4 border border-gray-200">
                      <div v-for="day in weekDays" :key="day.value" 
                        class="flex items-center space-x-4 p-3 rounded-lg"
                        :class="form.availability[day.value].enabled ? 'bg-blue-50' : ''"
                      >
                        <div class="w-32">
                          <label class="inline-flex items-center">
                            <input
                              type="checkbox"
                              v-model="form.availability[day.value].enabled"
                              class="form-checkbox h-5 w-5 text-blue-600 rounded"
                            >
                            <span class="ml-2 text-sm font-medium text-gray-700">{{ day.label }}</span>
                          </label>
                        </div>
                        
                        <div v-if="form.availability[day.value].enabled" 
                          class="flex items-center space-x-2 transition-all duration-200"
                        >
                          <select
                            v-model="form.availability[day.value].start"
                            class="block w-28 pl-3 pr-10 py-2 text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                          >
                            <option v-for="time in timeSlots" :key="time" :value="time">
                              {{ formatTime(time) }}
                            </option>
                          </select>
                          <span class="text-gray-500">to</span>
                          <select
                            v-model="form.availability[day.value].end"
                            class="block w-28 pl-3 pr-10 py-2 text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                          >
                            <option v-for="time in getEndTimeSlots(form.availability[day.value].start)" 
                              :key="time" 
                              :value="time"
                            >
                              {{ formatTime(time) }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <p v-if="availabilityError" class="mt-1 text-sm text-red-500">{{ availabilityError }}</p>
                  </div>

                  <!-- Teaching Preferences -->
                  <div class="space-y-4">
                    <label class="block text-sm font-medium text-gray-700">
                      Teaching Preferences
                    </label>
                    <div class="space-y-2">
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          v-model="form.preferences.groupClasses"
                          class="form-checkbox h-4 w-4 text-blue-600"
                        >
                        <span class="ml-2 text-sm text-gray-700">Available for group classes</span>
                      </label>
                      
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          v-model="form.preferences.instantBooking"
                          class="form-checkbox h-4 w-4 text-blue-600"
                        >
                        <span class="ml-2 text-sm text-gray-700">Allow instant booking</span>
                      </label>
                      
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          v-model="form.preferences.longTermStudents"
                          class="form-checkbox h-4 w-4 text-blue-600"
                        >
                        <span class="ml-2 text-sm text-gray-700">Prefer long-term students</span>
                      </label>
                    </div>
                  </div>

                  <!-- Notice Period -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Booking Notice Period <span class="text-red-500">*</span>
                    </label>
                    <select
                      v-model="form.noticePeriod"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Notice Period</option>
                      <option value="0">No notice needed</option>
                      <option value="1">1 hour</option>
                      <option value="3">3 hours</option>
                      <option value="6">6 hours</option>
                      <option value="12">12 hours</option>
                      <option value="24">24 hours</option>
                    </select>
                    <p v-if="noticePeriodError" class="mt-1 text-sm text-red-500">{{ noticePeriodError }}</p>
                  </div>
                </div>

                <!-- Step 5: Final Review & Submit -->
                <div v-show="currentStep === 5" class="space-y-6">
                  <div class="flex items-center space-x-2 mb-6">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 class="text-2xl font-semibold text-gray-900">Review & Submit</h3>
                  </div>

                  <!-- Review Sections -->
                  <div class="space-y-8">
                    <!-- Personal Information -->
                    <div class="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 class="text-lg font-medium text-gray-900 mb-4">Personal Information</h4>
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <p class="text-sm text-gray-500">Name</p>
                          <p class="text-sm font-medium">{{ form.name }}</p>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500">Email</p>
                          <p class="text-sm font-medium">{{ form.email }}</p>
                        </div>
                      </div>
                    </div>

                    <!-- ID Verification -->
                    <div class="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 class="text-lg font-medium text-gray-900 mb-4">ID Verification</h4>
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <p class="text-sm text-gray-500">ID Type</p>
                          <p class="text-sm font-medium">{{ form.govtIdType }}</p>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500">ID Number</p>
                          <p class="text-sm font-medium">{{ form.govtIdNumber }}</p>
                        </div>
                      </div>
                      <div class="mt-4 flex space-x-4">
                        <div v-if="form.idPhotoUrl" class="w-32">
                          <p class="text-sm text-gray-500 mb-2">ID Photo</p>
                          <div class="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
                            <img 
                              v-if="!isUploadedFilePDF" 
                              :src="form.idPhotoUrl" 
                              class="h-full w-full object-cover"
                              alt="ID Photo"
                            >
                            <div v-else class="flex items-center justify-center h-full">
                              <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div v-if="form.selfieUrl" class="w-32">
                          <p class="text-sm text-gray-500 mb-2">Selfie Photo</p>
                          <div class="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
                            <img 
                              :src="form.selfieUrl" 
                              class="h-full w-full object-cover"
                              alt="Selfie Photo"
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Teaching Profile -->
                    <div class="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 class="text-lg font-medium text-gray-900 mb-4">Teaching Profile</h4>
                      <div class="space-y-4">
                        <div>
                          <p class="text-sm text-gray-500">Subjects</p>
                          <div class="flex flex-wrap gap-2 mt-1">
                            <span 
                              v-for="subject in selectedSubjects" 
                              :key="subject.id"
                              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {{ subject.name }}
                            </span>
                          </div>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500">Education Level</p>
                          <p class="text-sm font-medium">{{ form.educationLevel }}</p>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500">Teaching Experience</p>
                          <p class="text-sm font-medium">{{ form.teachingExperience }}</p>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500">Hourly Rate</p>
                          <p class="text-sm font-medium">${{ form.hourlyRate }}/hour</p>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500">Introduction</p>
                          <p class="text-sm">{{ form.introduction }}</p>
                        </div>
                      </div>
                    </div>

                    <!-- Availability -->
                    <div class="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 class="text-lg font-medium text-gray-900 mb-4">Availability</h4>
                      <div class="space-y-4">
                        <div>
                          <p class="text-sm text-gray-500">Time Zone</p>
                          <p class="text-sm font-medium">{{ form.timeZone }}</p>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500 mb-2">Weekly Schedule</p>
                          <div class="space-y-2">
                            <div 
                              v-for="day in weekDays" 
                              :key="day.value"
                              v-show="form.availability[day.value].enabled"
                              class="flex items-center space-x-2"
                            >
                              <span class="text-sm font-medium w-24">{{ day.label }}:</span>
                              <span class="text-sm">
                                {{ formatTime(form.availability[day.value].start) }} - 
                                {{ formatTime(form.availability[day.value].end) }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p class="text-sm text-gray-500">Notice Period</p>
                          <p class="text-sm font-medium">
                            {{ form.noticePeriod === '0' ? 'No notice needed' : `${form.noticePeriod} hours` }}
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- Terms and Conditions -->
                    <div class="space-y-4">
                      <label class="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          v-model="form.termsAccepted"
                          class="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        >
                        <span class="text-sm text-gray-600">
                          I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms and Conditions</a> and 
                          <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                        </span>
                      </label>
                      <p v-if="termsError" class="text-sm text-red-500">{{ termsError }}</p>
                    </div>
                  </div>
                </div>

                <!-- Form Footer -->
                <div class="px-8 py-4 bg-gray-50 rounded-b-xl border-t border-gray-200">
                  <div class="flex justify-between items-center">
                    <button 
                      @click="showApplicationForm = false"
                      class="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors">
                      Close
                    </button>
                    
                    <div class="flex gap-4"> <!-- Added container for Previous/Next buttons -->
                      <button
                        v-if="currentStep > 1"
                        @click="previousStep"
                        type="button"
                        class="px-6 py-3 text-sm font-medium border border-gray-300 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        Previous
                      </button>
                      
                      <template v-if="currentStep === totalSteps">
                        <!-- Submit Button for Final Step -->
                        <button
                          @click="handleSubmit"
                          type="button"
                          :disabled="!isStep5Valid || isSubmitting"
                          class="px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                          :class="[
                            isStep5Valid && !isSubmitting
                              ? 'bg-green-600 text-white hover:bg-green-700' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          ]"
                        >
                          <span v-if="isSubmitting">
                            Submitting...
                          </span>
                          <span v-else>
                            Submit Application
                          </span>
                        </button>
                      </template>
                      
                      <template v-else>
                        <!-- Next Button for Other Steps -->
                        <button
                          @click="nextStep"
                          type="button"
                          :disabled="!isFormValid"
                          class="px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                          :class="[
                            isFormValid 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          ]"
                        >
                          Next
                        </button>
                      </template>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Transition>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center z-50">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <div class="text-center">
          <!-- Success Icon -->
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <!-- Success Message -->
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Application Submitted Successfully!
          </h3>
          <p class="text-sm text-gray-500 mb-6">
            Thank you for applying to become a tutor. We will review your application and send you further details within 3-5 business days.
          </p>
          
          <!-- Return to Home Button -->
          <button
            @click="returnToHome"
            class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="bg-gray-900 text-white max-w-full border-t border-white/10">
    <!-- Tutoring Categories Section -->
  <div class="max-w-full p-12 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10">
    <h2 class="text-4xl font-bold text-center mb-12">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Find </span>
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-500">Tutors</span>
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200"> Near You</span>
    </h2>
    <!-- Separator Line -->
    <div class="relative my-12">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full flex-center border-t border-white/10"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-4 bg-gradient-to-b from-white/10 to-white/5 text-sm text-blue-300"></span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <!-- Column 1 -->
      <div>
        <a @click="handleNavigation('academics-home-tuition')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Academics Home Tuition</a>
        <a @click="handleNavigation('accounts-tuition')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Accounts Tuition</a>
        <a @click="handleNavigation('bollywood-dance')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Bollywood Dance Classes</a>
        <a @click="handleNavigation('chemistry')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Chemistry Tuition</a>
        <a @click="handleNavigation('dance')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Dance Classes</a>
        <a @click="handleNavigation('economics')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Economics Coaching</a>
      </div>
      <!-- Column 2 -->
      <div>
        <a @click="handleNavigation('english')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">English Coaching</a>
        <a @click="handleNavigation('flute')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Flute Classes</a>
        <a @click="handleNavigation('french')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">French Classes</a>
        <a @click="handleNavigation('guitar')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Guitar Lessons</a>
        <a @click="handleNavigation('hobby')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Hobby Classes</a>
        <a @click="handleNavigation('ajmer')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Ajmer</a>
      </div>
      <!-- Column 3 -->
      <div>
        <a @click="handleNavigation('ahmedabad')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Ahmedabad</a>
        <a @click="handleNavigation('chandigarh')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Chandigarh</a>
        <a @click="handleNavigation('delhi')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Delhi</a>
        <a @click="handleNavigation('jaipur')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Jaipur</a>
        <a @click="handleNavigation('kota')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Kota</a>
        <a @click="handleNavigation('jodhpur')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Jodhpur</a>
      </div>
      <!-- Column 4 -->
      <div>
        <a @click="handleNavigation('mumbai')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Mumbai</a>
        <a @click="handleNavigation('udaipur')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Home Tuition in Udaipur</a>
        <a @click="handleNavigation('japanese')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Japanese Classes</a>
        <a @click="handleNavigation('martial-arts')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Martial Arts Classes</a>
        <a @click="handleNavigation('maths')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Maths Tuition</a>
        <a @click="handleNavigation('music')" class="text-blue-300 hover:text-blue-200 block mb-3 cursor-pointer">Music Classes</a>
      </div>
      <!-- Footer - Add after Column 4 -->
<div class="space-y-4">
  <h3 class="text-lg font-semibold text-white flex items-center gap-2">
    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
    Share Your Experience
  </h3>
  <p class="text-blue-100/80 text-sm leading-relaxed mb-4">
    Help us improve by sharing your learning journey with TutorVue. Your feedback matters!
  </p>
  <a href="https://forms.gle/QCohMjxFrqyAr7Lc6" 
     target="_blank"
     class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 
            text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 
            transform hover:scale-105 transition-all duration-300 group">
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
    Write a Review
    <span class="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
    
    <!-- Floating Badge -->
    <div class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
      New
    </div>
  </a>
</div>
    </div>

    <!-- Separator Line -->
    <div class="relative my-12">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-white/10"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-4 bg-gradient-to-b from-white/10 to-white/5 text-sm text-blue-300"></span>
      </div>
    </div>

    <!-- Additional Categories -->
    <div class="mt-12">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        <!-- Cities Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            Cities
          </h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="city in ['Jaipur', 'Jodhpur', 'Udaipur', 'Pali', 'Kota', 'Mumbai', 'Ahmedabad']" 
               @click="handleCityNavigation(city.toLowerCase())"
               class="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full text-blue-300 hover:text-blue-200 cursor-pointer transition-all">
              {{city}}
            </a>
          </div>
        </div>

        <!-- Categories Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            Categories
          </h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="category in ['Academics', 'Yoga', 'Music', 'Hobbies', 'Computer/IT']"
               @click="handleCategoryNavigation(category.toLowerCase())"
               class="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full text-blue-300 hover:text-blue-200 cursor-pointer transition-all">
              {{category}}
            </a>
          </div>
        </div>

        <!-- Classes Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            Classes
          </h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="classNum in ['1st', '2nd', '3rd', '4th', '5th', '10th', '11th']"
               @click="handleClassNavigation(classNum)"
               class="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full text-blue-300 hover:text-blue-200 cursor-pointer transition-all">
              Class {{classNum}}
            </a>
          </div>
        </div>

        <!-- Subjects Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            Subjects
          </h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="subject in ['Maths', 'English', 'Science', 'Hindi', 'Sanskrit', 'Physics']"
               @click="handleSubjectNavigation(subject.toLowerCase())"
               class="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full text-blue-300 hover:text-blue-200 cursor-pointer transition-all">
              {{subject}}
            </a>
          </div>
        </div>

        <!-- Competitive Exams Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Competitive Exams
          </h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="exam in ['JEE', 'NEET', 'SSC', 'BANK', 'NDA', 'CAT', 'IPMAT', 'GATE']"
               @click="handleSubjectNavigation(exam.toLowerCase())"
               class="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full text-blue-300 hover:text-blue-200 cursor-pointer transition-all">
              {{exam}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Separator Line -->
    <div class="relative my-12">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-white/10"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-4 bg-gradient-to-b from-white/10 to-white/5 text-sm text-blue-300"></span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">About Us</h3>
          <p class="text-blue-100/80 text-sm leading-relaxed mb-4">
            TutorVue is dedicated to connecting students with exceptional tutors, making quality education accessible to everyone.
          </p>
          <div class="flex space-x-4">
            <a href="https://linkedin.com/company/tutorvue" 
               target="_blank"
               class="text-blue-300 hover:text-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://instagram.com/tutorvue" 
               target="_blank"
               class="text-blue-300 hover:text-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.689-.073 4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com/tutorvue" 
               target="_blank"
               class="text-blue-300 hover:text-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/about" class="text-blue-100/80 hover:text-white transition-colors">About Us</a></li>
            <li><a href="/careers" class="text-blue-100/80 hover:text-white transition-colors">Careers</a></li>
            <li><a href="/blog" class="text-blue-100/80 hover:text-white transition-colors">Blog</a></li>
            <li><a href="/privacy" class="text-blue-100/80 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" class="text-blue-100/80 hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Contact Info</h3>
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-blue-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-blue-100/80">
                TutorVue Education Pvt. Ltd.<br/>
                123 Learning Street, Knowledge Park<br/>
                Mumbai, Maharashtra - 400001
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="text-blue-100/80">+91 98765 43210</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-blue-100/80">contact@tutorvue.com</span>
            </li>
          </ul>
        </div>

        <!-- Contact Form -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Get in Touch</h3>
          <form class="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Your email" 
                class="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-blue-100/50"
              >
            </div>
            <div>
              <textarea 
                placeholder="Your message" 
                rows="3" 
                class="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-blue-100/50"
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <!-- Copyright -->
  <div class="max-w-full pt-10 border-t border-white/10 text-center">
        <p class="text-blue-100/60 text-sm">
          © 2024 TutorVue Education Pvt. Ltd. All rights reserved.
        </p>
      </div>
  </div>
  </footer>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Form visibility state
const showApplicationForm = ref(false)
const currentStep = ref(1)
const totalSteps = 5 // Adjust based on your needs

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
  } else if (currentStep.value === 3) {
    if (!isStep3Valid.value) {
      if (form.value.subjects.length === 0) subjectsError.value = 'Please select at least one subject'
      if (!form.value.educationLevel) educationError.value = 'Please select your education level'
      if (!form.value.teachingExperience) experienceError.value = 'Please select your teaching experience'
      if (!form.value.introduction) introductionError.value = 'Please provide an introduction'
      if (form.value.introduction.length > 500) introductionError.value = 'Introduction must be 500 characters or less'
      if (!form.value.hourlyRate) rateError.value = 'Please set your hourly rate'
      if (form.value.hourlyRate < 5 || form.value.hourlyRate > 200) {
        rateError.value = 'Hourly rate must be between $5 and $200'
      }
      return
    }
  } else if (currentStep.value === 4) {
    if (!isStep4Valid.value) {
      if (!form.value.timeZone) {
        timeZoneError.value = 'Please select your time zone'
      }
      if (!Object.values(form.value.availability).some(day => day.enabled)) {
        availabilityError.value = 'Please select at least one day of availability'
      }
      if (!Object.values(form.value.availability).every(day => !day.enabled || (day.end > day.start))) {
        availabilityError.value = 'End time must be after start time'
      }
      if (!form.value.noticePeriod) {
        noticePeriodError.value = 'Please select a notice period'
      }
      return
    }
  } else if (currentStep.value === 5) {
    if (!isStep5Valid.value) {
      termsError.value = 'Please accept the terms and conditions'
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
  selfie: null,
  subjects: [],
  educationLevel: '',
  teachingExperience: '',
  introduction: '',
  hourlyRate: null,
  timeZone: '',
  availability: {
    monday: { enabled: false, start: '09:00', end: '17:00' },
    tuesday: { enabled: false, start: '09:00', end: '17:00' },
    wednesday: { enabled: false, start: '09:00', end: '17:00' },
    thursday: { enabled: false, start: '09:00', end: '17:00' },
    friday: { enabled: false, start: '09:00', end: '17:00' },
    saturday: { enabled: false, start: '09:00', end: '17:00' },
    sunday: { enabled: false, start: '09:00', end: '17:00' }
  },
  preferences: {
    groupClasses: false,
    instantBooking: false,
    longTermStudents: false
  },
  noticePeriod: '',
  termsAccepted: false
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

// Add new refs
const uploadedFileName = ref('')
const isUploadedFilePDF = ref(false)

// Updated file upload handler
const handleIdPhotoUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']
  if (!allowedTypes.includes(file.type)) {
    idPhotoError.value = 'Please upload a PDF, PNG, or JPG file'
    return
  }

  // Validate file size (10MB)
  if (file.size > 10 * 1024 * 1024) {
    idPhotoError.value = 'File size must be less than 10MB'
    return
  }

  // Store file name and type
  uploadedFileName.value = file.name
  isUploadedFilePDF.value = file.type === 'application/pdf'

  // Handle PDF files
  if (file.type === 'application/pdf') {
    // Store the file object directly
    form.value.idPhoto = file
    form.value.idPhotoUrl = 'pdf' // Use this to indicate a PDF is uploaded
  } else {
    // Handle images as before
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.idPhotoUrl = e.target.result
      form.value.idPhoto = file
    }
    reader.readAsDataURL(file)
  }

  idPhotoError.value = ''
}

// Updated remove function
const removeIdPhoto = () => {
  form.value.idPhoto = null
  form.value.idPhotoUrl = ''
  uploadedFileName.value = ''
  isUploadedFilePDF.value = false
}

// Add drag and drop handlers
const handleDragOver = (event) => {
  event.preventDefault()
  event.currentTarget.classList.add('border-blue-500')
}

const handleDragLeave = (event) => {
  event.currentTarget.classList.remove('border-blue-500')
}

const handleDrop = (event) => {
  event.preventDefault()
  event.currentTarget.classList.remove('border-blue-500')
  
  const file = event.dataTransfer.files[0]
  if (file) {
    // Create a new file input event
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file)
    const event = {
      target: {
        files: dataTransfer.files
      }
    }
    handleIdPhotoUpload(event)
  }
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

// Add new refs for Step 3
const subjectsError = ref('')
const educationError = ref('')
const experienceError = ref('')
const introductionError = ref('')
const rateError = ref('')

// Enhanced subjects data
const allSubjects = [
  { id: 'math', name: 'Mathematics' },
  { id: 'physics', name: 'Physics' },
  { id: 'chemistry', name: 'Chemistry' },
  { id: 'biology', name: 'Biology' },
  { id: 'english', name: 'English' },
  { id: 'history', name: 'History' },
  { id: 'programming', name: 'Programming' },
  { id: 'music', name: 'Music' },
  { id: 'art', name: 'Art' },
  { id: 'phys-ed', name: 'Physical Education' },
  { id: 'psychology', name: 'Psychology' },
  { id: 'philosophy', name: 'Philosophy' },
  // Add more subjects as needed
]

// New refs for subject selection
const subjectSearch = ref('')
const showSubjectDropdown = ref(false)
const filteredSubjects = ref([])
const selectedSubjects = ref([])

// Filter subjects based on search input
const filterSubjects = () => {
  const search = subjectSearch.value.toLowerCase()
  filteredSubjects.value = allSubjects.filter(subject => 
    subject.name.toLowerCase().includes(search) &&
    !isSubjectSelected(subject)
  )
}

// Check if subject is already selected
const isSubjectSelected = (subject) => {
  return form.value.subjects.includes(subject.id)
}

// Add subject to selection
const addSubject = (subject) => {
  if (!isSubjectSelected(subject)) {
    form.value.subjects.push(subject.id)
    selectedSubjects.value.push(subject)
    subjectSearch.value = ''
    filteredSubjects.value = []
    subjectsError.value = ''
  }
}

// Remove subject from selection
const removeSubject = (subject) => {
  const index = form.value.subjects.indexOf(subject.id)
  if (index > -1) {
    form.value.subjects.splice(index, 1)
    selectedSubjects.value = selectedSubjects.value.filter(s => s.id !== subject.id)
  }
}

// Initialize selected subjects from form data
onMounted(() => {
  if (form.value.subjects.length > 0) {
    selectedSubjects.value = allSubjects.filter(subject => 
      form.value.subjects.includes(subject.id)
    )
  }
})

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target
    if (!target.closest('.subject-search')) {
      showSubjectDropdown.value = false
    }
  })
})

// Watch for subject search changes
watch(subjectSearch, (newValue) => {
  if (newValue) {
    filterSubjects()
    showSubjectDropdown.value = true
  } else {
    filteredSubjects.value = []
  }
})

// Update form validation to use selectedSubjects
const isStep3Valid = computed(() => {
  if (currentStep.value !== 3) return true
  
  return (
    selectedSubjects.value.length > 0 &&
    form.value.educationLevel &&
    form.value.teachingExperience &&
    form.value.introduction &&
    form.value.introduction.length <= 500 &&
    form.value.hourlyRate &&
    form.value.hourlyRate >= 5 &&
    form.value.hourlyRate <= 200
  )
})

// Clear errors when fields are updated
watch(() => form.value.subjects, () => subjectsError.value = '')
watch(() => form.value.educationLevel, () => educationError.value = '')
watch(() => form.value.teachingExperience, () => experienceError.value = '')
watch(() => form.value.introduction, () => introductionError.value = '')
watch(() => form.value.hourlyRate, () => rateError.value = '')

// Add new refs for Step 4
const timeZoneError = ref('')
const availabilityError = ref('')
const noticePeriodError = ref('')

// Time zones data (simplified list - you might want to use a complete timezone library)
const timeZones = [
  { value: 'UTC-12:00', label: '(GMT-12:00) International Date Line West' },
  { value: 'UTC-11:00', label: '(GMT-11:00) Midway Island, Samoa' },
  // Add more time zones...
  { value: 'UTC+00:00', label: '(GMT+00:00) London, Dublin, Edinburgh' },
  { value: 'UTC+01:00', label: '(GMT+01:00) Paris, Berlin, Rome' },
  // Add more time zones...
]

// Week days
const weekDays = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' }
]

// Time slots (24-hour format)
const timeSlots = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2)
  const minute = i % 2 === 0 ? '00' : '30'
  return `${hour.toString().padStart(2, '0')}:${minute}`
})

// Helper function to format time
const formatTime = (time) => {
  const [hours, minutes] = time.split(':')
  const period = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12
  return `${formattedHours}:${minutes} ${period}`
}

// Get valid end time slots based on start time
const getEndTimeSlots = (startTime) => {
  const startIndex = timeSlots.indexOf(startTime)
  return timeSlots.slice(startIndex + 1)
}

// Quick selection functions
const setWeekdayAvailability = () => {
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].forEach(day => {
    form.value.availability[day] = {
      enabled: true,
      start: '09:00',
      end: '17:00'
    }
  })
}

const setWeekendAvailability = () => {
  ['saturday', 'sunday'].forEach(day => {
    form.value.availability[day] = {
      enabled: true,
      start: '10:00',
      end: '16:00'
    }
  })
}

const clearAvailability = () => {
  weekDays.forEach(day => {
    form.value.availability[day.value] = {
      enabled: false,
      start: '09:00',
      end: '17:00'
    }
  })
}

// Enhanced validation for Step 4
const isStep4Valid = computed(() => {
  if (currentStep.value !== 4) return true
  
  const hasAvailability = Object.values(form.value.availability)
    .some(day => day.enabled)
  
  const hasValidTimes = Object.values(form.value.availability)
    .every(day => !day.enabled || (day.end > day.start))
  
  return (
    form.value.timeZone &&
    hasAvailability &&
    hasValidTimes &&
    form.value.noticePeriod !== ''
  )
})

// Clear errors when fields are updated
watch(() => form.value.timeZone, () => timeZoneError.value = '')
watch(() => form.value.availability, () => availabilityError.value = '', { deep: true })
watch(() => form.value.noticePeriod, () => noticePeriodError.value = '')

// Add new refs for Step 5
const termsError = ref('')
const isSubmitting = ref(false)

// Add validation for Step 5
const isStep5Valid = computed(() => {
  if (currentStep.value !== 5) return true
  return form.value.termsAccepted
})

// Add form submission handler
const handleSubmit = async () => {
  if (!isStep5Valid.value) {
    termsError.value = 'Please accept the terms and conditions'
    return
  }

  try {
    isSubmitting.value = true
    // Add your API call here
    // await submitTutorApplication(form.value)
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success modal
    showSuccessModal.value = true
    
  } catch (error) {
    console.error('Error submitting application:', error)
    // Handle error
  } finally {
    isSubmitting.value = false
  }
}

// Clear terms error when checkbox is changed
watch(() => form.value.termsAccepted, () => {
  termsError.value = ''
})

// Add new refs
const showSuccessModal = ref(false)
const router = useRouter() // Make sure to import useRouter from vue-router

// Add return to home function
const returnToHome = () => {
  router.push('/') // Navigate to home page
}
</script>

<style scoped>
/* Base Layout */
.min-h-screen {
  background: linear-gradient(to bottom right, rgb(249, 250, 251), rgb(243, 244, 246));
}

/* Hero Section */
section {
  position: relative;
  overflow: hidden;
}

/* SVG Container Enhancement */
.aspect-square {
  position: relative;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  transition: transform 0.3s ease;
}

.aspect-square:hover {
  transform: translateY(-5px);
}

.aspect-square svg {
  animation: float 6s ease-in-out infinite;
}

/* Text Container */
.bg-gray-100 {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.3);
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(75px);
  z-index: 40;
  transition: all 0.3s ease;
}

/* Application Form Container */
.application-form {
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  margin-top: 64px;
}

.form-container {
  position: relative;
  width: 100%;
  max-width: 48rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 2rem;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .form-container,
.modal-leave-to .form-container {
  transform: translateY(20px);
  opacity: 0;
}

/* Teacher Cards */
.aspect-square.bg-gray-100 {
  transition: all 0.3s ease;
}

.aspect-square.bg-gray-100:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Review Section */
.bg-gray-100.rounded-lg {
  background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.bg-gray-100.rounded-lg:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Section Headings */
h1, h2 {
  background: linear-gradient(to right, #111827, #374151);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Form Steps */
.step-container {
  gap: 1.5rem;
  padding: 2rem;
}

/* Progress Indicator */
.progress-bar {
  height: 0.5rem;
  background-color: rgb(229, 231, 235);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: rgb(37, 99, 235);
  transition: all 0.3s ease-in-out;
}

/* Form Elements */
.form-group {
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(55, 65, 81);
}

.form-input {
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgb(209, 213, 219);
  transition: colors 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: rgb(59, 130, 246);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
}

.form-select {
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.375rem;
}

.form-select:focus {
  outline: none;
  border-color: rgb(59, 130, 246);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
}

/* Buttons */
.btn-primary {
  padding: 0.75rem 1.5rem;
  background-color: rgb(37, 99, 235);
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: rgb(29, 78, 216);
}

.btn-primary:disabled {
  background-color: rgb(209, 213, 219);
  cursor: not-allowed;
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  color: rgb(55, 65, 81);
  transition: color 0.2s;
}

.btn-secondary:hover {
  color: rgb(17, 24, 39);
}

/* Error Messages */
.error-text {
  font-size: 0.875rem;
  color: rgb(239, 68, 68);
  margin-top: 0.25rem;
}

/* File Upload Area */
.upload-area {
  margin-top: 0.25rem;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  border: 2px dashed rgb(209, 213, 219);
  border-radius: 0.375rem;
  transition: border-color 0.2s;
}

.upload-area:hover {
  border-color: rgb(59, 130, 246);
}

/* Focus styles for better accessibility */
:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgb(59, 130, 246), 0 0 0 4px white;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  
  .step-container {
    padding: 1rem;
  }
}

/* Remove unnecessary styles */
.rounded-blob,
.animate-float,
.writing-vertical,
.border-coral,
.text-coral,
.bg-coral-light {
  display: none;
}

/* Button Styling - Main Page Only */
.min-h-screen > section button:not(.form-container button) {
  transition: all 0.3s ease;
  background: linear-gradient(to right, #10B981, #059669);
  color: white;
  border: none;
  border-radius: 9999px; /* Makes buttons fully rounded */
  padding: 0.75rem 2rem; /* Adjusted padding for rounded buttons */
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
}

.min-h-screen > section button:not(.form-container button):hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.3);
}

/* Adjusted Button Styling */
button.become-tutor {
  width: fit-content; /* Instead of full width */
  align-self: center; /* Center the button */
  font-size: 1rem; /* Smaller font size */
  padding: 0.75rem 2rem; /* Reduced padding */
  background: linear-gradient(to right, #10B981, #059669);
  color: white;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
}

button.become-tutor:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.3);
}

/* View All Button Specific Style */
button[class*="view-all"] {
  border-radius: 9999px !important;
  padding: 0.75rem 2.5rem !important;
}

/* Know More Button Specific Style */
button[class*="know-more"] {
  border-radius: 9999px !important;
  padding: 0.75rem 2.5rem !important;
}

/* Become a Tutor Button Specific Style */
button[class*="become-tutor"] {
  border-radius: 9999px !important;
  padding: 0.75rem 2.5rem !important;
}

/* Keep form buttons unchanged */
.form-container button {
  border-radius: 0.5rem; /* Keep original form button styling */
}
</style>
