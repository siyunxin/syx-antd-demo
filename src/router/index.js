import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'q';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basiclayout',
      component: () => import('@/components/layout/BasicLayout'),
      meta: {'title': '主页'},
      redirect: '/mine',
      children: [
        {
          path: '/mine',
          name: 'mine',
          component: ()=>import('@/components/layout/RouterLayout'),
          redirect:'/mine/mineindex',
          meta:{ title:'我的' },
          children:[
            {
              path: 'mineindex',
              name: 'mineindex',
              component: ()=>import('@/components/view/MineIndex'),
              meta: { title:'个人中心', 'key':'1', 'subKey':'sub1'},
            },
            {
              path: 'mineset',
              name: 'mineset',
              component: ()=>import('@/components/view/MineSet'),
              meta: { title:'个人设置', 'key':'2', 'subKey':'sub1' },
            }
          ]
          
        },
        {
          path: '/user',
          name: 'user',
          component: ()=>import('@/components/layout/RouterLayout'),
          meta: { title: '角色'},
          redirect: '/user/rolemanage',
          children: [
            {
              path: 'rolemanage',
              name: 'rolemanage',
              component: ()=>import('@/components/view/RoleManage'),
              meta: { 'title':'角色管理', 'key':'3', 'subKey':'sub2' }
            },
            {
              path: 'originview',
              name: 'originview',
              component: ()=>import('@/components/view/OriginzitionView'),
              meta: { 'title':'组织管理', 'key':'4', 'subKey':'sub2' }
            }
          ]
        },
        {
          path: '/information',
          name: 'information',
          component: () => import( '@/components/layout/RouterLayout'),
          meta: { title: '信息管理' },
          redirect:'/information/public',
          children: [
            {
              path: 'public',
              name: 'public',
              component: () => import('@/components/view/PublicInformation'),
              meta: { 'title':'资讯发布', 'key':'5', 'subKey':'sub3' }
            },
            {
              path: 'check',
              name: 'check',
              component: () => import('@/components/view/CheckInformation'),
              meta: { 'title':'资讯查看', 'key':'6', 'subKey':'sub3' }
            }
          ]
        }
      ]
    }
  ]
})
