import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/404.vue'
import Sandbox from '../views/Sandbox.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/sandbox',
    name: 'sandbox',
    component: Sandbox
  },
  {
    path: '/*',
    name: '404',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
