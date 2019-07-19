import Vue from 'vue'
import router from './router'


const freeName = ['login','forget']
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
      if( freeName.includes(to.name)){
        next()
      }else{
        next( { path: '/acount/login' } )
      }
  }
})
