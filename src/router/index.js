import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'q';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'basiclayout',
      component: () => import('@/components/layout/BasicLayout'),
      meta: {
        'title': '主页'
      },
      redirect: '/mine',
      children: [{
          path: '/mine',
          name: 'mine',
          component: () => import('@/components/layout/RouterLayout'),
          redirect: '/mine/mineindex',
          meta: {
            title: '我的'
          },
          children: [{
              path: 'mineindex',
              name: 'mineindex',
              component: () => import('@/components/view/main/MineIndex'),
              meta: {
                title: '个人中心',
                'key': '1',
                'subKey': 'sub1'
              },
            },
            {
              path: 'mineset',
              name: 'mineset',
              component: () => import('@/components/view/main/MineSet'),
              meta: {
                title: '个人设置',
                'key': '2',
                'subKey': 'sub1'
              },
              children: [{
                  path: 'basic',
                  name: 'basic',
                  component: () => import('@/components/view/setting/BasicSetting')
                },
                {
                  path: 'safe',
                  name: 'safe',
                  component: () => import('@/components/view/setting/SafeSetting')
                },
                {
                  path: 'selfdom',
                  name: 'selfdom',
                  component: () => import('@/components/view/setting/SelfdomSetting')
                },
                {
                  path: 'importnotice',
                  name: 'importnotice',
                  component: () => import('@/components/view/setting/ImportantNotice')
                }
              ]
            }
          ]

        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/components/layout/RouterLayout'),
          meta: {
            title: '角色'
          },
          redirect: '/user/rolemanage',
          children: [{
              path: 'rolemanage',
              name: 'rolemanage',
              component: () => import('@/components/view/RoleMange/RoleManage'),
              meta: {
                'title': '角色管理',
                'key': '3',
                'subKey': 'sub2'
              }
            },
            {
              path: 'originview',
              name: 'originview',
              component: () => import('@/components/view/RoleMange/OriginzitionView'),
              meta: {
                'title': '组织管理',
                'key': '4',
                'subKey': 'sub2'
              }
            },
            {
              path: 'originview2',
              name: 'originview2',
              component: () => import('@/components/view/RoleMange/OriginzitionView2'),
              meta: {
                'title': '组织管理2',
                'key': '4',
                'subKey': 'sub2'
              }
            }
          ]
        },
        {
          path: '/information',
          name: 'information',
          component: () => import('@/components/layout/RouterLayout'),
          meta: {
            title: '信息管理'
          },
          redirect: '/information/public',
          children: [{
              path: 'public',
              name: 'public',
              component: () => import('@/components/view/mission/PublicInformation'),
              meta: {
                'title': '资讯发布',
                'key': '5',
                'subKey': 'sub3'
              }
            },
            {
              path: 'check',
              name: 'check',
              component: () => import('@/components/view/mission/CheckInformation'),
              meta: {
                'title': '资讯查看',
                'key': '6',
                'subKey': 'sub3'
              }
            }
          ]
        },

      ]
    },
    //账户信息
    {
      path: '/acount',
      name: 'acount',
      component: () => import('@/components/layout/UserLayout'),
      redirect: '/acount/login',
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/components/view/user/Login')
        },
        {
          path: 'forget',
          name: 'forget',
          component: () => import('@/components/view/user/ForgetPassWord')
        }
      ]
    }
  ]
})
