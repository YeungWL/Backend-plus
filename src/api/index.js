/*
 * @Date: 2021-01-31 17:48:40
 * @LastEditors: Yeung
 * @LastEditTime: 2021-01-31 17:50:32
 * @Description: api
 */
import Vue from 'vue'
import user from './user'

const apis = {
  ...user
}

Vue.prototype.$apis = apis
