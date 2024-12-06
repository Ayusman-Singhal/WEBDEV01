<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/api'

const router = useRouter()
const error = ref('')
const loading = ref(false)

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  grade: '',
  subjects: []
})

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
      userType: 'student',
      profile: {
        grade: form.value.grade,
        subjects: form.value.subjects
      }
    }

    const response = await authService.register(userData)
    
    localStorage.setItem('token', response.token)
    localStorage.setItem('userType', 'student')
    localStorage.setItem('userData', JSON.stringify(response.user))

    router.push({ name: 'StudentProfilePage' })
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>

<!-- Add your template here similar to BecomeTutor.vue but with student-specific fields --> 