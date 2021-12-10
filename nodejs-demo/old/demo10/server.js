const ejs = require('ejs');
const createApp = require('./app');

const app = createApp();

app.static('public');

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain;charset="utf-8"' });
  res.end('首页');
});

app.get('/login', async (req, res) => {
  ejs.renderFile('./views/login.ejs', (err, data) => {
    if (!err) {
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end(data);
    }
  })
});
app.post('/doLogin', (req, res) => {
  console.log(req.body);

  res.writeHead(200, { 'Content-Type': 'text/plain;charset="utf-8"' });
  res.end(req.body);
})

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
