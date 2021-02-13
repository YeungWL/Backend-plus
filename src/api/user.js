/*
 * @Date: 2021-01-31 17:37:32
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-13 00:47:55
 * @Description: 用户管理
 */
import http from '@/plugins/axios'

export default {
  loginByUser: (data) => {
    return http.post('/user/login', data)
  }
}
