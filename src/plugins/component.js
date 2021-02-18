/*
 * @Date: 2021-02-12 00:37:26
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-17 23:42:37
 * @Description: 组册全局的组件 -- 以后换成自动化导入组件
 */
import Vue from 'vue'
// import { MyPage } from '../components/MyPage/index'
// Vue.component('MyPage', MyPage)

// 上面方法一个一个写 太麻烦了 使用的require.context()方法  ---webpack的方法
//找到components文件夹下以index.js命名的文件
const componentIndexJS = require.context(
  '../components',
  true,
  /index.js$/
)

//查询目录下index.js的文件
componentIndexJS.keys().forEach(fileName => {
  let list = componentIndexJS(fileName)
  for (var val in list) {
    Vue.component(val, list[val])
  }
})
