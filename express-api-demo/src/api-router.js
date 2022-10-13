const express = require('express')
// const db = require('./mysql')

const router = express.Router()

router.get('/get', (req, res) => {
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

// router.post('/getUser', (req, res) => {
//   const body = req.body

//   const userId = body.id
//   console.log(11, userId)
//   const instance = `select * from users where id=${userId}`

//   db.query(instance, (err, results) => {
//     if (err) {
//       console.log(err.message)
//       res.send(err.message)
//     } else {
//       console.log(results)
//       res.send(results)
//     }
//   })
  
// })
module.exports = router
