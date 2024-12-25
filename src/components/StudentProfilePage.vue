<template>
  <div class="min-h-screen py-20 px-4 bg-gray-50">
    <div class="profile-card p-8 rounded-xl">
      <div class="flex items-center gap-8">
        <img :src="userData?.profile?.avatar" class="avatar-glow w-32 h-32 rounded-full" />
        <div>
          <h1 class="neon-text text-4xl">{{ userData?.name }}</h1>
          <!-- Other profile info -->
      </div>
    </div>

      <div class="stats-grid mt-8">
        <div class="stats-card p-6 rounded-xl">
          <!-- Stats content -->
      </div>
    </div>

      <div class="flex gap-2 mt-4">
        <span v-for="subject in userData?.subjects" class="subject-tag">
          {{ subject }}
        </span>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/api'

const router = useRouter()
const userData = ref(null)

onMounted(() => {
  // Get user data from localStorage
  const user = authService.getCurrentUser()
  
  if (!user) {
    // If no user data, redirect to login
    router.push({ name: 'Login' })
    return
  }
  
  userData.value = user
})

const navLinks = [
  { to: '/about', text: 'About' },
  { to: '/requestTutor', text: 'Request A Tutor' },
  { to: '/topTeachers', text: 'Top Teachers' },
  { to: '/tutorProfiles', text: 'Tutor Profiles' }
]
</script> 

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

/* Add the animation styles */
@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1); 
    opacity: 0.4;
  }
  50% { 
    transform: translateY(-20px) rotate(2deg) scale(1.05); 
    opacity: 0.6;
  }
}

@keyframes float-slow-reverse {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1); 
    opacity: 0.4;
  }
  50% { 
    transform: translateY(-25px) rotate(-2deg) scale(1.05); 
    opacity: 0.6;
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-slow:nth-child(odd) {
  animation: float-slow-reverse 9s ease-in-out infinite;
}

/* Add hover effects */
svg {
  transition: all 0.5s ease;
}

svg:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

svg path, svg circle {
  transition: all 0.3s ease;
}

svg:hover path,
svg:hover circle {
  stroke-width: 1.5;
  filter: drop-shadow(0 0 8px currentColor);
}

/* Make doodles responsive */
@media (max-width: 1280px) {
  .fixed.left-0,
  .fixed.right-0 {
    width: 48px;
  }

  svg {
    transform: scale(0.7);
  }
}

/* Custom profile card */
.profile-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Avatar border glow */
.avatar-glow {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  border: 3px solid rgba(99, 102, 241, 0.5);
}

/* Stats card */
.stats-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

/* Progress indicators */
.progress-ring {
  stroke: url(#gradient);
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
}

/* Custom navigation */
.nav-link {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.nav-link.active {
  color: #4f46e5;
  text-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
}

/* Achievement badges */
.achievement-badge {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  padding: 8px 16px;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

/* Subject tags */
.subject-tag {
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.2);
  color: #4f46e5;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
}

/* Stats grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* Animated background gradient */
.gradient-bg {
  background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #1a1a2e);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>