<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
        Our Top-Rated Tutors
      </h1>
      <p class="text-xl text-blue-100/80 max-w-3xl mx-auto">
        Learn from the best. Our top-rated tutors are experts in their fields with proven track records of student success.
      </p>
    </div>

    <!-- Filters Section -->
    <div class="max-w-7xl mx-auto mb-12">
      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Subject Filter -->
          <div>
            <select 
              v-model="filterOptions.subject"
              class="w-full px-4 py-3 rounded-lg bg-indigo-950/50 border border-indigo-500/20 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
            >
              <option value="">All Subjects</option>
              <option v-for="subject in subjects" :key="subject" :value="subject">
                {{ subject }}
              </option>
            </select>
          </div>

          <!-- Rating Filter -->
          <div>
            <select 
              v-model="filterOptions.rating"
              class="w-full px-4 py-3 rounded-lg bg-indigo-950/50 border border-indigo-500/20 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
            >
              <option value="">All Ratings</option>
              <option value="4.5">4.5+ Stars</option>
              <option value="4.0">4.0+ Stars</option>
              <option value="3.5">3.5+ Stars</option>
            </select>
          </div>

          <!-- Availability Filter -->
          <div>
            <select 
              v-model="filterOptions.availability"
              class="w-full px-4 py-3 rounded-lg bg-indigo-950/50 border border-indigo-500/20 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
            >
              <option value="">Any Availability</option>
              <option value="now">Available Now</option>
              <option value="today">Available Today</option>
              <option value="week">Available This Week</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Profile View -->
    <div v-if="selectedTeacher" class="max-w-7xl mx-auto mb-16">
      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
        <!-- Back Button -->
        <button 
          @click="closeProfile"
          class="mb-6 flex items-center text-blue-300 hover:text-white transition-colors duration-300"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Teachers
        </button>

        <!-- Profile Header -->
        <div class="flex flex-col md:flex-row items-start gap-8 mb-8">
          <img 
            :src="selectedTeacher.avatar" 
            :alt="selectedTeacher.name"
            class="w-32 h-32 rounded-xl object-cover border-2 border-indigo-500/30"
          >
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="text-3xl font-bold text-white mb-2">{{ selectedTeacher.name }}</h2>
                <p class="text-xl text-blue-100/80 mb-4">{{ selectedTeacher.subject }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="badge in selectedTeacher.badges" 
                    :key="badge"
                    class="px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300"
                  >
                    {{ badge }}
                  </span>
                </div>
              </div>
              <button 
                @click="handleBookSession(selectedTeacher.id)"
                class="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>

        <!-- Profile Details -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">About</h3>
              <p class="text-blue-100/80">{{ selectedTeacher.about }}</p>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Education</h3>
              <p class="text-blue-100/80">{{ selectedTeacher.education }}</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Specializations</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="spec in selectedTeacher.specializations" 
                  :key="spec"
                  class="px-3 py-1 rounded-full text-sm bg-white/5 text-blue-100/80"
                >
                  {{ spec }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Statistics</h3>
              <div class="grid grid-cols-3 gap-4">
                <div class="text-center p-4 rounded-lg bg-white/5">
                  <div class="text-2xl font-bold text-white">{{ selectedTeacher.rating }}</div>
                  <div class="text-sm text-blue-100/60">Rating</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-white/5">
                  <div class="text-2xl font-bold text-white">{{ selectedTeacher.reviews }}</div>
                  <div class="text-sm text-blue-100/60">Reviews</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-white/5">
                  <div class="text-2xl font-bold text-white">{{ selectedTeacher.students }}</div>
                  <div class="text-sm text-blue-100/60">Students</div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Achievements</h3>
              <ul class="space-y-2">
                <li 
                  v-for="achievement in selectedTeacher.achievements" 
                  :key="achievement"
                  class="flex items-center text-blue-100/80"
                >
                  <svg class="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Teachers List (Horizontal Cards) -->
    <div v-else class="max-w-7xl mx-auto space-y-6">
      <div 
        v-for="teacher in filteredTeachers" 
        :key="teacher.id"
        class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 flex flex-col md:flex-row items-center gap-6"
      >
        <!-- Teacher Avatar -->
        <img 
          :src="teacher.avatar" 
          :alt="teacher.name"
          class="w-24 h-24 rounded-xl object-cover border-2 border-indigo-500/30"
        >

        <!-- Teacher Info -->
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 class="text-xl font-semibold text-white">{{ teacher.name }}</h3>
              <p class="text-blue-100/80">{{ teacher.subject }}</p>
            </div>
            <span 
              :class="`px-3 py-1 rounded-full text-sm font-medium
                ${teacher.availability === 'Available Now' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'}`"
            >
              {{ teacher.availability }}
            </span>
          </div>

          <!-- Stats -->
          <div class="flex gap-6 mb-4">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-white font-medium">{{ teacher.rating }}</span>
            </div>
            <div class="text-blue-100/80">{{ teacher.reviews }} Reviews</div>
            <div class="text-blue-100/80">{{ teacher.students }} Students</div>
          </div>

          <!-- Badges -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="badge in teacher.badges" 
              :key="badge"
              class="px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300"
            >
              {{ badge }}
            </span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col gap-3 min-w-[150px]">
          <button 
            @click="handleBookSession(teacher.id)"
            class="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            Book Session
          </button>
          <button 
            @click="viewProfile(teacher)"
            class="w-full px-4 py-2 rounded-lg border border-indigo-500/30 text-white hover:bg-indigo-500/10 transition-all duration-300"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

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

<style scoped>
/* Keep existing animations but adjust for horizontal cards */
.space-y-6 > div {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

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

/* Stagger animations for cards */
.space-y-6 > div:nth-child(1) { animation-delay: 0.1s; }
.space-y-6 > div:nth-child(2) { animation-delay: 0.2s; }
.space-y-6 > div:nth-child(3) { animation-delay: 0.3s; }
.space-y-6 > div:nth-child(4) { animation-delay: 0.4s; }
.space-y-6 > div:nth-child(5) { animation-delay: 0.5s; }
.space-y-6 > div:nth-child(6) { animation-delay: 0.6s; }

/* Hover effects */
.space-y-6 > div:hover {
  box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.3);
}
</style>
