<template>
  <div class="space-y-6">
    <div class="flex items-center space-x-2">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <h3 class="text-2xl font-semibold text-gray-900">Availability</h3>
    </div>

    <!-- Time Zone -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Your Time Zone <span class="text-red-500">*</span>
      </label>
      <select
        v-model="form.timeZone"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select Time Zone</option>
        <option v-for="tz in timeZones" :key="tz.value" :value="tz.value">
          {{ tz.label }}
        </option>
      </select>
      <p v-if="errors.timeZone" class="mt-1 text-sm text-red-500">{{ errors.timeZone }}</p>
    </div>

    <!-- Weekly Schedule -->
    <div class="space-y-4">
      <label class="block text-sm font-medium text-gray-700">
        Weekly Availability <span class="text-red-500">*</span>
      </label>
      <div class="space-y-4">
        <div v-for="day in weekDays" :key="day.value" class="border rounded-lg p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <input
                type="checkbox"
                :id="day.value"
                v-model="form.availability[day.value].enabled"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label :for="day.value" class="ml-2 block text-sm font-medium text-gray-700">
                {{ day.label }}
              </label>
            </div>
          </div>
          
          <div v-if="form.availability[day.value].enabled" class="space-y-4">
            <div v-for="(timeSlot, index) in form.availability[day.value].timeSlots" 
                 :key="index" 
                 class="flex items-center space-x-4">
              <div class="flex-1">
                <select
                  v-model="timeSlot.start"
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Start Time</option>
                  <option v-for="time in availableTimes" :key="time.value" :value="time.value">
                    {{ time.label }}
                  </option>
                </select>
              </div>
              <span class="text-gray-500">to</span>
              <div class="flex-1">
                <select
                  v-model="timeSlot.end"
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">End Time</option>
                  <option v-for="time in availableTimes" :key="time.value" :value="time.value"
                          :disabled="time.value <= timeSlot.start">
                    {{ time.label }}
                  </option>
                </select>
              </div>
              <button
                @click="removeTimeSlot(day.value, index)"
                class="text-red-500 hover:text-red-700"
                type="button"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <button
              @click="addTimeSlot(day.value)"
              type="button"
              class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Time Slot
            </button>
          </div>
        </div>
      </div>
      <p v-if="errors.availability" class="mt-1 text-sm text-red-500">{{ errors.availability }}</p>
    </div>

    <!-- Notice Period -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Booking Notice Period <span class="text-red-500">*</span>
      </label>
      <select
        v-model="form.noticePeriod"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select Notice Period</option>
        <option value="1">1 hour</option>
        <option value="2">2 hours</option>
        <option value="4">4 hours</option>
        <option value="8">8 hours</option>
        <option value="24">24 hours</option>
      </select>
      <p v-if="errors.noticePeriod" class="mt-1 text-sm text-red-500">{{ errors.noticePeriod }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailabilityStep',
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
      ],
      timeZones: [
        { value: 'UTC-12:00', label: '(UTC-12:00) International Date Line West' },
        { value: 'UTC-11:00', label: '(UTC-11:00) Coordinated Universal Time-11' },
        // Add more time zones as needed
        { value: 'UTC+12:00', label: '(UTC+12:00) Auckland, Wellington' }
      ],
      availableTimes: Array.from({ length: 48 }, (_, i) => {
        const hour = Math.floor(i / 2)
        const minute = (i % 2) * 30
        const value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        return {
          value,
          label: new Date(`2000-01-01T${value}`).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          })
        }
      })
    }
  },
  methods: {
    addTimeSlot(day) {
      if (!this.form.availability[day].timeSlots) {
        this.$set(this.form.availability[day], 'timeSlots', [])
      }
      this.form.availability[day].timeSlots.push({ start: '', end: '' })
    },
    removeTimeSlot(day, index) {
      this.form.availability[day].timeSlots.splice(index, 1)
    }
  }
}
</script> 