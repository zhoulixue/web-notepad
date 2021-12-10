const http = require('http');
const ejs = require('ejs');

const host = 'http://localhost:3000';
http.createServer(function (req, res) {
  const { url } = req;
  if (url === '/login') {
    ejs.renderFile('./login.ejs', {}, (err, data) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
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
    });
  }
  
}).listen(3000);

console.log(`Server running at ${host}`);
