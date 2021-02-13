/*
 * @Date: 2021-01-31 13:05:46
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-13 01:19:03
 * @Description: file content
 */
import axios from 'axios'
import { Message } from 'element-ui'


// const baseURL = process.env.VUE_APP_BASE_API_URL
// const isDev = process.env.NODE_ENV === 'development'

const instance = axios.create({
  // baseURL: isDev ? '' : baseURL,
  timeout: 15000,
  withCredentials: false
})
// 请求拦截 -- 请求
instance.interceptors.request.use(
  config => {
    // 一般使用这里来设置请求头里面带token
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)
// 响应拦截
instance.interceptors.response.use(
  response => {
    if (response.data.code === 200) { // 处理code=200的业务 代表请求成功
      return Promise.resolve(response.data.data);
    } else { // 处理code非200的业务 代表请求失败
      Message.error(response.data.message || '系统处理出错');
      return Promise.reject(response.data);
    }
  },
  err => {
    return Promise.reject(err);
  }
)

export default instance
