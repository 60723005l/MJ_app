import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import SideBar from '@/components/SideBar'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: '/records',
      name: 'records',
      component: () => import('@/components/Records')
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('@/components/Friends')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/components/Chat')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/components/Store')
    },
    {
      path: '/customerservice',
      name: 'customerservice',
      component: () => import('@/components/CustomerService')
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: () => import('@/components/Favourite')
    },
  ]
})
