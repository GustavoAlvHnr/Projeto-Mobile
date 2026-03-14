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
      component: () => import('../views/AddDespesaView.vue'),
    },
    {
      path: '/Despesa-View/:id',
      name: 'expense-detail',
      component: () => import('../views/DespesaDetailView.vue'),
    },
    {
      path: '/Despesa-View/:id/edit',
      name: 'expense-edit',
      component: () => import('../views/AddDespesaView.vue'),
    },
  ],
})

export default router
