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
          <h2 class="text-3xl font-bold text-white mb-4">Join Our Team</h2>
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
import teamData from '../data/team-members.json'

defineProps({
  msg: {
    type: String,
    default: 'About Us'
  }
})

const categories = teamData.categories
const members = teamData.members
const selectedCategory = ref(categories[0])

const filteredMembers = computed(() => {
  return members.filter(member => member.category === selectedCategory.value)
})
</script>