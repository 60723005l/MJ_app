import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import SideBar from '@/components/SideBar'
import Search from '../components/Search'
import Records from '@/components/Records'
import Friends from '@/components/Friends'
import Chat from '@/components/Chat'
import Store from '@/components/Store'
import CustomerService from '@/components/CustomerService'
import Favourite from '@/components/Favourite'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/records',
      name: 'records',
      component: Records
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/customerservice',
      name: 'customerservice',
      component: CustomerService
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: Favourite
    },
  ]
})
