/*
 * @Description: 用户服务
 * @Author: ywl
 * @Date: 2021-03-10 16:24:44
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-10 16:32:19
 */
const Tool = require('../utils/tool');

const tool = new Tool()

const getUserList = function (page, size) {
  return tool.pagination(page, size, './data/user.json');
}


module.exports.getUserList = getUserList
