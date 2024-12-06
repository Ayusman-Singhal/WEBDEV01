import { createApp } from 'vue'
// import './style.css'
import router from './router';
import './assets/tailwind.css'
import App from './App.vue'

// createApp(App).mount('#app')


const app = createApp(App);
app.use(router);
app.mount('#app');