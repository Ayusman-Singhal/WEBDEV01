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
