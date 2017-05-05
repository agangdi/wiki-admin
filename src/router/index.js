import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Book from '@/components/Book'
import Chapter from '@/components/Chapter'
import Login from '@/components/Login'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/book',
          name: 'Book',
          component: Book
        },
        {
          path: '/chapter',
          name: 'Chapter',
          component: Chapter
        },
        {
          path: '/user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
