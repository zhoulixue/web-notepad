const http = require('http');
const ejs = require('ejs');

http.createServer(function (req, res) {
  const { url } = req;
  if (url === '/login') {
    ejs.renderFile('./login.ejs', {}, (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
      }
    })
  } else if (url === '/doLogin') {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk;
    });
    req.on('end', () => {
      console.log(postData);
      res.end(postData);
    })
  }
}).listen(9000);

console.log('Server running at http://127.0.0.1:9000/');
