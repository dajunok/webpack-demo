import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:userName',
    name: 'home',
    //component: Home,
  },
  {
    path: '/about/:userName',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {    
    path: '/shop',
    name: 'good',
  },
]

const router = new VueRouter({
  routes
})

export default router
