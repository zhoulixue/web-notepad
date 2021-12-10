const http = require('http');
const app = require('./route');

http.createServer(function (req, res) {
  const pathname = req.url;
  const key = pathname.split('/').slice(-1).toString();
  const func = app[key];
  if (func) {
    func(req, res);
  } else {
    app['error'](req, res);
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');