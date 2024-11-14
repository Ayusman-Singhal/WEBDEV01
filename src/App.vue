<script setup>
  import LandingPage from './components/LandingPage.vue'
  import Cart from './components/Cart.vue'
  import Navbar from './components/Navbar.vue';
  import MainFoot from './components/MainFoot.vue'
  import { ref } from 'vue';

  let variable = ref(0);
</script>

<template>
  <div>
    <Navbar msg="Fabrics"/>
    
    <router-view></router-view>
    
    <MainFoot />
  </div>
  
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
