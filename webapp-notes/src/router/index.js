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
      component: () => import('../views/JsView.vue')
    },
    {
      path: '/html',
      name: 'HTML',
      component: () => import('../views/HTMLView.vue')
    },
    {
      path: '/msg',
      name: 'Message',
      component: () => import('../views/MessageView.vue')
    },
  ]
})

export default router
