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
          path: '/product',
          name: '产品',
          component: Product
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '解决方案',
      children: [
        {
          path: '/solution',
          name: '解决方案',
          component: Solution
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '工业互联网',
      children: [
        {
          path: '/industrialinternet',
          name: '工业互联网',
          component: IndustrialInternet
        }
      ]
    },{
      path: '/home',
      component: Home,
      name: '企业应用',
      children: [
        {
          path: '/enterpriseapplication',
          name: '企业应用',
          component: EnterpriseApplication,
          meta: {
            keepAlive: true
          }
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '云基础资源',
      children: [
        {
          path: '/cloudbasicresources',
          name: '云基础资源',
          component: CloudBasicResources
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
