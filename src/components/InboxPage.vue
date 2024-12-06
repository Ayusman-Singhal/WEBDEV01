<script setup>
import { ref } from 'vue'

const selectedChat = ref(null)
const newMessage = ref('')

const chats = ref([
  {
    id: 1,
    tutor: {
      name: 'Dr. Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      status: 'online'
    },
    lastMessage: 'When would you like to schedule the next session?',
    timestamp: '2:30 PM',
    unread: 2,
    messages: [
      {
        id: 1,
        sender: 'tutor',
        content: 'Hello! How can I help you with mathematics today?',
        timestamp: '2:15 PM'
      },
      {
        id: 2,
        sender: 'student',
        content: 'Hi Dr. Johnson! I need help with calculus derivatives.',
        timestamp: '2:20 PM'
      },
      {
        id: 3,
        sender: 'tutor',
        content: 'I can definitely help you with that. Would you like to schedule a session?',
        timestamp: '2:25 PM'
      },
      {
        id: 4,
        sender: 'tutor',
        content: 'When would you like to schedule the next session?',
        timestamp: '2:30 PM'
      }
    ]
  },
  {
    id: 2,
    tutor: {
      name: 'Prof. Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=2',
      status: 'offline'
    },
    lastMessage: 'The quantum mechanics homework has been reviewed.',
    timestamp: '1:45 PM',
    unread: 0,
    messages: [
      {
        id: 1,
        sender: 'tutor',
        content: 'I have reviewed your quantum mechanics homework.',
        timestamp: '1:30 PM'
      },
      {
        id: 2,
        sender: 'tutor',
        content: 'The quantum mechanics homework has been reviewed.',
        timestamp: '1:45 PM'
      }
    ]
  }
])

function selectChat(chat) {
  selectedChat.value = chat
  chat.unread = 0 // Mark messages as read
}

function sendMessage() {
  if (!newMessage.value.trim()) return

  selectedChat.value.messages.push({
    id: selectedChat.value.messages.length + 1,
    sender: 'student',
    content: newMessage.value,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })

  selectedChat.value.lastMessage = newMessage.value
  selectedChat.value.timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  
  newMessage.value = ''
}
</script>

<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-8">
        Messages
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Chat List -->
        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div class="p-4 border-b border-white/10">
            <input 
              type="text" 
              placeholder="Search conversations..." 
              class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-indigo-500/50"
            >
          </div>
          
          <div class="divide-y divide-white/10">
            <div 
              v-for="chat in chats" 
              :key="chat.id"
              @click="selectChat(chat)"
              class="p-4 hover:bg-white/5 cursor-pointer transition-colors duration-200"
              :class="{ 'bg-white/5': selectedChat?.id === chat.id }"
            >
              <div class="flex items-center gap-4">
                <div class="relative">
                  <img 
                    :src="chat.tutor.avatar" 
                    :alt="chat.tutor.name"
                    class="w-12 h-12 rounded-full object-cover"
                  >
                  <div 
                    class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900"
                    :class="chat.tutor.status === 'online' ? 'bg-green-400' : 'bg-gray-400'"
                  ></div>
                </div>
                
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-start">
                    <h3 class="text-white font-medium truncate">{{ chat.tutor.name }}</h3>
                    <span class="text-sm text-white/50">{{ chat.timestamp }}</span>
                  </div>
                  <p class="text-white/70 text-sm truncate">{{ chat.lastMessage }}</p>
                </div>
                
                <div v-if="chat.unread" class="ml-2">
                  <span class="px-2 py-1 rounded-full text-xs bg-indigo-500 text-white">
                    {{ chat.unread }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Window -->
        <div class="md:col-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl flex flex-col">
          <div v-if="selectedChat" class="flex-1 flex flex-col h-[600px]">
            <!-- Chat Header -->
            <div class="p-4 border-b border-white/10 flex items-center gap-4">
              <img 
                :src="selectedChat.tutor.avatar" 
                :alt="selectedChat.tutor.name"
                class="w-10 h-10 rounded-full object-cover"
              >
              <div>
                <h3 class="text-white font-medium">{{ selectedChat.tutor.name }}</h3>
                <p class="text-sm text-white/50 capitalize">{{ selectedChat.tutor.status }}</p>
              </div>
            </div>

            <!-- Messages -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4">
              <div 
                v-for="message in selectedChat.messages" 
                :key="message.id"
                class="flex"
                :class="message.sender === 'student' ? 'justify-end' : 'justify-start'"
              >
                <div 
                  class="max-w-[70%] rounded-lg px-4 py-2"
                  :class="message.sender === 'student' ? 
                    'bg-indigo-500 text-white' : 
                    'bg-white/10 text-white'"
                >
                  <p>{{ message.content }}</p>
                  <span class="text-xs opacity-70 mt-1 block">{{ message.timestamp }}</span>
                </div>
              </div>
            </div>

            <!-- Message Input -->
            <div class="p-4 border-t border-white/10">
              <form @submit.prevent="sendMessage" class="flex gap-4">
                <input 
                  v-model="newMessage"
                  type="text" 
                  placeholder="Type your message..." 
                  class="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-indigo-500/50"
                >
                <button 
                  type="submit"
                  class="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div v-else class="h-[600px] flex items-center justify-center text-white/50">
            Select a conversation to start messaging
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for messages */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(99, 102, 241, 0.5) rgba(255, 255, 255, 0.1);
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(99, 102, 241, 0.5);
  border-radius: 3px;
}
</style> 