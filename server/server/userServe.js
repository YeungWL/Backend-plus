/*
 * @Description: 用户服务
 * @Author: ywl
 * @Date: 2021-03-10 16:24:44
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-11 10:04:55
 */
const Tool = require('../utils/tool');
const sd = require('silly-datetime');

const tool = new Tool()

const getUserList = function (page, size) {
  return tool.pagination(page, size, './data/user.json');
}

const addUser = function (data) {
  let addData = {
    ...data,
    createUser: 'admin',
    createTime: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    updateUser: 'admin',
    updateTime: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  }
  return tool.addData(addData, './data/user.json');
}

module.exports.getUserList = getUserList
module.exports.addUser = addUser
