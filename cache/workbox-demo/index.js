const express = require('express')
const app = express()

function randomString() {
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
  const { length } = t;
  let n = '';
  for (let i = 0; i < 8; i++) n += t.charAt(Math.floor(Math.random() * length));
  return n;
};
app.use(express.json())
app.use('/', express.static('public'))
app.get('/api/random', (req, res) => {
  res.send({
    str: randomString()
  })
})

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
