/*
 * @Date: 2021-01-31 16:58:38
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-01 23:42:58
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

Mock.mock('/user/login', 'post', (options) => {
  console.log(options);
  let res = {}
  const params = JSON.parse(options.body)
  if (params.account === 'admin' && params.password === '123456') {
    res = {
      code: 200,
      data: {
        'token': /[a-zA-Z]{26}/,
        'userName': 'admin'
      },
      message: '成功'
    }
  } else {
    res = {
      code: 300,
      data: userList,
      message: '账号或密码错误'
    }
  }
  return res
})


