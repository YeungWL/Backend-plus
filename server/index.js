/*
 * @Description: file content
 * @version:
 * @Author: ywl
 * @Date: 2021-03-09 11:45:25
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-10 16:36:29
 */
let express = require('express');
let app = express();
let { userInfo, userMenu } = require('./server/user');
const { getUserList } = require('./server/userServe')

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // 添加json解析
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type,xx-token");
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("Access-control-max-age", 1000);
  next();
});

// 用户登录
app.post("/user/login", function (req, res) {
  console.log(req.body);
  let params = req.body;
  if (params.account === 'admin' && params.password === '123456') {
    res.send({
      code: 200, data: userInfo, message: "success"
    });
  } else {
    res.send({ code: 300, data: null, message: '账号或密码错误' })
  }
});

// 获取用户的导航
app.post('/user/getMenuById', function (req, res) {
  if (req.headers['xx-token'] === userInfo.token) {
    res.send({ code: 200, data: userMenu, message: 'success' })
  } else {
    res.send({ code: 401, data: null, message: 'token已失效' })
  }
})

// 获取用户列表
app.post('/user/getUserList', function (req, res) {
  // if (req.headers['xx-token'] === userInfo.token) {
  console.log(req.body);
  const params = req.body
  let data = getUserList(params.pageNum - 1, params.pageSize)
  res.send({ code: 200, data, message: 'success' })
  // } else {
  //   res.send({ code: 401, data: null, message: 'token已失效' })
  // }
})

app.listen("3000", function () {
  console.log("\033[2J\033[42;30m DONE \033[40;32m app listening at http://localhost:3000\033[0m")
});
