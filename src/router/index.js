import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/Despesa-View',
      name: 'expense',
      component: () => import('../views/DespesaView.vue'),
    }
  ],
})

export default router
