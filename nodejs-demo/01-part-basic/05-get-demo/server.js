const http = require('http');

http.createServer(function (req, res) {
  const { url } = req;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(url);
}).listen(9000);

console.log('Server running at http://127.0.0.1:9000/');
