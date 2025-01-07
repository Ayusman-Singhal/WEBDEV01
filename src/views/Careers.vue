<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-6">
          Open Roles
        </h1>
        <p class="text-xl text-blue-100/80 max-w-3xl mx-auto">
          Join us in shaping the future of education
        </p>
      </div>

      <!-- Filters -->
      <div class="mb-12 flex flex-wrap gap-4">
        <select v-model="selectedTeam" class="bg-white/5 text-blue-100 rounded-lg px-4 py-2 border border-white/10">
          <option value="">All Teams</option>
          <option v-for="team in teams" :key="team" :value="team">{{ team }}</option>
        </select>

        <select v-model="selectedLocation" class="bg-white/5 text-blue-100 rounded-lg px-4 py-2 border border-white/10">
          <option value="">All Offices</option>
          <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
        </select>
      </div>

      <!-- Job Categories -->
      <div class="space-y-6">
        <div v-for="category in filteredCategories" :key="category.name" class="border-b border-white/10 pb-6">
          <div class="flex items-center justify-between mb-6 cursor-pointer" @click="toggleCategory(category.name)">
            <div>
              <h2 class="text-2xl font-bold text-white">{{ category.name }}</h2>
              <p class="text-blue-100/60">{{ category.openings }} Open Role{{ category.openings !== 1 ? 's' : '' }}</p>
            </div>
            <svg 
              class="w-6 h-6 text-blue-100/60 transition-transform duration-300"
              :class="{ 'rotate-180': openCategories.includes(category.name) }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Job Listings -->
          <div v-show="openCategories.includes(category.name)" class="space-y-4">
            <div 
              v-for="job in category.jobs" 
              :key="job.title"
              class="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">{{ job.title }}</h3>
                  <p class="text-blue-100/60">{{ job.locations.join(' | ') }}</p>
                </div>
                <button class="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedTeam = ref('')
const selectedLocation = ref('')
const openCategories = ref([])

const teams = [
  'Communications & Marketing',
  'Data Science & Analytics',
  'Finance',
  'Large Language Model Organization',
  'Leadership',
  'Legal',
  'People',
  'Product'
]

const locations = ['San Francisco, CA', 'New York City, NY', 'Seattle, WA']

const jobCategories = [
  {
    name: 'Communications & Marketing',
    openings: 5,
    jobs: [
      {
        title: 'Brand Designer, Marketing',
        locations: ['San Francisco, CA', 'New York City, NY', 'Seattle, WA']
      },
      {
        title: 'Consumer Communications Lead',
        locations: ['San Francisco, CA', 'New York City, NY', 'Seattle, WA']
      },
      // Add more jobs as needed
    ]
  },
  // Add more categories as needed
]

const filteredCategories = computed(() => {
  return jobCategories.filter(category => {
    if (selectedTeam.value && category.name !== selectedTeam.value) return false
    if (selectedLocation.value) {
      return category.jobs.some(job => job.locations.includes(selectedLocation.value))
    }
    return true
  })
})

const toggleCategory = (categoryName) => {
  const index = openCategories.value.indexOf(categoryName)
  if (index === -1) {
    openCategories.value.push(categoryName)
  } else {
    openCategories.value.splice(index, 1)
  }
}
</script> 