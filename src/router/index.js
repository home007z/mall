import Vue from 'vue'
import VueRouter from 'vue-router'

import state from '../store/state'

import Login from 'views/login/Login'

// 懒加载一级组件 Tarbar
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// 我的订单
const MyOrder = () => import('views/profile/childComps/MyOrder.vue')
// 我的优惠券
const CouponList = () => import('views/profile/childComps/CouponList.vue')
// 我的绿卡
const MyVip = () => import('views/profile/childComps/MyVip.vue')
// 学习 vant ui
const LearnVant = () => import('views/profile/childComps/LearnVant.vue')

// 解决多次点击重复路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息 !!!注意: 二级路由不需要加 '/'
const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/category',
    component: Category,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/cart',
    component: Cart,
    meta: {
      keepAlive: false, // 是否数据缓存
      requireAuth: true // 是否token验证
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      keepAlive: false
    },
    children: [{
      path: 'myOrder',
      name: 'myOrder',
      component: MyOrder
    }, {
      path: 'couponList',
      name: 'couponList',
      component: CouponList
    }, {
      path: 'myVip',
      name: 'myVip',
      component: MyVip
    }, {
      path: 'learnVant',
      name: 'learnVant',
      component: LearnVant
    }]
  }, {
    path: '/detail/:id',
    component: Detail
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]

// 3.创建路由对象
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  mode: 'hash', // history
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (state.userInfo.token) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

// 4.导出
export default router
