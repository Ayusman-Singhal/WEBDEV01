import { ref, computed } from 'vue'
import teamData from '../../data/team-members.json'

export default function aboutScript() {
  const categories = teamData.categories
  const members = teamData.members
  const selectedCategory = ref(categories[0])

  const filteredMembers = computed(() => {
    return members.filter(member => member.category === selectedCategory.value)
  })

  // Navigation handlers
  const handleNavigation = (type) => {
    window.open(`https://www.google.com/search?q=tutor+${type.replace('-', '+')}`, '_blank')
  }

  const handleCityNavigation = (city) => {
    window.open(`https://www.google.com/search?q=tutors+in+${city}`, '_blank')
  }

  const handleCategoryNavigation = (category) => {
    window.open(`https://www.google.com/search?q=${category}+tutoring`, '_blank')
  }

  const handleClassNavigation = (classNumber) => {
    window.open(`https://www.google.com/search?q=class+${classNumber}+tutoring`, '_blank')
  }

  const handleSubjectNavigation = (subject) => {
    window.open(`https://www.google.com/search?q=${subject}+tutor`, '_blank')
  }

  const handleOtherNavigation = (type) => {
    switch(type) {
      case 'about':
        router.push('/about')
        break
      case 'ambassador':
        router.push('/student-ambassador')
        break
      case 'careers':
        router.push('/careers')
        break
      case 'culture':
        router.push('/culture')
        break
      case 'media':
        router.push('/media')
        break
      case 'terms':
        router.push('/terms')
        break
      default:
        router.push('/')
    }
  }

  return {
    categories,
    selectedCategory,
    filteredMembers,
    handleNavigation,
    handleCityNavigation,
    handleCategoryNavigation,
    handleClassNavigation,
    handleSubjectNavigation,
    handleOtherNavigation
  }
} 