import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstRoute from '@/components/FirstRoute'
import SecondRoute from '@/components/SecondRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/1',
      name: '1stRoute',
      component: FirstRoute
    },
    {
      path: '/2/:name',
      name: '2ndRoute',
      component: SecondRoute
    }
  ]
})
