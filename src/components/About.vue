<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-16 relative">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-8">
          We are TutorVue
        </h1>
        <p class="text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
          Bridging the Gap, Connecting Students and Teachers
        </p>
      </div>

      <!-- Moving Images Section -->
      <div class="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-16">
        <div class="overflow-hidden relative">
          <div class="flex space-x-4 animate-scroll-right">
            <img v-for="n in 40" :key="'right-' + n" :src="`https://via.placeholder.com/300x200?text=Image+${n % 40}`" alt="Sample Image" class="w-60 h-35 object-cover rounded-lg" />
          </div>
        </div>
        <div class="overflow-hidden relative mt-4">
          <div class="flex space-x-4 animate-scroll-left">
            <img v-for="n in 40" :key="'left-' + n" :src="`https://via.placeholder.com/300x200?text=Image+${n % 40}`" alt="Sample Image" class="w-60 h-35 object-cover rounded-lg" />
          </div>
        </div>
      </div>
      <!-- Mission & Features Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <!-- Mission Statement -->
        <div class="text-center transform hover:scale-105 transition-transform duration-500">
          <div class="flex flex-col items-center mb-8">
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
            <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Our Mission</h2>
          </div>
          <p class="text-blue-100/80 leading-relaxed text-lg max-w-4xl mx-auto">
            At TutorVue, we are dedicated to revolutionizing the educational landscape by bridging the gap between students and quality education.
            Our mission is to provide accessible, personalized tutoring services that cater to individual learning needs and goals.
            We believe that every student deserves access to exceptional educational resources and mentorship, regardless of their location or background.
            Through our platform, we connect passionate educators with eager learners, fostering an environment where academic excellence thrives and educational dreams become reality.
            At TutorVue, we are dedicated to revolutionizing the educational landscape by bridging the gap between students and quality education.
            Our mission is to provide accessible, personalized tutoring services that cater to individual learning needs and goals.
          </p>
        </div>
      </div>

      <!-- Team Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-8">Meet The <span class="text-yellow-400">Team</span></h2>
          <!-- Category Navigation -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="selectedCategory = category"
              class="px-4 py-2 rounded-full text-sm"
              :class="selectedCategory === category ? 'bg-indigo-500 text-white' : 'text-blue-100/80 hover:bg-indigo-500/20'"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Team Members Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="member in filteredMembers" 
            :key="member.name"
            class="group bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div class="flex flex-col items-center">
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full object-cover relative z-10 ring-4 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
              </div>
              <h3 class="text-2xl font-semibold text-white mb-2">{{ member.name }}</h3>
              <p class="text-indigo-400 mb-4">{{ member.role }}</p>
              <p class="text-blue-100/80 text-sm italic mb-6 leading-relaxed">"{{ member.quote }}"</p>
              <a 
                :href="member.linkedin" 
                target="_blank"
                class="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Join Our Team Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Join Our <span class="text-yellow-400">Team</span></h2>
          <p class="text-blue-100/80 mb-8 text-lg">
            Be part of our mission to transform education. We're always looking for talented individuals to join our team.
          </p>
          <router-link 
            to="/careers" 
            class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
          >
            See Open Positions
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- Tutoring Categories Section -->
  <div class="mt-8 bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 border-t border-b border-white/10">
    <!-- Top Section with Find Tutors -->
    <div class="py-8 text-center">
      <h2 class="text-3xl font-bold">
        <span class="text-white">Find</span>
        <span class="text-yellow-400">Tutors</span>
        <span class="text-white">Near You</span>
      </h2>
    </div>

    <!-- Grid of Links -->
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8 py-8">
      <!-- Column 1 -->
      <div class="space-y-3">
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Academics Home Tuition</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Accounts Tuition</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Bollywood Dance Classes</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Chemistry Tuition</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Dance Classes</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Economics Coaching</a>
      </div>

      <!-- Column 2 -->
      <div class="space-y-3">
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">English Coaching</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Flute Classes</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">French Classes</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Guitar Lessons</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Hobby Classes</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Ajmer</a>
      </div>

      <!-- Column 3 -->
      <div class="space-y-3">
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Ahmedabad</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Chandigarh</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Delhi</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Jaipur</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Kota</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Jodhpur</a>
      </div>

      <!-- Column 4 -->
      <div class="space-y-3">
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Mumbai</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Home Tuition in Udaipur</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Japanese Classes</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Martial Arts Classes</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Maths Tuition</a>
        <a href="#" class="text-blue-300 hover:text-white block transition-colors">Music Classes</a>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="grid grid-cols-12 gap-4">
          <!-- Left Links -->
          <div class="col-span-4 space-y-4">
            <div class="flex items-center space-x-2">
              <span class="text-blue-300 font-semibold">Cities:</span>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-300 hover:text-white">Jaipur</a>
                <a href="#" class="text-blue-300 hover:text-white">Jodhpur</a>
                <a href="#" class="text-blue-300 hover:text-white">Udaipur</a>
                <a href="#" class="text-blue-300 hover:text-white">Pali</a>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-blue-300 font-semibold">Categories:</span>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-300 hover:text-white">Academics</a>
                <a href="#" class="text-blue-300 hover:text-white">Yoga</a>
                <a href="#" class="text-blue-300 hover:text-white">Music</a>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-blue-300 font-semibold">Classes:</span>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-300 hover:text-white">1st</a>
                <a href="#" class="text-blue-300 hover:text-white">2nd</a>
                <a href="#" class="text-blue-300 hover:text-white">3rd</a>
                <a href="#" class="text-blue-300 hover:text-white">10th</a>
                <a href="#" class="text-blue-300 hover:text-white">11th</a>
                <a href="#" class="text-blue-300 hover:text-white">12th</a>
              </div>
            </div>
          </div>

          <!-- Center Links -->
          <div class="col-span-4">
            <div class="flex items-center space-x-2">
              <span class="text-blue-300 font-semibold">Subjects:</span>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-300 hover:text-white">Maths</a>
                <a href="#" class="text-blue-300 hover:text-white">English</a>
                <a href="#" class="text-blue-300 hover:text-white">Science</a>
              </div>
            </div>
            <div class="mt-4 flex items-center space-x-2">
              <span class="text-blue-300 font-semibold">Competitive Exams:</span>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-300 hover:text-white">JEE</a>
                <a href="#" class="text-blue-300 hover:text-white">NEET</a>
                <a href="#" class="text-blue-300 hover:text-white">SSC</a>
              </div>
            </div>
            <div class="mt-4 flex items-center space-x-2">
              <span class="text-blue-300 font-semibold">Tution Type:</span>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-300 hover:text-white">Home</a>
                <a href="#" class="text-blue-300 hover:text-white">Coaching</a>
                <a href="#" class="text-blue-300 hover:text-white">Private</a>
              </div>
            </div>
          </div>

          <!-- Right Links -->
          <div class="col-span-4">
            <div class="flex justify-between items-start">
              <!-- Links -->
              <div>
                <div class="flex items-center space-x-2">
                  <span class="text-blue-300 font-semibold">Careers</span>
                </div>
                <div class="mt-4 flex items-center space-x-2">
                  <span class="text-blue-300 font-semibold">Media</span>
                </div>
                <div class="mt-4 flex items-center space-x-2">
                  <span class="text-blue-300 font-semibold">Terms And Conditions</span>
                </div>
              </div>

              <!-- Write a Review -->
              <a href="#" class="group flex flex-col items-center">
                <div class="bg-white p-3 rounded-lg mb-2 group-hover:bg-gray-100 transition-colors">
                  <svg class="w-8 h-8 text-yellow-400 group-hover:text-yellow-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <span class="text-blue-300 group-hover:text-white text-sm">Write a Review</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="max-w-full mt-20 border-t border-white/10 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Footer Grid -->
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
    </div>
  <!-- Copyright -->
  <div class="max-w-full pt-10 border-t border-white/10 text-center">
        <p class="text-blue-100/60 text-sm">
          © 2024 TutorVue Education Pvt. Ltd. All rights reserved.
        </p>
      </div>
  </footer>
</template>

<style scoped>
.feature-card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms;
  transform: translateY(0);
}

.feature-card:hover {
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-5px);
}

.icon-wrapper {
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: inline-block;
  margin-bottom: 1rem;
}

@keyframes scroll-right {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-scroll-right {
  animation: scroll-right 15s linear infinite;
}

.animate-scroll-left {
  animation: scroll-left 15s linear infinite;
}

.team-card {
  transition: all 300ms;
}

.team-card:hover {
  transform: translateY(-5px);
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.category-link {
  color: rgb(147, 197, 253);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition-property: all;
  transition-duration: 300ms;
}

.category-link:hover {
  color: white;
  background-color: rgba(99, 102, 241, 0.2);
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import teamData from '../data/team-members.json'

const router = useRouter()
const categories = teamData.categories
const members = teamData.members
const selectedCategory = ref(categories[0])

const filteredMembers = computed(() => {
  return members.filter(member => member.category === selectedCategory.value)
})

// Navigation handlers
const handleNavigation = (type) => {
  // You can customize this to handle different types of navigation
  // For now, we'll use a search query
  window.open(`https://www.google.com/search?q=tutor+${type.replace('-', '+')}`, '_blank')
}

const handleCityNavigation = (city) => {
  // For cities, we'll search for tutors in that specific city
  window.open(`https://www.google.com/search?q=tutors+in+${city}`, '_blank')
}

const handleCategoryNavigation = (category) => {
  // For categories, we can either route internally or search externally
  window.open(`https://www.google.com/search?q=${category}+tutoring`, '_blank')
}

const handleClassNavigation = (classNumber) => {
  // For class-specific searches
  window.open(`https://www.google.com/search?q=class+${classNumber}+tutoring`, '_blank')
}

const handleSubjectNavigation = (subject) => {
  // For subject-specific searches
  window.open(`https://www.google.com/search?q=${subject}+tutor`, '_blank')
}

const handleOtherNavigation = (type) => {
  // This could be handled by internal routing
  switch(type) {
    case 'about':
      router.push('/about')
      break
    case 'ambassador':
      router.push('/student-ambassador')
      break
    case 'careers':
      router.push('/careers')
      break
    case 'culture':
      router.push('/culture')
      break
    case 'media':
      router.push('/media')
      break
    case 'terms':
      router.push('/terms')
      break
    default:
      router.push('/')
  }
}
</script>
