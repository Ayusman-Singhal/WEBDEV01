<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-4">
        Teacher Dashboard
      </h1>
      
      <!-- Subscription Card -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold text-white">Current Plan</h3>
              <p class="text-indigo-300">Institute Package</p>
            </div>
            <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
              Active
            </span>
          </div>
          
          <!-- Subscription Progress -->
          <div class="mb-4">
            <div class="flex justify-between text-sm text-blue-100/80 mb-2">
              <span>Time Remaining</span>
              <span>23 days</span>
            </div>
            <div class="w-full bg-white/5 rounded-full h-2">
              <div class="bg-indigo-500 h-2 rounded-full" style="width: 75%"></div>
            </div>
          </div>

          <button class="w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
            Renew Plan
          </button>
        </div>

        <!-- Stats Cards -->
        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Profile Stats</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-blue-100/80">Profile Views</span>
              <span class="text-white font-medium">324</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-blue-100/80">Contact Requests</span>
              <span class="text-white font-medium">12</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-blue-100/80">Average Rating</span>
              <span class="text-white font-medium">4.8/5</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Reviews -->
      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
        <h3 class="text-xl font-semibold text-white mb-6">Recent Reviews</h3>
        <div class="space-y-6">
          <div v-for="review in recentReviews" :key="review.id" class="border-b border-white/10 last:border-0 pb-6 last:pb-0">
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-3">
                <img :src="review.studentAvatar" :alt="review.studentName" class="w-10 h-10 rounded-full">
                <div>
                  <h4 class="text-white font-medium">{{ review.studentName }}</h4>
                  <p class="text-sm text-blue-100/60">{{ review.date }}</p>
                </div>
              </div>
              <div class="flex items-center">
                <span class="text-yellow-400">★</span>
                <span class="text-white ml-1">{{ review.rating }}</span>
              </div>
            </div>
            <p class="text-blue-100/80">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const recentReviews = ref([
  {
    id: 1,
    studentName: 'Rahul Sharma',
    studentAvatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment: 'Excellent teaching method. Very patient and explains concepts clearly.',
    date: '2 days ago'
  },
  {
    id: 2,
    studentName: 'Priya Patel',
    studentAvatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4.5,
    comment: 'Great at explaining complex topics in a simple way.',
    date: '1 week ago'
  },
  {
    id: 3,
    studentName: 'Amit Kumar',
    studentAvatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    comment: 'Very knowledgeable and helpful. Highly recommended!',
    date: '2 weeks ago'
  }
])
</script> 