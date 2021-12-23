const http = require('http');
const ejs = require('ejs');

http.createServer(function (req, res) {
  const { url } = req;
  if (url === '/index') {
    ejs.renderFile('./index.ejs', {
      msg: '数据',
      list: [
        { title: '标题111' },
        { title: '标题222' },
        { title: '标题333' },
        { title: '标题444' },
      ],
    }, (err, str) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(str);
      }
    });
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');