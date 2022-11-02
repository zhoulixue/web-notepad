const path = require('path')
const express = require('express');
// const cors = require('cors')

const app = express()
// app.use(cors)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
// session中间件
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')

const secretKey = 'unddjkdasdbedkk';
// 只要配置了 expressjwt 就可以把user挂在到req上
// 不要加密密码
app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

// 登录
app.post('/api/login', (req, res) => {
  const userInfo = req.body
  if (userInfo.username === 'admin' && userInfo.password === '000000') {
    const tokenStr = jwt.sign({ user: userInfo.username }, secretKey, { expiresIn: '30s' })

    return res.send({
      status: 0,
      msg: '登录成功',
      token: tokenStr
    })
  } else {
    return res.send({ status: 1, msg: '登录失败' })
  }
})
// 获取登录信息
app.get('/admin/getinfo', (req, res) => {
  console.log(req.user)
  res.send({
    status: 0,
    msg: 'success',
    data: req.user
  })
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
