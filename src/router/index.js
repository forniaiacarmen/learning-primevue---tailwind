import { createRouter, createWebHistory } from 'vue-router';
import Landing from '@/layouts/Landing.vue';
import Contact from '@/layouts/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;