const http = require('http');
http.createServer(function (req, res) {
  const { url } = req
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');