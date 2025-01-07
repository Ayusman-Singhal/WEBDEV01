<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-white">
    <!-- Hero Section -->
    <section class="section-light max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div class="grid grid-cols-2 gap-16 items-center">
        <!-- Left: Image -->
        <div class="relative">
          <img src="..\assets\svg\svg01.svg" alt="Teaching" 
               class="w-full h-auto animate-float">
          </div>
        
        <!-- Right: Content -->
        <div class="space-y-8">
          <div class="bg-white rounded-lg">
            <h1 class="text-3xl font-bold text-gray-900 text-center leading-tight">
              Join us to become<br>a star Teacher
            </h1>
        </div>
        
          <div class="bg-white rounded-lg">
            <p class="text-base text-gray-600 text-center leading-relaxed">
              Share your expertise with students worldwide. Join our community of passionate educators 
              and make a difference in students' lives.
            </p>
          </div>

          <div class="flex justify-center">
            <button @click="showApplicationForm = true" 
                    class="join-button">
            JOIN US
          </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SVG Section -->
    <section class="section-dark py-5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-3 gap-8">
          <!-- Left blurred column
          <div class="bg-white/30 backdrop-blur-md rounded-2xl p-8 text-center">
          </div> -->

          <!-- Middle SVG -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 align-center">
            <img src="../assets/svg/svg02.svg" alt="Online Teaching" class="w-full h-auto"/>
            </div>

          <!-- Right blurred column
          <div class="bg-white/30 backdrop-blur-md rounded-2xl p-8 text-center">
          </div> -->
        </div>
      </div>
    </section>

    <!-- Star Teachers Section -->
    <section class="section-light py-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Our Star Teachers</h2>
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-4 gap-8 mb-12">
          <div v-for="(teacher, i) in teacherNames" :key="i" 
               class="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <div class="relative">
              <div class="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img :src="`https://i.pravatar.cc/150?img=${i+1}`" 
                     alt="Teacher" 
                     class="w-full h-full object-cover">
                      </div>
              <!-- Star Rating -->
              <div class="flex justify-center gap-1 mb-3">
                <span v-for="star in 5" :key="star" class="text-yellow-400">
                  ★
                </span>
                <span class="ml-1 text-sm text-gray-600">(5.0)</span>
                    </div>
                  </div>
            <p class="text-lg font-medium text-center text-gray-800">{{ teacher }}</p>
            <p class="text-sm text-center text-gray-600">{{ teacherSubjects[i] }}</p>
                      </div>
                    </div>
                        <div class="text-center">
          <button @click="router.push('/TopTeachers')" 
                  class="view-all-button group inline-flex items-center gap-2">
            View All Teachers
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </div>
    </section>

    <!-- Reviews Section -->
    <section class="section-dark py-20">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">What Teachers Say</h2>
                    <div class="relative">
          <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div class="text-6xl text-blue-200 absolute top-4 left-6">"</div>
            <p class="text-xl text-gray-600 mb-6 relative z-10 leading-relaxed">
              {{ currentReview }}
            </p>
            <div class="flex items-center justify-end gap-4">
              <img :src="`https://i.pravatar.cc/150?img=${currentReviewIndex + 10}`" 
                   class="w-12 h-12 rounded-full border-2 border-white shadow-md" 
                   alt="Reviewer">
                        <div>
                <p class="font-semibold text-gray-900">{{ currentReviewAuthor }}</p>
                <p class="text-sm text-gray-500">Verified Teacher</p>
                        </div>
                        </div>
                      </div>
          <div class="absolute -right-4 top-0 text-sm text-gray-400 writing-vertical">
            changes every 10 seconds
                    </div>
                        </div>
                        </div>
    </section>

    <!-- Features Section -->
    <section class="section-light py-20">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Benefits of Joining Our Platform
      </h2>
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title"
             class="bg-white rounded-2xl p-8 shadow-md border border-gray-100 
                    transition-all duration-300 hover:shadow-xl">
          <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <i :class="feature.icon" class="text-2xl text-blue-600"></i>
                          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
                        </div>
                        </div>
      <div class="max-w-full p-12 text-center bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10">
          <h2 class="text-3xl font-bold text-black mb-12">Ready to Start Teaching?</h2>
          <div class="flex justify-center gap-8">
            <button @click="showApplicationForm = true" 
                    class="cta-button primary">
              Become a tutor
                    </button>
            <button @click="router.push('/faq')" 
                    class="cta-button secondary">
              Know More
                      </button>
                    </div>
                  </div>
    </section>

    <!-- Add the TutorApplicationForm component -->
    <TutorApplicationForm 
      :show="showApplicationForm"
      @close="showApplicationForm = false"
    />
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

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TutorApplicationForm from './TutorApplicationForm.vue'

export default {
  name: 'BecomeTutor',
  components: {
    TutorApplicationForm
  },
  setup() {
    const router = useRouter()
const showApplicationForm = ref(false)

    return {
      router,
      showApplicationForm
    }
  },
  data() {
    return {
      teacherNames: [
        'Sarah Anderson',
        'Michael Chen',
        'Emma Wilson',
        'David Kumar'
      ],
      teacherSubjects: [
        'Mathematics Expert',
        'Physics Specialist',
        'English Literature',
        'Computer Science'
      ],
      features: [
  {
    title: 'Flexible Schedule',
          description: 'Choose your own hours and teach at your convenience.',
          icon: 'far fa-clock'
        },
        {
          title: 'Global Reach',
          description: 'Connect with students from around the world.',
          icon: 'fas fa-globe'
        },
        {
          title: 'Competitive Pay',
          description: 'Earn competitive rates with timely payments.',
          icon: 'fas fa-dollar-sign'
        }
      ],
      reviews: [
        {
          text: 'Teaching on this platform has been an incredible journey. The support system and tools provided make the entire process seamless.',
          author: 'John Anderson'
        },
        {
          text: 'I love how easy it is to connect with students who are eager to learn. The platform handles all the administrative work.',
          author: 'Maria Rodriguez'
        },
        {
          text: 'As an experienced educator, I appreciate the professional environment and the quality of students on this platform.',
          author: 'James Wilson'
        }
      ],
      currentReviewIndex: 0
    }
  },
  computed: {
    currentReview() {
      return this.reviews[this.currentReviewIndex].text
    },
    currentReviewAuthor() {
      return this.reviews[this.currentReviewIndex].author
    }
  },
  mounted() {
    setInterval(this.rotateReviews, 10000)
  },
  methods: {
    rotateReviews() {
      this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length
    }
  }
}
</script>

<style scoped>
/* Base styles */
.min-h-screen {
  min-height: 100vh;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
}

.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #f8fafc, #ffffff);
}

/* Layout */
.max-w-7xl {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.gap-8 {
  gap: 2rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-16 {
  gap: 4rem;
}

/* Spacing */
.space-y-8 > * + * {
  margin-top: 2rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.pt-16 {
  padding-top: 4rem;
}

.pb-24 {
  padding-bottom: 6rem;
}

/* Text styles */
.text-center {
  text-align: center;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.font-bold {
  font-weight: 700;
}

.text-gray-900 {
  color: #111827;
}

.text-gray-600 {
  color: #4B5563;
}

.leading-relaxed {
  line-height: 1.625;
}

/* Card styles */
.bg-white {
  background-color: white;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Button styles */
.join-button {
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 300ms;
}

.join-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.view-all-button {
  padding: 0.75rem 1.5rem;
  color: #2563eb;
  font-weight: 600;
  border-radius: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 300ms;
}

.view-all-button:hover {
  background-color: #eff6ff;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 300ms;
  display: inline-block;
  min-width: 180px;
}

.cta-button:hover {
  transform: scale(1.05);
}

.cta-button.primary{
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 300ms;
}

.cta-button.primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.cta-button.secondary {
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 300ms;
}

.cta-button.secondary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Animation */
@keyframes float {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-10px); 
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Teacher card styles */
.teacher-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: all 300ms;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
}

.teacher-card:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.teacher-avatar {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: 0 auto 1rem;
  overflow: hidden;
}

.teacher-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.star-rating {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.star-rating span {
  color: #fbbf24;
  transition: transform 0.2s;
}

.star-rating:hover span {
  transform: scale(1.2);
}

/* Feature card styles */
.feature-card {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 300ms;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
}

.feature-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background-color: #dbeafe;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon i {
  font-size: 1.5rem;
  color: #2563eb;
}

/* Review section styles */
.review-card {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  position: relative;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
}

.review-quote {
  font-size: 4rem;
  color: #bfdbfe;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
}

.review-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.writing-vertical {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}

/* Responsive styles */
@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
  
  .gap-16,
  .gap-12,
  .gap-8 {
    gap: 1.5rem;
  }
  
  .py-24 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

/* Section backgrounds */
.section-light {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(249, 250, 251, 0.8) 100%
  );
  position: relative;
  overflow: hidden;
  border: none;
}

.section-dark {
  background: linear-gradient(
    to bottom,
    rgba(243, 244, 246, 0.8) 0%,
    rgba(249, 250, 251, 0.9) 100%
  );
  position: relative;
  overflow: hidden;
  border: none;
}

/* Add subtle patterns to sections */
.section-light::before,
.section-dark::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.02) 2%, transparent 0%),
    radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.02) 2%, transparent 0%);
  background-size: 100px 100px;
  opacity: 0.5;
  pointer-events: none;
}

/* Add subtle separation between sections */
.section-light::after,
.section-dark::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.05) 50%,
    transparent
  );
}

/* Update card backgrounds for better contrast */
.feature-card,
.teacher-card,
.review-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}
</style>
