<template>
  <div class="space-y-6">
    <div class="flex items-center space-x-2">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <h3 class="text-2xl font-semibold text-gray-900">Personal Information</h3>
    </div>

    <!-- Name -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Full Name <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        v-model="form.name"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter your full name"
      />
      <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
    </div>

    <!-- Email -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Email Address <span class="text-red-500">*</span>
      </label>
      <input
        type="email"
        v-model="form.email"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="you@example.com"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
    </div>

    <!-- Password -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Password <span class="text-red-500">*</span>
      </label>
      <div class="relative">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="form.password"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter your password"
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute inset-y-0 right-0 px-3 flex items-center"
        >
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              v-if="showPassword"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              v-if="showPassword"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </button>
      </div>
      <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ errors.password }}</p>
    </div>

    <!-- Confirm Password -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Confirm Password <span class="text-red-500">*</span>
      </label>
      <div class="relative">
        <input
          :type="showConfirmPassword ? 'text' : 'password'"
          v-model="form.confirmPassword"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Confirm your password"
        />
        <button
          type="button"
          @click="showConfirmPassword = !showConfirmPassword"
          class="absolute inset-y-0 right-0 px-3 flex items-center"
        >
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              v-if="showConfirmPassword"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              v-if="showConfirmPassword"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </button>
      </div>
      <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-500">{{ errors.confirmPassword }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PersonalInfoStep',
  props: {
    form: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const showPassword = ref(false)
    const showConfirmPassword = ref(false)

    return {
      showPassword,
      showConfirmPassword
    }
  }
}
</script> 