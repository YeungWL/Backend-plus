/*
 * @Date: 2021-02-04 00:15:49
 * @LastEditors: ywl
 * @LastEditTime: 2021-02-25 16:57:23
 * @Description: file content
 */
const homeRouter = [
  {
    path: '/home',
    component: () => import('@/layouts/empty.vue'),
    redirect: '/home/index',
    meta: { isAuth: true, title: '首页' },
    children: [
      {
        path: 'index',
        name: 'homeIndex',
        component: () => import('@/views/home/index.vue'),
        meta: { isAuth: true, title: '首页', affix: true }
      }
    ]
  }
]

export default homeRouter
