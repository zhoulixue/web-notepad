const http = require('http');
const { URL } = require('url');

const host = 'http://localhost:3000';
http.createServer(function (req, res) {
  const { searchParams } = new URL(req.url, host);
  console.log(searchParams);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(searchParams.toString());
}).listen(3000);

console.log(`Server running at ${host}`);

