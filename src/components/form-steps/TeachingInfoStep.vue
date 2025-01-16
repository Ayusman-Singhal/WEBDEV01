<template>
  <div class="space-y-6">
    <div class="flex items-center space-x-2">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
      <h3 class="text-2xl font-semibold text-gray-900">Teaching Information</h3>
    </div>

    <!-- Subjects -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Subjects You Can Teach <span class="text-red-500">*</span>
      </label>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="subject in availableSubjects" :key="subject.id" class="flex items-center">
          <input
            type="checkbox"
            :id="subject.id"
            v-model="form.subjects"
            :value="subject.id"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label :for="subject.id" class="ml-2 block text-sm text-gray-900">
            {{ subject.name }}
          </label>
        </div>
      </div>
      <p v-if="errors.subjects" class="mt-1 text-sm text-red-500">{{ errors.subjects }}</p>
    </div>

    <!-- Teaching Experience -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Teaching Experience <span class="text-red-500">*</span>
      </label>
      <select
        v-model="form.teachingExperience"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select Experience Level</option>
        <option value="0-1">Less than 1 year</option>
        <option value="1-3">1-3 years</option>
        <option value="3-5">3-5 years</option>
        <option value="5+">More than 5 years</option>
      </select>
      <p v-if="errors.teachingExperience" class="mt-1 text-sm text-red-500">{{ errors.teachingExperience }}</p>
    </div>

    <!-- Introduction -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Brief Introduction <span class="text-red-500">*</span>
      </label>
      <textarea
        v-model="form.introduction"
        rows="4"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Tell us about yourself and your teaching experience..."
      ></textarea>
      <p class="text-sm text-gray-500">{{ remainingChars }} characters remaining</p>
      <p v-if="errors.introduction" class="mt-1 text-sm text-red-500">{{ errors.introduction }}</p>
    </div>

    <!-- Hourly Rate -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Hourly Rate (USD) <span class="text-red-500">*</span>
      </label>
      <div class="relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          v-model="form.hourlyRate"
          min="5"
          max="200"
          class="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="0.00"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm">/hour</span>
        </div>
      </div>
      <p v-if="errors.hourlyRate" class="mt-1 text-sm text-red-500">{{ errors.hourlyRate }}</p>
    </div>

    <!-- Certifications -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Teaching Certifications
      </label>
      <div
        class="upload-area"
        @dragover.prevent
        @drop.prevent="handleCertificateDrop"
        @click="$refs.certificateInput.click()"
      >
        <div v-if="!form.certificates.length" class="text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V8" />
          </svg>
          <p class="mt-1 text-sm text-gray-600">Click or drag and drop to upload certificates</p>
        </div>
        <div v-else class="space-y-2">
          <div v-for="(cert, index) in form.certificates" :key="index" class="flex items-center justify-between bg-gray-50 p-2 rounded">
            <span class="text-sm text-gray-600">{{ cert.name }}</span>
            <button
              @click.stop="removeCertificate(index)"
              class="text-red-500 hover:text-red-700"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <input
        ref="certificateInput"
        type="file"
        multiple
        class="hidden"
        accept=".pdf,.jpg,.jpeg,.png"
        @change="handleCertificateChange"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TeachingInfoStep',
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
  setup(props) {
    const MAX_CHARS = 500
    const remainingChars = computed(() => {
      return MAX_CHARS - (props.form.introduction?.length || 0)
    })

    const availableSubjects = [
      { id: 'math', name: 'Mathematics' },
      { id: 'science', name: 'Science' },
      { id: 'english', name: 'English' },
      { id: 'history', name: 'History' },
      { id: 'programming', name: 'Programming' },
      { id: 'music', name: 'Music' },
      { id: 'art', name: 'Art' },
      { id: 'languages', name: 'Foreign Languages' }
    ]

    return {
      remainingChars,
      availableSubjects
    }
  },
  methods: {
    handleCertificateChange(event) {
      const files = Array.from(event.target.files)
      this.uploadCertificates(files)
    },
    handleCertificateDrop(event) {
      const files = Array.from(event.dataTransfer.files)
      this.uploadCertificates(files)
    },
    uploadCertificates(files) {
      files.forEach(file => {
        // In a real application, you would upload to a server
        // For now, we'll just add to the certificates array
        this.form.certificates.push({
          name: file.name,
          file
        })
      })
    },
    removeCertificate(index) {
      this.form.certificates.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.upload-area {
  @apply cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 transition-colors;
}

.upload-area:hover {
  @apply border-blue-500;
}
</style> 