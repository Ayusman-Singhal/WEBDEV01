<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked Questions
      </h1>
      
      <div class="space-y-6">
        <div v-for="(faq, index) in faqs" 
             :key="index" 
             class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {{ faq.question }}
          </h3>
          <p class="text-gray-600">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  setup() {
    const faqs = [
      {
        question: 'How do I become a tutor?',
        answer: 'To become a tutor, click the "Join Us" or "Become a tutor" button and fill out the application form. We\'ll review your application and get back to you shortly.'
      },
      {
        question: 'What qualifications do I need?',
        answer: 'You should have expertise in your subject area and be able to provide proof of your qualifications. Teaching experience is preferred but not always required.'
      },
      // Add more FAQs as needed
    ]

    return {
      faqs
    }
  }
}
</script>