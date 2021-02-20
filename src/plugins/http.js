/*
 * @Date: 2021-01-31 17:39:08
 * @LastEditors: ywl
 * @LastEditTime: 2021-02-20 14:48:53
 * @Description: 把封装号的axios给暴露到vue的实例
 */
import Vue from 'vue'
import instance from './axios'

//把axios挂到Vue对象上面，在所有Vue实例中可this.$http调用
Vue.prototype.$http = instance