const express = require('express')
const db = require('./mysql')

const router = express.Router()

router.get('/get', (req, res) => {
  console.log(123)
  const query = req.query
  res.send({
    stats: 0,
    msg: 'get success',
    data: query
  })
})
router.post('/post', (req, res) => {
  const body = req.body
  res.send({
    stats: 0,
    msg: 'post success',
    data: body
  })
})

router.post('/getUser', (req, res) => {
  const body = req.body

  const { username } = body
  const instance = `select * from users where username="${username}"`

  db.query(instance, (err, results) => {
    if (err) {
      console.log(err)
      // err结构
      // {
      //     "code": "ER_NO_SUCH_TABLE",
      //     "errno": 1146,
      //     "sqlMessage": "Table 'my_test_db.user' doesn't exist",
      //     "sqlState": "42S02",
      //     "index": 0,
      //     "sql": "select * from user where username=\"jerry\""
      // }
      res.send(err)
    } else {
      console.log(results)
      res.send(results)
    }
  })
})
router.post('/addUser', (req, res) => {
  const body = req.body
  const { username, password } = body;
  const user = { username, password };
  const sql = `insert into users set ?`

  db.query(sql, user, (err, results) => {
    if (err) {
      // {
      //     "code": "ER_DUP_ENTRY",
      //     "errno": 1062,
      //     "sqlMessage": "Duplicate entry 'zhao' for key 'users.username_UNIQUE'",
      //     "sqlState": "23000",
      //     "index": 0,
      //     "sql": "insert into users set `username` = 'zhao', `password` = '8280090'"
      // }
      console.log(err)
      res.send(err)
    } else {
      // {
      //     "fieldCount": 0,
      //     "affectedRows": 1,
      //     "insertId": 7,
      //     "serverStatus": 2,
      //     "warningCount": 0,
      //     "message": "",
      //     "protocol41": true,
      //     "changedRows": 0
      // }
      console.log(results)
      if (results.affectedRows === 1) {
        console.log('插入数据成功');
      }
      res.send(results)
    }
  })
})
router.post('/updateUser', (req, res) => {
  const body = req.body
  const { username, password, id } = body

  // const sql = `update users set username=?,password=? where id=?`
  const user = { username, password }
  const sql = 'update users set ? where id=?'

  db.query(sql, [user, id], (err, results) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      // {
      //     "fieldCount": 0,
      //     "affectedRows": 1,
      //     "insertId": 0,
      //     "serverStatus": 2,
      //     "warningCount": 0,
      //     "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
      //     "protocol41": true,
      //     "changedRows": 1
      // }
      console.log(results)
      if (results.affectedRows === 1) {
        console.log('更新数据成功');
      }
      res.send(results)
    }
  })
})
// 标记删除
router.post('/deleteUser', (req, res) => {
  const body = req.body
  const { id } = body
  const sql = 'update users set status=? where id=?'

  db.query(sql, [1, id], (err, results) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      // {
      //   fieldCount: 0,
      //   affectedRows: 1,
      //   insertId: 0,
      //   serverStatus: 2,
      //   warningCount: 0,
      //   message: '',
      //   protocol41: true,
      //   changedRows: 0
      // }
      console.log(results)
      if (results.affectedRows === 1) {
        console.log('删除数据成功');
      }
      res.send(results)
    }
  })
})
// 真删除，一般不用
router.post('/deleteUserReal', (req, res) => {
  const body = req.body
  const { id } = body
  const sql = 'delete from users where id=?'

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      // {
      //   fieldCount: 0,
      //   affectedRows: 1,
      //   insertId: 0,
      //   serverStatus: 2,
      //   warningCount: 0,
      //   message: '',
      //   protocol41: true,
      //   changedRows: 0
      // }
      console.log(results)
      if (results.affectedRows === 1) {
        console.log('删除数据成功');
      }
      res.send(results)
    }
  })
})
module.exports = router
