/*
 * @Description: 用户服务
 * @Author: ywl
 * @Date: 2021-03-10 16:24:44
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-12 15:59:24
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

const editUser = function (data) {
  let editData = {
    ...data,
    updateUser: 'admin',
    updateTime: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  };
  return tool.changeData(data.id, editData, './data/user.json');
}

const delUser = function (id) {
  return tool.delData(id, './data/user.json');
}

module.exports.getUserList = getUserList
module.exports.addUser = addUser
module.exports.editUser = editUser
module.exports.delUser = delUser
