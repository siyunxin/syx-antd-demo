import Vue from 'vue'
import router from './router'

router.beforeEach((to, from, next) => {
  let hasUser = sessionStorage.getItem('user_token');
  if (hasUser) {
    if (to.path === '/acount/login') {
      next({
        path: '/mine/mineindex'
      })
    } else {
      next()
    }
  } else {
    if (to.path !== "/acount/login") {
      next('/acount/login')
    } else {
      next()
    }

  }
})
