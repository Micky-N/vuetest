import { createRouter, createWebHistory } from 'vue-router'
import Form1 from '@/views/Form1.vue'
import Form2 from '@/views/Form2.vue'
import Form3 from '@/views/Form3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/form_1'
    },
    {
      path: '/form_1',
      name: 'form_1',
      component: Form1,
    },
    {
      path: '/form_2',
      name: 'form_2',
      component: Form2,
    },
    {
      path: '/form_3',
      name: 'form_3',
      component: Form3,
    },
  ],
})

export default router
