/*
 * @Date: 2021-01-31 17:39:08
 * @LastEditors: Yeung
 * @LastEditTime: 2021-01-31 17:41:49
 * @Description: 把封装号的axios给暴露到vue的实例
 */
import Vue from 'vue'
import axios from './axios'

//把axios挂到Vue对象上面，在所有Vue实例中可this.$http调用
Vue.prototype.$http = axios