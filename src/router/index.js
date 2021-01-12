import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from '../views/Vuex.vue'
import StateMutation from '../views/StateMutation.vue'
import Reative from '../views/Reative.vue'
import ActionMutation from '../views/ActionMutation.vue'
import Getter from '../views/Getter.vue'
import Moduling from '../views/Moduling.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/stateMutation',
    name: 'StateMutation',
    component: StateMutation
  },
  {
    path: '/reative',
    name: 'Reative',
    component: Reative
  },
  {
    path: '/actionMutation',
    name: 'ActionMutation',
    component: ActionMutation
  },
  {
    path: '/getter',
    name: 'Getter',
    component: Getter
  },
  {
    path: '/moduling',
    name: 'Moduling',
    component: Moduling
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
