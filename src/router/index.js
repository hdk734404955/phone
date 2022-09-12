import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: 'home', // 设置默认路由
  component: () => import('@/views/layout/index.vue'),
  children: [{
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }, {
    path: '/order',
    component: () => import('@/views/order/index.vue')
  }, {
    path: '/my',
    component: () => import('@/views/my/index.vue')
  }]
}]

const router = new VueRouter({
  routes
})

export default router
