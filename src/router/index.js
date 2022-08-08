import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Exchange from '../views/Exchange.vue'
import Charts from '../views/Charts.vue'
import NotFound from '../views/404.vue'
import MultiChart from '../views/Multichart.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: Exchange
  },
  {
    path: '/charts',
    name: 'charts',
    component: Charts
  },
  {
    path: '/multicharts',
    name: 'multicharts',
    component: MultiChart
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
