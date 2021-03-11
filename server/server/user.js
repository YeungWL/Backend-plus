/*
 * @Date: 2021-01-31 16:58:38
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-10 17:11:07
 * @Description: 用户模块的mock数据
 */
let Mock = require('mockjs');

// const Random = Mock.Random

const userInfo = Mock.mock({
  "userName": 'admin',
  "id": 1,
  "token": /[a-zA-Z0-9]{108}/,
})

const userMenu = [
  {
    id: 1000,
    parentId: 0,
    name: '主页',
    icon: 'el-icon-s-home',
    url: '/home'
  }, {
    id: 1001,
    parentId: 1000,
    name: '首页',
    icon: null,
    url: '/home/index'
  }, {
    id: 2000,
    parentId: 0,
    name: '系统设置',
    icon: 'el-icon-s-home',
    url: '/system'
  }, {
    id: 2001,
    parentId: 2000,
    name: '用户列表',
    icon: null,
    url: '/user/list'
  }, {
    id: 2002,
    parentId: 2000,
    name: '资源列表',
    icon: null,
    url: '/resources/list'
  }
]
module.exports.userInfo = userInfo
// module.exports.userList = userList
module.exports.userMenu = userMenu
