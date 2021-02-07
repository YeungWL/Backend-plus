/*
 * @Date: 2021-01-31 14:57:45
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-04 00:27:35
 * @Description: 登录路由
 */
const loginRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', isAuth: false }
  }
]

export default loginRoute
