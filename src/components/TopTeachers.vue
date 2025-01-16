<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-white">
    <!-- Hero Section with Background Pattern -->
    <section class="section-light relative max-w-7xl mx-auto px-6 pt-16 pb-24">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <!-- Content -->
      <div class="relative">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Find Your Perfect Tutor
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn from Our Elite Tutors
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with experienced educators who are passionate about helping you succeed
          </p>
        </div>

        <!-- Enhanced Filters Section -->
        <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-12 border border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Subject</label>
              <div class="relative">
                <select 
                  v-model="filterOptions.subject"
                  class="filter-select"
                >
                  <option value="">All Subjects</option>
                  <option v-for="subject in subjects" :key="subject" :value="subject">
                    {{ subject }}
                  </option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Rating</label>
              <div class="relative">
                <select 
                  v-model="filterOptions.rating"
                  class="filter-select"
                >
                  <option value="">All Ratings</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Availability</label>
              <div class="relative">
                <select 
                  v-model="filterOptions.availability"
                  class="filter-select"
                >
                  <option value="">Any Availability</option>
                  <option value="now">Available Now</option>
                  <option value="today">Available Today</option>
                  <option value="week">Available This Week</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Teachers Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="teacher in filteredTeachers" 
               :key="teacher.id"
               class="teacher-card group"
          >
            <!-- Teacher Image -->
            <div class="relative">
              <img 
                :src="teacher.avatar" 
                :alt="teacher.name"
                class="w-full h-56 object-cover"
              >
              <div class="absolute top-4 right-4 flex flex-col gap-2">
                <span 
                  :class="`status-badge ${
                    teacher.availability === 'Available Now' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`"
                >
                  {{ teacher.availability }}
                </span>
              </div>
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Teacher Info -->
            <div class="p-6 space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {{ teacher.name }}
                  </h3>
                  <p class="text-gray-600">{{ teacher.subject }}</p>
                </div>
                <div class="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                  <span class="text-yellow-400 mr-1">★</span>
                  <span class="font-medium text-gray-900">{{ teacher.rating }}</span>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="badge in teacher.badges.slice(0, 2)" 
                  :key="badge"
                  class="badge"
                >
                  {{ badge }}
                </span>
              </div>

              <div class="grid grid-cols-3 gap-4 text-sm text-gray-600">
                <div class="text-center">
                  <div class="font-semibold text-gray-900">{{ teacher.reviews }}</div>
                  <div>Reviews</div>
                </div>
                <div class="text-center">
                  <div class="font-semibold text-gray-900">{{ teacher.students }}</div>
                  <div>Students</div>
                </div>
                <div class="text-center">
                  <div class="font-semibold text-gray-900">{{ teacher.experience }}</div>
                  <div>Experience</div>
                </div>
              </div>

              <div class="flex gap-3 pt-4">
                <button 
                  @click="handleBookSession(teacher.id)"
                  class="primary-button"
                >
                  Book Session
                </button>
                <button 
                  @click="viewProfile(teacher)"
                  class="secondary-button"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Footer -->
  <footer class="bg-gray-900 text-white max-w-full border-t border-white/10">
    <!-- Tutoring Categories Section -->
  <div class="max-w-full p-12 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10">
    <h2 class="text-4xl font-bold text-center mb-12">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Find </span>
      <span class="text-yellow-400">Tutors</span>
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
      <!-- Copyright - Adjust padding -->
      <div class="max-w-full pt-8 border-t border-white/10 text-center">
        <p class="text-blue-100/60 text-sm pb-4">
          © 2024 TutorVue Education Pvt. Ltd. All rights reserved.
        </p>
      </div>
  </div>
  </footer>
</template>

<style scoped>
/* Base Layout */
.min-h-screen {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8fafc, #ffffff);
}

/* Section Styles */
.section-light {
  position: relative;
  overflow: hidden;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-top: 4rem;
  padding-bottom: 6rem;
}

/* Background Elements */
.decorative-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.bg-circle {
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  filter: blur(48px);
  opacity: 0.3;
}

.bg-circle-top {
  top: -10rem;
  right: -10rem;
  background-color: #eff6ff;
}

.bg-circle-bottom {
  bottom: -10rem;
  left: -10rem;
  background-color: #eef2ff;
}

/* Header Styles */
.header-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #eff6ff;
  color: #2563eb;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.header-title {
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.header-subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
}

/* Filter Section */
.filters-container {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  margin-bottom: 3rem;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.filter-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: white;
  color: #111827;
  appearance: none;
  transition: all 0.3s ease;
}

.filter-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}

/* Teachers Grid */
.teachers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.teacher-card {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  transform: translateY(0);
  transition: all 0.3s ease;
  overflow: hidden;
}

.teacher-card:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.teacher-image-container {
  position: relative;
}

.teacher-image {
  width: 100%;
  height: 14rem;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.status-badge.available {
  background-color: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.status-badge.later {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #bfdbfe;
}

.teacher-info {
  padding: 1.5rem;
}

.teacher-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.teacher-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  transition: color 0.3s ease;
}

.teacher-name:hover {
  color: #2563eb;
}

.teacher-subject {
  color: #6b7280;
  font-size: 0.875rem;
}

.rating-badge {
  display: flex;
  align-items: center;
  background-color: #fef3c7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
}

.rating-star {
  color: #f59e0b;
  margin-right: 0.25rem;
}

.rating-number {
  font-weight: 500;
  color: #111827;
}

.badge-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.badge {
  padding: 0.5rem 1rem;
  background-color: #eff6ff;
  color: #1e40af;
  border: 1px solid #dbeafe;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.badge:hover {
  background-color: #dbeafe;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.stat-number {
  font-weight: 600;
  color: #111827;
}

.button-container {
  display: flex;
  gap: 0.75rem;
  padding-top: 1rem;
}

.primary-button {
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-button:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}

.secondary-button {
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background-color: #f3f4f6;
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .teachers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .filters-grid {
    grid-template-columns: 1fr;
  }
  
  .teachers-grid {
    grid-template-columns: 1fr;
  }
  
  .header-title {
    font-size: 2.25rem;
  }
}

/* Animation Keyframes */
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

.teacher-card {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Staggered animations */
.teacher-card:nth-child(1) { animation-delay: 0.1s; }
.teacher-card:nth-child(2) { animation-delay: 0.2s; }
.teacher-card:nth-child(3) { animation-delay: 0.3s; }
.teacher-card:nth-child(4) { animation-delay: 0.4s; }
.teacher-card:nth-child(5) { animation-delay: 0.5s; }
.teacher-card:nth-child(6) { animation-delay: 0.6s; }
</style>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedTeacher = ref(null)

const teachers = ref([
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    subject: 'Mathematics',
    rating: 4.9,
    reviews: 128,
    students: 450,
    experience: '8 years',
    avatar: 'https://i.pravatar.cc/150?img=1',
    badges: ['Top Rated', 'PhD', 'Certified'],
    availability: 'Available Now',
    education: 'PhD in Mathematics from MIT',
    specializations: ['Calculus', 'Linear Algebra', 'Statistics'],
    languages: ['English', 'Mandarin'],
    about: 'Passionate mathematics educator with 8 years of experience in both university and private tutoring settings. Specialized in making complex mathematical concepts accessible to students of all levels.',
    achievements: [
      'Published researcher in Mathematical Education',
      'Winner of Excellence in Teaching Award 2022',
      'Over 450 successful students'
    ]
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    subject: 'Physics',
    rating: 4.8,
    reviews: 96,
    students: 320,
    experience: '10 years',
    avatar: 'https://i.pravatar.cc/150?img=2',
    badges: ['Expert', 'PhD', 'Published'],
    availability: 'Available Today',
    education: 'PhD in Physics from Stanford',
    specializations: ['Quantum Mechanics', 'Thermodynamics', 'Astrophysics'],
    languages: ['English', 'Chinese'],
    about: 'Research professor with a passion for teaching complex physics concepts in an engaging way. Published author in quantum physics with extensive teaching experience.',
    achievements: [
      'Multiple research publications',
      'Science Communication Award 2021',
      'Developed innovative teaching methods'
    ]
  },
  {
    id: 3,
    name: 'Emma Wilson',
    subject: 'English Literature',
    rating: 4.7,
    reviews: 156,
    students: 480,
    experience: '6 years',
    avatar: 'https://i.pravatar.cc/150?img=3',
    badges: ['Creative Writing', 'Published Author'],
    availability: 'Available Now',
    education: 'MA in Creative Writing from Columbia University',
    specializations: ['Creative Writing', 'Literary Analysis', 'Essay Writing'],
    languages: ['English', 'French'],
    about: 'Published author and experienced writing coach. Specializes in helping students develop their unique voice while mastering academic writing skills.',
    achievements: [
      'Published novelist',
      'Writing Workshop Leader',
      'Former Editor at Literary Journal'
    ]
  },
  {
    id: 4,
    name: 'Dr. James Rodriguez',
    subject: 'Chemistry',
    rating: 4.9,
    reviews: 112,
    students: 290,
    experience: '12 years',
    avatar: 'https://i.pravatar.cc/150?img=4',
    badges: ['PhD', 'Research Expert', 'Industry Experience'],
    availability: 'Available Today',
    education: 'PhD in Chemistry from Berkeley',
    specializations: ['Organic Chemistry', 'Biochemistry', 'Lab Techniques'],
    languages: ['English', 'Spanish'],
    about: 'Former industry researcher turned educator. Brings real-world applications into chemistry education with hands-on learning approaches.',
    achievements: [
      'Multiple patents holder',
      'Industry-Academic Partnership Award',
      'Innovative Teaching Methods Developer'
    ]
  },
  {
    id: 5,
    name: 'Dr. Aisha Patel',
    subject: 'Biology',
    rating: 4.8,
    reviews: 143,
    students: 380,
    experience: '9 years',
    avatar: 'https://i.pravatar.cc/150?img=5',
    badges: ['Medical Expert', 'PhD', 'Research'],
    availability: 'Available Now',
    education: 'MD-PhD from Johns Hopkins University',
    specializations: ['Human Anatomy', 'Genetics', 'Cellular Biology'],
    languages: ['English', 'Hindi', 'Gujarati'],
    about: 'Medical doctor and researcher bringing clinical experience to biology education. Specializes in pre-med preparation and advanced biology concepts.',
    achievements: [
      'Published Medical Researcher',
      'Excellence in Medical Education Award',
      'Developed Pre-Med Preparation Program'
    ]
  },
  {
    id: 6,
    name: 'Prof. David Kim',
    subject: 'Computer Science',
    rating: 4.9,
    reviews: 167,
    students: 520,
    experience: '15 years',
    avatar: 'https://i.pravatar.cc/150?img=6',
    badges: ['Tech Expert', 'Industry Leader', 'Full Stack'],
    availability: 'Available Today',
    education: 'MS in Computer Science from Georgia Tech',
    specializations: ['Web Development', 'Algorithms', 'Machine Learning'],
    languages: ['English', 'Korean'],
    about: 'Former tech lead at major tech companies, now dedicated to nurturing the next generation of developers. Practical, project-based teaching approach.',
    achievements: [
      'Multiple Tech Patents',
      'Open Source Contributor',
      'Tech Education Innovator Award'
    ]
  },
  {
    id: 7,
    name: 'Lisa Thompson',
    subject: 'History',
    rating: 4.7,
    reviews: 98,
    students: 240,
    experience: '7 years',
    avatar: 'https://i.pravatar.cc/150?img=7',
    badges: ['Published Author', 'Research Expert'],
    availability: 'Available Now',
    education: 'MA in History from Yale University',
    specializations: ['World History', 'European History', 'Historical Research'],
    languages: ['English', 'German'],
    about: 'Passionate about making history come alive through storytelling and connecting historical events to contemporary issues.',
    achievements: [
      'Published History Author',
      'Historical Documentary Consultant',
      'Digital History Project Leader'
    ]
  }
])

const filterOptions = ref({
  subject: '',
  rating: '',
  availability: ''
})

const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'History', 'Computer Science']

// Filtered teachers computed property
const filteredTeachers = computed(() => {
  return teachers.value.filter(teacher => {
    // Subject filter
    if (filterOptions.value.subject && filterOptions.value.subject !== 'All Subjects' && teacher.subject !== filterOptions.value.subject) {
      return false
    }
    
    // Rating filter
    if (filterOptions.value.rating) {
      const minRating = parseFloat(filterOptions.value.rating)
      if (teacher.rating < minRating) {
        return false
      }
    }
    
    // Availability filter
    if (filterOptions.value.availability) {
      if (filterOptions.value.availability === 'now' && teacher.availability !== 'Available Now') {
        return false
      }
      if (filterOptions.value.availability === 'today' && !['Available Now', 'Available Today'].includes(teacher.availability)) {
        return false
      }
    }
    
    return true
  })
})

const handleBookSession = (teacherId) => {
  // Store teacher ID if needed for the chat
  localStorage.setItem('selectedTeacherId', teacherId)
  router.push({ 
    name: 'Inbox',
    query: { teacherId: teacherId }
  })
}

const viewProfile = (teacher) => {
  selectedTeacher.value = teacher
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const closeProfile = () => {
  selectedTeacher.value = null
}
</script>
