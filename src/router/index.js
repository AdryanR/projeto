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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/cadastre-se',
    name: 'Cadastre-se',
    component: () => import('../views/Cadastre-se.vue')
  },
  {
    path: '/conta',
    name: 'Conta',
    component: () => import('../views/Conta.vue')
  },
  {
    path: '/causa',
    name: 'Causa',
    component: () => import('../views/Causa.vue')
  },
  {
    path: '/nossas-causas/:categoria',
    name: 'Nossas Causas',
    component: () => import('../views/Nossas-causas.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
