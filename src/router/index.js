import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projecs from "../views/Projects.vue"
import Map from '../views/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projecs
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
