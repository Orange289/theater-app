import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tickets from './views/Tickets.vue'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets
    }
  ]
})
