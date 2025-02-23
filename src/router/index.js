import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=> import("@/views/HomePage.vue"),
    }, {
      path: "/result",
      component: ()=> import("@/views/DealWith.vue"),
    }, {
      path: "/3DModule",
      component: ()=> import("@/views/3DModule.vue"),
    }

  ],
})

export default router
