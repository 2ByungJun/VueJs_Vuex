import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from '../views/Vuex.vue'
import About from '../views/About.vue'
import About1 from '../views/About1.vue'
import About2 from '../views/About2.vue'
import Getter from '../views/Getter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about1',
    name: 'About1',
    component: About1
  },
  {
    path: '/about2',
    name: 'About2',
    component: About2
  },
  {
    path: '/getter',
    name: 'Getter',
    component: Getter
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
