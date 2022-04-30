import { createRouter, createWebHistory } from 'vue-router'

// Routes
/*
 * / => Home
 * /project => Project
 * /contact => Contact
 */

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
