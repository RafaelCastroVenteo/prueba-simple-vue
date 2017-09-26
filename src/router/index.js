import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/example/',
      name: 'Example',
      component: Example
    }
  ]
})
