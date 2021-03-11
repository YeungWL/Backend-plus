/*
 * @Date: 2021-01-31 17:37:32
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-11 17:19:12
 * @Description: 用户管理
 */
import http from '@/plugins/axios'

export default {
  loginByUser: (data) => {
    return http.post('/user/login', data)
  },
  getUserMenu: (data) => {
    return http.get('/user/getMenuById', { params: data })
  },
  getUserList: (data) => {
    return http.post('/user/list', data)
  },
  addUserInfo: (data) => {
    return http.post('/user/add', data)
  }
}
