import Vue from 'vue'
import Router from 'vue-router'
import dashBoard from '@/views/dashBoard'
import team from '@/views/Team'
import profil from '@/views/Profil'
import bestPractices from '@/views/BestPractices'
import logConsent from '@/views/LogConsent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashBoard',
      component: dashBoard
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/profil',
      name: 'profil',
      component: profil
    },
    {
      path: '/best-practices',
      name: 'bestPractices',
      component: bestPractices
    },
    {
      path: '/log-consent',
      name: 'logConsent',
      component: logConsent
    }
  ]
})
