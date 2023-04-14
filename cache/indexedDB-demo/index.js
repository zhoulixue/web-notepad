const express = require('express')
const app = express()

app.use(express.json())
app.use('/', express.static('public'))

app.post('/api/pow', (req, res) => {
  const { x } = req.body
  console.log('x', x)
  res.send({
    result: x ** 2
  })
})

app.listen(4000, () => {
  console.log('app listening at 4000.')
})
