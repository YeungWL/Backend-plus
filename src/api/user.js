/*
 * @Date: 2021-01-31 17:37:32
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-15 00:26:16
 * @Description: 用户管理
 */
import http from '@/plugins/axios'

export default {
  loginByUser: (data) => {
    return http.post('/user/login', data)
  },
  getUserMenu: (data) => {
    return http.post('/user/getMenuById', data)
  }
}
