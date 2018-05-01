import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/store'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import Cats from '@/views/Cats'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Dashboard, meta: { secure: false } },
    { path: '/cats', component: Cats, meta: { secure: true } },
    { path: '*', redirect: '/login' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.secure) {
    if (!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
