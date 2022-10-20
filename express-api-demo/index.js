const path = require('path')
const express = require('express');
// const cors = require('cors')

const app = express()
// app.use(cors)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
// session中间件
const session = require('express-session')
app.use(
  session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
  })
)

app.get('/test', (req, res) => {
  res.end('hello world')
})

// 登录
app.post('/api/login', (req, res) => {
  if (req.body.username === 'admin' && req.body.password === '000000') {
    req.session.user = req.body
    req.session.isLogin = true
    return res.send({ status: 0, msg: '登录成功' })
  } else {
    return res.send({ status: 1, msg: '登录失败' })
  }
})
// 获取登录信息
app.get('/api/getUsername', (req, res) => {
  if (!req.session.isLogin) {
    return res.send({ status: 1, msg: 'fail' })
  } else {
    return res.send({
      status: 0,
      msg: 'success',
      username: req.session.user.username
    })
  }
})
// 登出，清空session
app.post('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功'
  })
})
app.listen(2000)
