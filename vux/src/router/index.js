import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basic',
      component: () => import('@/views/basic')
    },
    {
      path: '/form',
      component: () => import('@/views/form')
    },
    {
      path: '/msgbox',
      component: () => import('@/views/msgbox')
    },
    {
      path: '/showdata',
      component: () => import('@/views/showdata')
    },
    {
      path: '/navbar',
      component: () => import('@/views/navbar')
    },
    {
      path: '/layout',
      component: () => import('@/views/layout')
    },
    {
      path: '/scroll',
      component: () => import('@/views/scroll')
    }
  ]
})
