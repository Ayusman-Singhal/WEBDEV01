<template>
  <Transition name="modal">
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <!-- Blurred Overlay -->
      <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" @click="closeForm"></div>
      
      <!-- Form Content -->
      <div class="relative min-h-screen flex items-center justify-center p-4">
        <div class="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl">
          <!-- Form Header -->
          <div class="text-center p-8 border-b border-gray-200">
            <h2 class="text-3xl font-bold text-gray-900">Tutor Application Form</h2>
            <p class="mt-2 text-gray-600">Step {{ currentStep }} of {{ totalSteps }}</p>
            
            <!-- Progress Bar -->
            <div class="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  :style="{ width: `${(currentStep / totalSteps) * 100}%` }">
              </div>
            </div>
          </div>

          <!-- Form Content -->
          <div class="p-8">
            <form @submit.prevent="handleSubmit">
              <!-- Step Components -->
              <PersonalInfoStep
                v-if="currentStep === 1"
                v-model:form="formData"
                :errors="errors"
              />

              <VerificationStep
                v-if="currentStep === 2"
                v-model:form="formData"
                :errors="errors"
                @update:photo="handlePhotoUpdate"
              />

              <TeachingInfoStep
                v-if="currentStep === 3"
                v-model:form="formData"
                :errors="errors"
              />

              <AvailabilityStep
                v-if="currentStep === 4"
                v-model:form="formData"
                :errors="errors"
              />

              <ReviewStep
                v-if="currentStep === 5"
                :form="formData"
                :errors="errors"
              />
            </form>
          </div>

          <!-- Form Footer -->
          <div class="px-8 py-4 bg-gray-50 rounded-b-xl border-t border-gray-200">
            <div class="flex justify-between items-center">
              <button 
                @click="closeForm"
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                Cancel
              </button>
              
              <div class="flex space-x-3">
                <button
                  v-if="currentStep > 1"
                  @click="previousStep"
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <button
                  v-if="currentStep < totalSteps"
                  @click="nextStep"
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
                >
                  Next
                </button>
                
                <button
                  v-else
                  type="submit"
                  :disabled="isSubmitting"
                  class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 disabled:opacity-50"
                  @click="handleSubmit"
                >
                  {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Success Modal -->
  <Transition name="modal">
    <div v-if="showSuccessModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" @click="handleSuccessClose"></div>
      <div class="relative min-h-screen flex items-center justify-center p-4">
        <div class="relative bg-white rounded-lg p-8 max-w-md w-full text-center">
          <div class="w-16 h-16 mx-auto mb-4 text-green-500">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
          <p class="text-gray-600 mb-6">
            Thank you for applying to be a tutor. We'll review your application and get back to you soon.
          </p>
          <button
            @click="handleSuccessClose"
            class="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive } from 'vue'
import PersonalInfoStep from './form-steps/PersonalInfoStep.vue'
import VerificationStep from './form-steps/VerificationStep.vue'
import TeachingInfoStep from './form-steps/TeachingInfoStep.vue'
import AvailabilityStep from './form-steps/AvailabilityStep.vue'
import ReviewStep from './form-steps/ReviewStep.vue'

export default {
  name: 'TutorApplicationForm',
  components: {
    PersonalInfoStep,
    VerificationStep,
    TeachingInfoStep,
    AvailabilityStep,
    ReviewStep
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const currentStep = ref(1)
    const totalSteps = 5
    const isSubmitting = ref(false)
    const showSuccessModal = ref(false)
    const errors = ref({})

    const formData = reactive({
      // Personal Info
      name: '',
      email: '',
      password: '',
      confirmPassword: '',

      // Verification
      govtIdType: '',
      govtIdNumber: '',
      idPhotoUrl: null,
      selfieUrl: null,

      // Teaching Info
      subjects: [],
      teachingExperience: '',
      introduction: '',
      hourlyRate: '',
      certificates: [],

      // Availability
      timeZone: '',
      availability: {
        monday: { enabled: false, timeSlots: [] },
        tuesday: { enabled: false, timeSlots: [] },
        wednesday: { enabled: false, timeSlots: [] },
        thursday: { enabled: false, timeSlots: [] },
        friday: { enabled: false, timeSlots: [] },
        saturday: { enabled: false, timeSlots: [] },
        sunday: { enabled: false, timeSlots: [] }
      },
      noticePeriod: '',

      // Terms
      acceptedTerms: false
    })

    const validateStep = () => {
      errors.value = {}
      let isValid = true

      switch (currentStep.value) {
        case 1:
          if (!formData.name) {
            errors.value.name = 'Name is required'
            isValid = false
          }
          if (!formData.email) {
            errors.value.email = 'Email is required'
            isValid = false
          }
          if (!formData.password) {
            errors.value.password = 'Password is required'
            isValid = false
          }
          if (formData.password !== formData.confirmPassword) {
            errors.value.confirmPassword = 'Passwords do not match'
            isValid = false
          }
          break

        case 2:
          if (!formData.govtIdType) {
            errors.value.govtIdType = 'ID type is required'
            isValid = false
          }
          if (!formData.govtIdNumber) {
            errors.value.govtIdNumber = 'ID number is required'
            isValid = false
          }
          if (!formData.idPhotoUrl) {
            errors.value.idPhotoUrl = 'ID photo is required'
            isValid = false
          }
          if (!formData.selfieUrl) {
            errors.value.selfieUrl = 'Selfie is required'
            isValid = false
          }
          break

        case 3:
          if (!formData.subjects.length) {
            errors.value.subjects = 'Please select at least one subject'
            isValid = false
          }
          if (!formData.teachingExperience) {
            errors.value.teachingExperience = 'Teaching experience is required'
            isValid = false
          }
          if (!formData.hourlyRate) {
            errors.value.hourlyRate = 'Hourly rate is required'
            isValid = false
          }
          break

        case 4:
          if (!formData.timeZone) {
            errors.value.timeZone = 'Time zone is required'
            isValid = false
          }
          let hasTimeSlots = false
          for (const day in formData.availability) {
            if (formData.availability[day].enabled && formData.availability[day].timeSlots.length > 0) {
              hasTimeSlots = true
              break
            }
          }
          if (!hasTimeSlots) {
            errors.value.availability = 'Please set at least one time slot'
            isValid = false
          }
          break

        case 5:
          if (!formData.acceptedTerms) {
            errors.value.acceptedTerms = 'You must accept the terms and conditions'
            isValid = false
          }
          break
      }

      return isValid
    }

    const nextStep = () => {
      if (validateStep()) {
        currentStep.value++
      }
    }

    const previousStep = () => {
      currentStep.value--
    }

    const handleSubmit = async () => {
      if (!validateStep()) return

      isSubmitting.value = true
      try {
        // Here you would typically make an API call to submit the form
        await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
        showSuccessModal.value = true
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    const handlePhotoUpdate = ({ key, file }) => {
      // Here you would typically handle file upload to your server
      console.log(`Updating ${key} with file:`, file)
    }

    const closeForm = () => {
      emit('close')
    }

    const handleSuccessClose = () => {
      showSuccessModal.value = false
      closeForm()
    }

    return {
      currentStep,
      totalSteps,
      formData,
      errors,
      isSubmitting,
      showSuccessModal,
      nextStep,
      previousStep,
      handleSubmit,
      handlePhotoUpdate,
      closeForm,
      handleSuccessClose
    }
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.upload-area {
  @apply cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 transition-colors;
}

.upload-area:hover {
  @apply border-blue-500;
}
</style> 