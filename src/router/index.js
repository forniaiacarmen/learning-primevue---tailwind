import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Ejemplo básico:
  { path: '/', component: () => import('../layouts/Landing.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;