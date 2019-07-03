import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'q';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'globallayout',
      component: () => import('@/components/layout/GlobalLayout'),
    }
  ]
})
