<template>
  <div class="space-y-6">
    <div class="flex items-center space-x-2">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <h3 class="text-2xl font-semibold text-gray-900">Verification</h3>
    </div>

    <!-- Government ID Type -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Government ID Type <span class="text-red-500">*</span>
      </label>
      <select
        v-model="form.govtIdType"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select ID Type</option>
        <option value="passport">Passport</option>
        <option value="drivers_license">Driver's License</option>
        <option value="national_id">National ID</option>
      </select>
      <p v-if="errors.govtIdType" class="mt-1 text-sm text-red-500">{{ errors.govtIdType }}</p>
    </div>

    <!-- Government ID Number -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        ID Number <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        v-model="form.govtIdNumber"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter your ID number"
      />
      <p v-if="errors.govtIdNumber" class="mt-1 text-sm text-red-500">{{ errors.govtIdNumber }}</p>
    </div>

    <!-- ID Photo Upload -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Upload ID Photo <span class="text-red-500">*</span>
      </label>
      <div
        class="upload-area"
        @dragover.prevent
        @drop.prevent="handleIdPhotoDrop"
        @click="$refs.idPhotoInput.click()"
      >
        <div v-if="!form.idPhotoUrl" class="text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="mt-1 text-sm text-gray-600">Click or drag and drop to upload ID photo</p>
        </div>
        <div v-else class="relative">
          <img :src="form.idPhotoUrl" class="h-32 w-auto object-cover rounded" />
          <button
            @click.stop="removeIdPhoto"
            class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <input
        ref="idPhotoInput"
        type="file"
        class="hidden"
        accept="image/*"
        @change="handleIdPhotoChange"
      />
      <p v-if="errors.idPhotoUrl" class="mt-1 text-sm text-red-500">{{ errors.idPhotoUrl }}</p>
    </div>

    <!-- Selfie Upload -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700">
        Upload Selfie <span class="text-red-500">*</span>
      </label>
      <div
        class="upload-area"
        @dragover.prevent
        @drop.prevent="handleSelfiePhotoDrop"
        @click="$refs.selfiePhotoInput.click()"
      >
        <div v-if="!form.selfieUrl" class="text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="mt-1 text-sm text-gray-600">Click or drag and drop to upload selfie</p>
        </div>
        <div v-else class="relative">
          <img :src="form.selfieUrl" class="h-32 w-auto object-cover rounded" />
          <button
            @click.stop="removeSelfiePhoto"
            class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <input
        ref="selfiePhotoInput"
        type="file"
        class="hidden"
        accept="image/*"
        @change="handleSelfiePhotoChange"
      />
      <p v-if="errors.selfieUrl" class="mt-1 text-sm text-red-500">{{ errors.selfieUrl }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerificationStep',
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
  methods: {
    handleIdPhotoChange(event) {
      const file = event.target.files[0]
      if (file) {
        this.uploadPhoto(file, 'idPhotoUrl')
      }
    },
    handleIdPhotoDrop(event) {
      const file = event.dataTransfer.files[0]
      if (file) {
        this.uploadPhoto(file, 'idPhotoUrl')
      }
    },
    handleSelfiePhotoChange(event) {
      const file = event.target.files[0]
      if (file) {
        this.uploadPhoto(file, 'selfieUrl')
      }
    },
    handleSelfiePhotoDrop(event) {
      const file = event.dataTransfer.files[0]
      if (file) {
        this.uploadPhoto(file, 'selfieUrl')
      }
    },
    uploadPhoto(file, urlKey) {
      // In a real application, you would upload to a server
      // For now, we'll just create a local URL
      const reader = new FileReader()
      reader.onload = (e) => {
        this.form[urlKey] = e.target.result
        this.$emit('update:photo', { key: urlKey, file })
      }
      reader.readAsDataURL(file)
    },
    removeIdPhoto() {
      this.form.idPhotoUrl = null
      this.$emit('update:photo', { key: 'idPhotoUrl', file: null })
    },
    removeSelfiePhoto() {
      this.form.selfieUrl = null
      this.$emit('update:photo', { key: 'selfieUrl', file: null })
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