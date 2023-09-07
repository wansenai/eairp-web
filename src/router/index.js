import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import ClassStyleView from "@/views/ClassStyleView.vue";
import DataView from "@/views/DataView.vue";
import FormView from "@/views/FormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: HomeView
    },
    {
      path: '/about',
      name: '关于',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: '测试',
      component: TestView
    },
    {
      path: '/other',
      name: '其他',
      component: ClassStyleView
    },
    {
      path: '/data',
      name: '数据',
      component: DataView
    },
    {
      path: '/form',
      name: '表单',
      component: FormView
    }
  ]
})

export default router
