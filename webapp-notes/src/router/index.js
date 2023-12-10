import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/css',
      name: 'CSS',
      component: () => import('../views/CSSView.vue')
    },
    {
      path: '/js',
      name: 'JS',
      component: () => import('../views/JSView.vue')
    },
    {
      path: '/html',
      name: 'HTML',
      component: () => import('../views/HTMLView.vue')
    },
    {
      path: '/game',
      name: 'Game',
      component: () => import('../views/GameView.vue')
    },
  ]
})

export default router
