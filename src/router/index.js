import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]
})
