<script setup>
defineProps({
  msg: {
    type: String,
    default: 'About Us'
  }
})
</script>

<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
          About TutorVue
        </h1>
        <p class="text-xl text-blue-100/80 max-w-3xl mx-auto">
          Empowering students and educators through personalized learning experiences
        </p>
      </div>

      <!-- Moving Images Section -->
      <div class="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-16">
        <div class="overflow-hidden relative">
          <div class="flex space-x-4 animate-scroll-right">
            <img v-for="n in 40" :key="'right-' + n" :src="`https://via.placeholder.com/300x200?text=Image+${n % 20}`" alt="Sample Image" class="w-56 h-32 object-cover rounded-lg" />
          </div>
        </div>
        <div class="overflow-hidden relative mt-4">
          <div class="flex space-x-4 animate-scroll-left">
            <img v-for="n in 40" :key="'left-' + n" :src="`https://via.placeholder.com/300x200?text=Image+${n % 20}`" alt="Sample Image" class="w-56 h-32 object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <!-- Mission & Features Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <!-- Mission Statement -->
        <div class="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 mb-12">
          <div class="flex items-center mb-6">
            <div class="p-2 bg-indigo-500/20 rounded-lg mr-4">
              <svg class="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p class="text-blue-100/80 leading-relaxed text-lg">
            At TutorVue, we are dedicated to revolutionizing the educational landscape by bridging the gap between students and quality education. Our mission is to provide accessible, personalized tutoring services that cater to individual learning needs and goals. We believe that every student deserves access to exceptional educational resources and mentorship, regardless of their location or background. Through our platform, we connect passionate educators with eager learners, fostering an environment where academic excellence thrives and educational dreams become reality.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <div class="feature-card">
            <div class="icon-wrapper bg-blue-500/20">
              <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Expert Tutors</h3>
            <p class="text-blue-100/80">Carefully vetted educators with proven track records in their subjects.</p>
          </div>

          <div class="feature-card">
            <div class="icon-wrapper bg-purple-500/20">
              <svg class="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Flexible Learning</h3>
            <p class="text-blue-100/80">Choose when and how you want to learn with customizable schedules.</p>
          </div>

          <div class="feature-card">
            <div class="icon-wrapper bg-indigo-500/20">
              <svg class="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Quality Assured</h3>
            <p class="text-blue-100/80">Regular quality checks and feedback system to maintain high standards.</p>
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
</style>
