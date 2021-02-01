import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRouter from './login'

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
const routes = defaultRouter.concat(loginRouter)

const router = new VueRouter({
  mode: 'history', // hash是访问带#号
  routes
})

export default router
