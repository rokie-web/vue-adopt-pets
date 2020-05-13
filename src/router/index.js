import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    component: () => import('../views/Cats.vue')
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import('../views/Dogs.vue')
  },
  {
    path: '/pets/:id',
    name: 'Pet',
    component: () => import('../views/Pet.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
