const createApp = require('./app')

const app = createApp()

app.get('/user', (req, res) => {
  console.log(req.url)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(req.url)
})

app.post('/doLogin', (req, res) => {
  console.log(req.body)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(req.body))
})

app.static('public')

app.listen(5000, () => {
  console.log('app listen in http://localhost: 5000')
})
