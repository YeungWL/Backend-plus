/*
 * @Description: 
 * @Author: Yeung
 * @Date: 2021-02-18 23:47:14
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-19 00:03:05
 */
const systemRouter = [
  {
    path: '/user',
    component: () => import('@/layouts/empty.vue'),
    redirect: '/user/list',
    meta: { isAuth: true, title: '用户模块' },
    children: [
      {
        path: 'list',
        name: 'userList',
        component: () => import('@/views/user/list.vue'),
        meta: { isAuth: true, title: '用户列表' },
      }
    ]
  }
]

export default systemRouter
