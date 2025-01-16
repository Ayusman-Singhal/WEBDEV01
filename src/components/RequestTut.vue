<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-white">
    <!-- Hero Section -->
    <section class="section-light max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your Perfect Tutor
        </h1>
        <p class="text-xl text-gray-600">
          Search for tutors based on your learning needs.
        </p>
      </div>

      <!-- Filter Section -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Subject</label>
            <select v-model="filters.subject" class="filter-select">
              <option value="">All Subjects</option>
              <option v-for="subject in subjects" :key="subject" :value="subject">
                {{ subject }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Price Range</label>
            <select v-model="filters.priceRange" class="filter-select">
              <option value="">Any Price</option>
              <option value="0-50">$0 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101+">$101+</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Rating</label>
            <select v-model="filters.rating" class="filter-select">
              <option value="">Any Rating</option>
              <option value="4.0">4.0+</option>
              <option value="4.5">4.5+</option>
              <option value="5.0">5.0</option>
            </select>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button @click="applyFilters" class="cta-button primary">
            Apply Filters
          </button>
        </div>
      </div>
    </section>

    <!-- Available Tutors Section -->
    <section class="section-dark py-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Available Tutors</h2>
      <div class="max-w-7xl mx-auto px-6">
        <ul class="space-y-4">
          <li v-for="(tutor, index) in filteredTutors" :key="index" class="tutor-list-item">
            <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
              <div>
                <h3 class="text-lg font-semibold text-gray-800">{{ tutor.name }}</h3>
                <p class="text-sm text-gray-600">{{ tutor.subject }}</p>
              </div>
              <div class="flex items-center">
                <span class="text-yellow-400">
                  <span v-for="star in Math.round(tutor.rating)" :key="star">★</span>
                </span>
                <button @click="viewProfile(tutor)" class="view-button ml-4">Details</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filters = ref({
  subject: '',
  priceRange: '',
  rating: ''
});

const subjects = ['Mathematics', 'Physics', 'English Literature', 'Chemistry', 'Biology'];

const tutors = ref([
  {
    name: 'Sarah Anderson',
    subject: 'Mathematics',
    availability: 'Available Now',
    hourlyRate: 45,
    rating: 4.8,
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Michael Chen',
    subject: 'Physics',
    availability: 'Available Today',
    hourlyRate: 50,
    rating: 4.9,
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    name: 'Emma Wilson',
    subject: 'English Literature',
    availability: 'Available Weekend',
    hourlyRate: 40,
    rating: 4.7,
    avatar: 'https://i.pravatar.cc/150?img=3'
  }
]);

const filteredTutors = computed(() => {
  return tutors.value.filter(tutor => {
    const matchesSubject = filters.value.subject ? tutor.subject === filters.value.subject : true;
    const matchesPrice = filters.value.priceRange ? 
      (filters.value.priceRange === '0-50' ? tutor.hourlyRate <= 50 :
      filters.value.priceRange === '51-100' ? (tutor.hourlyRate > 50 && tutor.hourlyRate <= 100) :
      tutor.hourlyRate > 100) : true;
    const matchesRating = filters.value.rating ? tutor.rating >= parseFloat(filters.value.rating) : true;

    return matchesSubject && matchesPrice && matchesRating;
  });
});

const applyFilters = () => {
  console.log('Filters applied:', filters.value);
};

const viewProfile = (tutor) => {
  console.log('Viewing profile for:', tutor.name);
};
</script>

<style scoped>
/* Base Layout */
.min-h-screen {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8fafc, #ffffff);
}

/* Section Styles */
.section-light {
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
}

/* Header Styles */
.text-center {
  text-align: center;
}

.header-title {
  font-size: 2.5rem; /* Equivalent to text-4xl */
  font-weight: 700;
  color: #111827; /* Equivalent to text-gray-900 */
  margin-bottom: 1rem;
}

.header-subtitle {
  font-size: 1.25rem; /* Equivalent to text-xl */
  color: #4b5563; /* Equivalent to text-gray-600 */
}

/* Filter Section */
.filters-container {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb; /* Equivalent to border-gray-100 */
  margin-bottom: 3rem;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-label {
  font-size: 0.875rem; /* Equivalent to text-sm */
  font-weight: 500;
  color: #374151; /* Equivalent to text-gray-700 */
}

.filter-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb; /* Equivalent to border-gray-200 */
  background-color: white;
  color: #111827; /* Equivalent to text-gray-900 */
  appearance: none;
  transition: all 0.3s ease;
}

.filter-select:focus {
  border-color: #3b82f6; /* Equivalent to border-blue-500 */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); /* Equivalent to focus:ring-2 focus:ring-blue-200 */
  outline: none;
}

/* Available Tutors Section */
.tutor-list-item {
  transition: transform 0.3s;
}

.tutor-list-item:hover {
  transform: translateY(-0.1rem);
}

.view-button {
  padding: 0.5rem 1rem;
  background-color: #2563eb; /* Equivalent to bg-blue-600 */
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.view-button:hover {
  background-color: #1d4ed8; /* Equivalent to hover:bg-blue-700 */
}

/* Responsive Design */
@media (min-width: 768px) {
  .filters-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
