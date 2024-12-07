<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
          We are TutorVue
        </h1>
        <p class="text-xl text-blue-100/80 max-w-3xl mx-auto">
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
        <div class="text-center">
          <div class="flex flex-col items-center mb-6">
            <h2 class="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p class="text-blue-100/80 leading-relaxed text-lg max-w-6xl mx-auto">
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
            class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
          >
            <div class="flex flex-col items-center">
              <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mb-4 object-cover">
              <h3 class="text-xl font-semibold text-white mb-1">{{ member.name }}</h3>
              <p class="text-blue-100/60 mb-3">{{ member.role }}</p>
              <p class="text-blue-100/80 text-sm italic mb-4">"{{ member.quote }}"</p>
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

      <!-- Tutoring Categories Section -->
      <div class="max-w-7xl mx-auto mb-20 p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Find <span class="text-yellow-400">Tutors</span> Near You</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
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
        </div>

        <!-- Additional Categories -->
        <div class="mt-8 text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <div class="mb-4">
            <span class="text-blue-300 mr-3 font-semibold">Cities:</span>
            <a @click="handleCityNavigation('jaipur')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Jaipur</a>
            <a @click="handleCityNavigation('jodhpur')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Jodhpur</a>
            <a @click="handleCityNavigation('udaipur')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Udaipur</a>
            <a @click="handleCityNavigation('pali')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Pali</a>
            <a @click="handleCityNavigation('kota')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Kota</a>
            <a @click="handleCityNavigation('mumbai')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Mumbai</a>
            <a @click="handleCityNavigation('ahmedabad')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Ahmedabad</a>
          </div>

          <div class="mb-4">
            <span class="text-blue-300 mr-3 font-semibold">Categories:</span>
            <a @click="handleCategoryNavigation('academics')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Academics</a>
            <a @click="handleCategoryNavigation('yoga')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Yoga</a>
            <a @click="handleCategoryNavigation('music')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Music</a>
            <a @click="handleCategoryNavigation('hobbies')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Hobbies</a>
            <a @click="handleCategoryNavigation('computer-it')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Computer/IT Courses</a>
          </div>

          <div class="mb-4">
            <span class="text-blue-300 mr-3 font-semibold">Classes:</span>
            <a @click="handleClassNavigation(1)" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Class 1st</a>
            <a @click="handleClassNavigation(2)" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Class 2nd</a>
            <a @click="handleClassNavigation(3)" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Class 3rd</a>
            <a @click="handleClassNavigation(4)" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Class 4th</a>
            <a @click="handleClassNavigation(5)" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Class 5th</a>
            <a @click="handleClassNavigation(10)" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Class 10th</a>
            <a @click="handleClassNavigation(11)" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Class 11th</a>
          </div>

          <div class="mb-4">
            <span class="text-blue-300 mr-3 font-semibold">Subjects:</span>
            <a @click="handleSubjectNavigation('maths')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Maths</a>
            <a @click="handleSubjectNavigation('english')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">English</a>
            <a @click="handleSubjectNavigation('science')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Science</a>
            <a @click="handleSubjectNavigation('hindi')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Hindi</a>
            <a @click="handleSubjectNavigation('sanskrit')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Sanskrit</a>
            <a @click="handleSubjectNavigation('physics')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Physics</a>
          </div>

          <div class="mb-4">
            <span class="text-blue-300 mr-3 font-semibold">Other:</span>
            <a @click="handleOtherNavigation('about')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">About Us</a>
            <a @click="handleOtherNavigation('ambassador')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Student Ambassador Program</a>
            <a @click="handleOtherNavigation('culture')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Culture</a>
            <a @click="handleOtherNavigation('careers')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Careers</a>
            <a @click="handleOtherNavigation('media')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Media</a>
            <a @click="handleOtherNavigation('terms')" class="text-blue-300 hover:text-blue-200 mx-2 cursor-pointer">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Get in Touch</h2>
        <p class="text-blue-100/80 mb-8">
          Have questions? We're here to help you find the perfect tutor for your needs.
        </p>
        <button class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
          Contact Us
        </button>
      </div>
    </div>
  </div>
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
