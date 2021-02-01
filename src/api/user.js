/*
 * @Date: 2021-01-31 17:37:32
 * @LastEditors: Yeung
 * @LastEditTime: 2021-01-31 17:47:30
 * @Description: 用户管理
 */
import http from '@/plugins/axios'

export default {
  login: (data) => {
    return http.post('/user/login', data)
  }
}
