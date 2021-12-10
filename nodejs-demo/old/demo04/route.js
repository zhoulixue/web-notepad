
const ejs = require('ejs');

module.exports = {
  login: (req, res) => {
    ejs.renderFile('./login.ejs', {}, (err, data) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      } else {
        console.log(err);
      }
    })
  },
  doLogin: (req, res) => {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk;
    });
    req.on('end', () => {
      res.end(postData);
    });
  },
  error: (req, res) => {
    res.end('404');
  },
  news: (req, res) => {
    res.end('news');
  },
};
