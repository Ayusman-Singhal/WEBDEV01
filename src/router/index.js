import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import Cart from '../components/Cart.vue'
import PageListingPage from '../components/PageListingPage.vue'
import Wishlist from '../components/Wishlist.vue'
import Profile from '../components/Profile.vue'

const routes = [
  { path: '/', component: LandingPage, name: 'LandingPage' },
  { path: '/cart', component: Cart, name: 'Cart' },
  { path: '/shop', component: PageListingPage, name: 'PageListingPage' },
  { path: '/profile', component: Profile, name: 'Profile' },
  { path: '/wishlist', component: Wishlist, name: 'Wishlist' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
