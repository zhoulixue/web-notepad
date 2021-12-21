const http = require('http');
const router = require('./router/index')

http.createServer(async (req, res) => {
  await router.static(req, res)

  const { url } = req
  if (url === './index') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ a: 1, b: 2 }))
  } else if (url === 'login') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ a: 2, b: 3 }))
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(JSON.stringify({ a: 2, b: 3 }))
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');