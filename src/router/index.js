import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/favor',
      component: () => import('../views/favor/favor.vue')
    },
    {
      path: '/msg',
      component: () => import('../views/msg/msg.vue')
    },
    {
      path: '/order',
      component: () => import('../views/order/order.vue')
    }
  ]
})

export default router;