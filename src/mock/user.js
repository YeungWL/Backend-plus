/*
 * @Date: 2021-01-31 16:58:38
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-13 01:23:31
 * @Description: 用户模块的mock数据
 */
import Mock from 'mockjs'

// const Random = Mock.Random

export const userList = Mock.mock({
  "total": 75,
  "list|10": [
    {
      "code": /[a-z]{8}/,
      "id": '@increment(1)',
      "name": "@cname",
      "account": /[a-z]{12}/,
      "phone": /^135[0-9]{8}|188[0-9]{8}$/,
      "userType|1": ['爱家员工', '保顾兼职', '居恒员工', '个人客户', '渠道用户'],
      "organization|1": ['爱家广州存量事业部', '居恒广州产成品及联动事业部', '爱家广州产成品及联动事业部'],
      "createUser|1": ['张三', '李四', '王五'],
      "createTime": '@DATETIME("yyyy-MM-dd HH:mm:ss")',
      "updateUser|1": ['张三', '李四', '王五'],
      "updateTime": '@DATETIME("yyyy-MM-dd HH:mm:ss")',
    }
  ]
})

const userInfo = Mock.mock({
  "userName": 'admin',
  "id": 1,
  "token": /[a-zA-Z0-9]{108}/,
})

Mock.mock('/user/login', 'post', (options) => {
  console.log(options);
  let res = {}
  const params = JSON.parse(options.body)
  if (params.account === 'admin' && params.password === '123456') {
    res = {
      code: 200,
      data: userInfo,
      message: '成功'
    }
  } else {
    res = {
      code: 300,
      data: null,
      message: '账号或密码错误'
    }
  }
  return res
})

Mock.mock('/user/getMenu', 'post', (options) => {
  console.log(options);

  const list = [
    {
      id: 1000,
      parentId: 0,
      name: '主页',
      icon: 'el-icon-s-home',
      url: null
    }, {
      id: 1001,
      parentId: 1000,
      name: '首页',
      icon: null,
      url: '/home/index'
    }
  ]
  return list
})
