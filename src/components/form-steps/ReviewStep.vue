<template>
  <div class="space-y-6">
    <div class="flex items-center space-x-2">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-2xl font-semibold text-gray-900">Review Your Application</h3>
    </div>

    <!-- Personal Information -->
    <div class="bg-gray-50 rounded-lg p-4">
      <h4 class="text-lg font-medium text-gray-900 mb-4">Personal Information</h4>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium text-gray-500">Full Name</p>
          <p class="mt-1">{{ form.name }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Email</p>
          <p class="mt-1">{{ form.email }}</p>
        </div>
      </div>
    </div>

    <!-- Verification -->
    <div class="bg-gray-50 rounded-lg p-4">
      <h4 class="text-lg font-medium text-gray-900 mb-4">Verification</h4>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium text-gray-500">ID Type</p>
          <p class="mt-1 capitalize">{{ formatIdType(form.govtIdType) }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">ID Number</p>
          <p class="mt-1">{{ form.govtIdNumber }}</p>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium text-gray-500">ID Photo</p>
          <img v-if="form.idPhotoUrl" :src="form.idPhotoUrl" class="mt-2 h-32 w-auto object-cover rounded" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Selfie</p>
          <img v-if="form.selfieUrl" :src="form.selfieUrl" class="mt-2 h-32 w-auto object-cover rounded" />
        </div>
      </div>
    </div>

    <!-- Teaching Information -->
    <div class="bg-gray-50 rounded-lg p-4">
      <h4 class="text-lg font-medium text-gray-900 mb-4">Teaching Information</h4>
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-gray-500">Subjects</p>
          <div class="mt-1 flex flex-wrap gap-2">
            <span 
              v-for="subject in selectedSubjects" 
              :key="subject"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {{ formatSubject(subject) }}
            </span>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Teaching Experience</p>
          <p class="mt-1">{{ formatExperience(form.teachingExperience) }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Hourly Rate</p>
          <p class="mt-1">${{ form.hourlyRate }}/hour</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Introduction</p>
          <p class="mt-1">{{ form.introduction }}</p>
        </div>
        <div v-if="form.certificates.length">
          <p class="text-sm font-medium text-gray-500">Certificates</p>
          <ul class="mt-1 list-disc list-inside">
            <li v-for="cert in form.certificates" :key="cert.name" class="text-sm">
              {{ cert.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Availability -->
    <div class="bg-gray-50 rounded-lg p-4">
      <h4 class="text-lg font-medium text-gray-900 mb-4">Availability</h4>
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-gray-500">Time Zone</p>
          <p class="mt-1">{{ form.timeZone }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Weekly Schedule</p>
          <div class="mt-2 space-y-2">
            <div v-for="day in weekDays" :key="day.value" v-if="form.availability[day.value].enabled">
              <p class="font-medium">{{ day.label }}</p>
              <ul class="ml-4 space-y-1">
                <li v-for="(slot, index) in form.availability[day.value].timeSlots" :key="index">
                  {{ formatTime(slot.start) }} - {{ formatTime(slot.end) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Notice Period</p>
          <p class="mt-1">{{ form.noticePeriod }} hours</p>
        </div>
      </div>
    </div>

    <!-- Terms and Conditions -->
    <div class="space-y-4">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="terms"
            v-model="form.acceptedTerms"
            type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>
        <div class="ml-3">
          <label for="terms" class="text-sm text-gray-700">
            I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms and Conditions</a> and 
            <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
          </label>
        </div>
      </div>
      <p v-if="errors.acceptedTerms" class="mt-1 text-sm text-red-500">{{ errors.acceptedTerms }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewStep',
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
  data() {
    return {
      weekDays: [
        { value: 'monday', label: 'Monday' },
        { value: 'tuesday', label: 'Tuesday' },
        { value: 'wednesday', label: 'Wednesday' },
        { value: 'thursday', label: 'Thursday' },
        { value: 'friday', label: 'Friday' },
        { value: 'saturday', label: 'Saturday' },
        { value: 'sunday', label: 'Sunday' }
      ]
    }
  },
  computed: {
    selectedSubjects() {
      return this.form.subjects || []
    }
  },
  methods: {
    formatIdType(type) {
      if (!type) return ''
      return type.replace('_', ' ')
    },
    formatSubject(subject) {
      const subjects = {
        math: 'Mathematics',
        science: 'Science',
        english: 'English',
        history: 'History',
        programming: 'Programming',
        music: 'Music',
        art: 'Art',
        languages: 'Foreign Languages'
      }
      return subjects[subject] || subject
    },
    formatExperience(exp) {
      const experiences = {
        '0-1': 'Less than 1 year',
        '1-3': '1-3 years',
        '3-5': '3-5 years',
        '5+': 'More than 5 years'
      }
      return experiences[exp] || exp
    },
    formatTime(time) {
      if (!time) return ''
      return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    }
  }
}
</script> 