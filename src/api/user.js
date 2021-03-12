/*
 * @Date: 2021-01-31 17:37:32
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-12 16:17:11
 * @Description: 用户管理
 */
import http from '@/plugins/axios';

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
  },
  editUser: (data) => {
    return http.put('/user/edit', data)
  },
  delUser: (data) => {
    return http.delete(`/user/del/${data.id}`)
  }
}
