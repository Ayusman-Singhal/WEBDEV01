import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../../services/api'

export default function becomeTutorScript() {
  const router = useRouter()
  const error = ref('')
  const loading = ref(false)
  const showForm = ref(false)
  const currentStep = ref(1)
  const videoRef = ref(null)
  const showCamera = ref(false)
  let stream = null

  const form = ref({
    // Personal Info (Step 1)
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    // Verification (Step 2)
    photo: null,
    photoUrl: null,
    govtIdType: '',
    govtIdNumber: '',
    govtIdName: '',
    
    // Education (Step 3)
    qualification: '',
    experience: '',
    certificates: [],
    
    // Teaching Details (Step 4)
    subjects: [],
    classes: [],
    extraActivities: [],
    
    // Self Description (Step 5)
    description: '',
    teachingExperience: '',
    achievements: '',
    teachingApproach: '',
    
    // Location (Step 6)
    city: '',
    teachingAreas: [],
    termsAccepted: false,
    cameraError: ''
  })

  const benefits = [
    {
      title: 'Flexible Schedule',
      description: 'Design your own teaching schedule. Work when and where you want.',
      icon: 'ClockIcon'
    },
    {
      title: 'Competitive Earnings',
      description: 'Set your own rates and earn what you deserve.',
      icon: 'CurrencyDollarIcon'
    },
    {
      title: 'Professional Growth',
      description: 'Access exclusive training resources and collaborate with experts.',
      icon: 'AcademicCapIcon'
    }
  ]

  const handleSubmit = async () => {
    try {
      if (form.value.password !== form.value.confirmPassword) {
        error.value = 'Passwords do not match'
        return
      }

      loading.value = true
      error.value = ''

      const userData = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        userType: 'teacher',
        profile: {
          // Add all the form fields here
          // ...form.value
        }
      }

      const response = await authService.register(userData)
      
      localStorage.setItem('token', response.token)
      localStorage.setItem('userType', 'teacher')
      localStorage.setItem('userData', JSON.stringify(response.user))

      router.push({ name: 'TeacherDashboard' })
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed'
    } finally {
      loading.value = false
    }
  }

  // Camera methods
  const startCamera = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      })
      
      if (videoRef.value) {
        videoRef.value.srcObject = stream
        videoRef.value.onloadedmetadata = () => {
          videoRef.value.play()
        }
      }
      showCamera.value = true
      form.value.cameraError = ''
    } catch (err) {
      console.error('Error accessing camera:', err)
      form.value.cameraError = 'Unable to access camera. Please ensure camera permissions are granted.'
    }
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      stream = null
    }
    if (videoRef.value) {
      videoRef.value.srcObject = null
    }
    showCamera.value = false
  }

  const capturePhoto = () => {
    if (!videoRef.value) return

    try {
      const canvas = document.createElement('canvas')
      canvas.width = videoRef.value.videoWidth
      canvas.height = videoRef.value.videoHeight
      
      const context = canvas.getContext('2d')
      context.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height)
      
      canvas.toBlob((blob) => {
        form.value.photo = blob
        form.value.photoUrl = URL.createObjectURL(blob)
        stopCamera()
      }, 'image/jpeg', 0.8)
    } catch (error) {
      console.error('Error capturing photo:', error)
      form.value.cameraError = 'Error capturing photo. Please try again.'
    }
  }

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      form.value.photo = file
      const reader = new FileReader()
      reader.onload = (e) => {
        form.value.photoUrl = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCertificateUpload = (event) => {
    const files = Array.from(event.target.files)
    form.value.certificates = files
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      currentStep.value++
    }
  }

  const previousStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }

  const validateCurrentStep = () => {
    switch (currentStep.value) {
      case 1:
        if (!form.value.name || !form.value.email || !form.value.password || !form.value.confirmPassword) {
          error.value = 'Please fill in all fields'
          return false
        }
        if (form.value.password !== form.value.confirmPassword) {
          error.value = 'Passwords do not match'
          return false
        }
        break

      case 2:
        if (!form.value.govtIdType || !form.value.govtIdNumber) {
          error.value = 'Please complete verification details'
          return false
        }
        break

      case 3:
        if (!form.value.qualification || !form.value.experience) {
          error.value = 'Please fill in education details'
          return false
        }
        break

      case 4:
        if (!form.value.subjects || form.value.subjects.length === 0) {
          error.value = 'Please select at least one subject'
          return false
        }
        break

      case 5:
        if (!form.value.description || !form.value.teachingExperience) {
          error.value = 'Please fill in your description and teaching experience'
          return false
        }
        break
    }
    error.value = ''
    return true
  }

  // Clean up on component unmount
  onUnmounted(() => {
    stopCamera()
  })

  return {
    error,
    loading,
    showForm,
    currentStep,
    form,
    videoRef,
    showCamera,
    benefits,
    handleSubmit,
    handlePhotoUpload,
    handleCertificateUpload,
    startCamera,
    stopCamera,
    capturePhoto,
    nextStep,
    previousStep,
    validateCurrentStep
  }
} 