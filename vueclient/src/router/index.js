import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

import Sign from '@/components/Sign'
import AboutUs from '@/components/AboutUs'
import CloudBasicResources from '@/components/CloudBasicResources'
import EnterpriseApplication from '@/components/EnterpriseApplication'
import IndustrialInternet from '@/components/IndustrialInternet'
import JoinUs from '@/components/JoinUs'
import NewEvent from '@/components/NewEvent'
import Product from '@/components/Product'
import Solution from '@/components/Solution'
import SupportAndService from '@/components/SupportAndService'
import MyProfile from '@/components/PersionHomePage/MyProfile'
import Show from '@/components/Show'
import MyOrder from '@/components/PersionHomePage/MyOrder'


import Gongye1 from  '@/components/Gongye1'
import Gongye2 from  '@/components/Gongye2'
import Gongye3 from  '@/components/Gongye3'
import Gongye4 from  '@/components/Gongye4'
import Gongye5 from  '@/components/Gongye5'
import Gongye6 from  '@/components/Gongye6'
import Gongye7 from  '@/components/Gongye7'
import Gongye8 from  '@/components/Gongye8'
import Gongye9 from  '@/components/Gongye9'
import Gongye10 from  '@/components/Gongye10'
import Gongye11 from  '@/components/Gongye11'
import Gongye12 from  '@/components/Gongye12'
import Gongye13 from  '@/components/Gongye13'
import Gongye14 from  '@/components/Gongye14'
import Gongye15 from  '@/components/Gongye15'
import Gongye16 from  '@/components/Gongye16'
import Gongye17 from  '@/components/Gongye17'
import Gongye18 from  '@/components/Gongye18'
import Gongye19 from  '@/components/Gongye19'
import Gongye20 from  '@/components/Gongye20'
import Gongye21 from  '@/components/Gongye21'
import Gongye22 from  '@/components/Gongye22'

import Gongye from  '@/components/Gongye'

import User from '@/components/PersionHomePage/User'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      hidden: true,
      component: Login
    },
    {
      path: '/sign',
      name: '注册',
      hidden: true,
      component: Sign
    },
    {
      path: '/home',
      name: '个人主页',
      hidden: true,
      component: Home,
      children: [
        {
          path: '/persionhomepage/myprofile',
          name: '个人主页',
          component: MyProfile
        }
      ]
    },
    {
      path: '/home',
      name: '我的订单',
      hidden: true,
      component: Home,
      children: [
        {
          path: '/persionhomepage/myorder',
          name: '我的订单',
          component: MyOrder
        }
      ]
    },
    {
      path: '/home',
      name: '用户管理',
      hidden: true,
      component: Home,
      children: [
        {
          path: '/persionhomepage/user',
          name: '用户管理',
          component: User
        }
      ]
    },
    {
      path: '/home',
      name: '首页展示',
      hidden: true,
      component: Home,
      children: [
        {
          path: '/show',
          name: '首页展示',
          component: Show
        }
      ]
    },{
      path: '/',
      name: '首页',
      component: Home,
      hidden: true
    }, {
      path: '/home',
      component: Home,
      name: '关于微云',
      children: [
        {
          path: '/aboutus',
          name: '关于微云',
          component: AboutUs
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '最新活动',
      children: [
        {
          path: '/newevent',
          name: '最新活动',
          component: NewEvent
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '产品',
      children: [
        {
          path: '/solution',
          name: '工业互联网解决方案',
          component: Solution

        },
        {
          path: '/enterpriseapplication',
          name: '企业应用',
          component: EnterpriseApplication
        },
        {
          path: '/industrialinternet',
          name: '上云应用解决方案',
          component: IndustrialInternet
        },
        {
          path: '/cloudbasicresources',
          name: '华为云基础服务',
          component: CloudBasicResources
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '工业互联网解决方案',
      children: [
            {
              path: '/gongye',
              name: '工业智能体',
              component: Gongye
            },
            {
              path: '/gongye1',
              name: '制造执行 MES',
              component: Gongye1
            },
            {
              path: '/gongye2',
              name: '工业 IOT',
              component: Gongye2
            },
            {
              path: '/gongye3',
              name: '企业经营管理',
              component: Gongye3,
            },
            {
              path: '/gongye4',
              name: '智能生产',
              component: Gongye4
            },
            {
              path: '/gongye5',
              name: '研发设计与仿真',
              component: Gongye5,
            }
          ]
    },
    {
      path: '/home',
      component: Home,
      name: '上云应用解决方案',
      children: [

            {
              path: '/gongye6',
              name: 'SAP上云解决方案',
              component: Gongye6,
            },
            {
              path: '/gongye7',
              name: '核心数据库上云',
              component: Gongye7,
            },
            {
              path: '/gongye8',
              name: '微软上云',
              component: Gongye8,
            },
            {
              path: '/gongye9',
              name: 'ERP上云',
              component: Gongye9,
            }
            ]
    },{
      path: '/home',
      component: Home,
      name: '企业应用',
      children: [
        {
          path: '/gongye10',
          name: '应用与数据集成平台 ROMA',
          component: Gongye10
        },
        {
          path: '/gongye11',
          name: '企业建站',
          component: Gongye11
        },
        {
          path: '/gongye12',
          name: '企业办公',
          component: Gongye12
        }, {
          path: '/gongye13',
          name: '企业安全',
          component: Gongye13
        },
        {
          path: '/gongye14',
          name: '上云迁移',
          component: Gongye14
        },
        {
          path: '/gongye15',
          name: '企业初创',
          component: Gongye15
        },
        {
          path: '/gongye16',
          name: '营销推广',
          component: Gongye16
        }

      ]
    }, {
      path: '/home',
      component: Home,
      name: '华为云基础服务',
      children: [
        {
          path: '/gongye17',
          name: '计算',
          component: Gongye17
        },
        {
          path: '/gongye18',
          name: '存储',
          component: Gongye18
        },
        {
          path: '/gongye19',
          name: '数据库',
          component: Gongye19
        }, {
          path: '/gongye20',
          name: '网络',
          component: Gongye20
        }, {
          path: '/gongye21',
          name: '容器服务',
          component: Gongye21
        }, {
          path: '/gongye22',
          name: '域名与网站',
          component: Gongye22
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '加入我们',
      children: [
        {
          path: '/joinus',
          name: '加入我们',
          component: JoinUs
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '支持与服务',
      children: [
        {
          path: '/supportandservice',
          name: '支持与服务',
          component: SupportAndService
        }
      ]
    }
  ]
})
