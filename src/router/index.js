import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import loginRouter from './login'
import homeRouter from './home'
import systemRouter from './system'

Vue.use(VueRouter)

const defaultRouter = [{
  path: '/',
  redirect: '/login'
},
//没有匹配到任何页面则跳转到index页面
{
  path: '*',
  redirect: '/login'
}
]
const routes = defaultRouter.concat(loginRouter, homeRouter, systemRouter)

const router = new VueRouter({
  mode: 'history', // hash是访问带#号
  routes
})

// 白名单路由
const whileRouter = ['/login']
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否已经登录了
  if (store.getters['user/isLogin']()) {
    if (whileRouter.includes(to.path)) {
      next('/home')
    } else {
      next()
    }
  } else {
    // 没登录
    if (whileRouter.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
