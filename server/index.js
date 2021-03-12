/*
 * @Description: file content
 * @version:
 * @Author: ywl
 * @Date: 2021-03-09 11:45:25
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-12 17:27:54
 */
let express = require('express');
let app = express();
let { userInfo, userMenu } = require('./server/user');
const { getUserList, addUser, editUser, delUser } = require('./server/userServe');

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
app.get('/user/getMenuById', function (req, res) {
  if (req.headers['xx-token'] === userInfo.token) {
    res.send({ code: 200, data: userMenu, message: 'success' })
  } else {
    res.send({ code: 401, data: null, message: 'token已失效' })
  }
})

// 获取用户列表
app.post('/user/list', function (req, res) {
  const params = req.body
  if (req.headers['xx-token'] === userInfo.token && params.pageNum && params.pageSize) {
    let data = getUserList(params.pageNum - 1, (params.pageSize || 10))
    res.send({ code: 200, data, message: 'success' })
  } else if (!params.pageNum || !params.pageSize) {
    res.send({ code: 300, data: null, message: '页码不能为空' })
  } else {
    res.send({ code: 401, data: null, message: 'token已失效' })
  }
})

// 新增用户信息
app.post('/user/add', function (req, res) {
  const params = req.body
  if (req.headers['xx-token'] === userInfo.token) {
    addUser(params)
    res.send({ code: 200, data: null, message: 'success' })
  } else {
    res.send({ code: 401, data: null, message: 'token已失效' })
  }
})

app.put('/user/edit', function (req, res) {
  const params = req.body;
  if (req.headers['xx-token'] === userInfo.token) {
    editUser(params)
    res.send({ code: 200, data: null, message: 'success' })
  } else {
    res.send({ code: 401, data: null, message: 'token已失效' })
  }
})

app.delete('/user/del/:id', function (req, res) {
  if (req.headers['xx-token'] === userInfo.token) {
    let id = parseInt(req.params.id)
    delUser(id)
    res.send({ code: 200, data: null, message: 'success' })
  } else {
    res.send({ code: 401, data: null, message: 'token已失效' })
  }
})

app.listen("3000", function () {
  console.log("\033[2J\033[42;30m DONE \033[40;32m app listening at http://localhost:3000\033[0m");
  console.log("node服务已启动")
});
