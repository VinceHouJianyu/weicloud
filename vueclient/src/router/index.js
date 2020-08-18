import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ArticleList from '@/components/ArticleList'
import CateMana from '@/components/CateMana'
import DataCharts from '@/components/DataCharts'
import PostArticle from '@/components/PostArticle'
import UserMana from '@/components/UserMana'
import BlogDetail from '@/components/BlogDetail'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      hidden: true,
      component: Login
    }, {
      path: '/home',
      name: '',
      component: Home,
      hidden: true
    }, {
      path: '/home',
      component: Home,
      name: '关于微云',
      children: [
        {
          path: '/user',
          name: '关于微云',
          component: Demo
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '最新活动',
      children: [
        {
          path: '/user',
          name: '最新活动',
          component: UserMana
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '产品',
      children: [
        {
          path: '/user',
          name: '产品',
          component: UserMana
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '解决方案',
      children: [
        {
          path: '/user',
          name: '解决方案',
          component: UserMana
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '工业互联网',
      children: [
        {
          path: '/user',

          name: '工业互联网',
          component: UserMana
        }
      ]
    },{
      path: '/home',
      component: Home,
      name: '企业应用',

      children: [
        {
          path: '/articleList',
          name: '企业应用',
          component: ArticleList,
          meta: {
            keepAlive: true
          }
        }, {
          path: '/postArticle',
          name: '企业应用',
          component: PostArticle,
          meta: {
            keepAlive: false
          }
        }, {
          path: '/blogDetail',
          name: '企业应用',
          component: BlogDetail,
          hidden: true,
          meta: {
            keepAlive: false
          }
        }, {
          path: '/editBlog',
          name: '企业应用',
          component: PostArticle,
          hidden: true,
          meta: {
            keepAlive: false
          }
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '云基础资源',
      children: [
        {
          path: '/user',
          name: '云基础资源',
          component: UserMana
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '加入我们',
      children: [
        {
          path: '/cateMana',

          name: '加入我们',
          component: CateMana
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '支持与服务',

      children: [
        {
          path: '/charts',

          name: '支持与服务',
          component: DataCharts
        }
      ]
    }
  ]
})
