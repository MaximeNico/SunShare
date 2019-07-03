import Vue from 'vue'
import Router from 'vue-router'
import dashBoard from '@/views/dashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashBoard',
      component: dashBoard
    }
  ]
})
