const http = require('http');
const urllib = require('url');

const data = [
  { name: 'zhangsan', age: 18 },
  { name: 'lisi', age: 18 },
  { name: 'wangwu', age: 18 },
];
const port = 3000;

http.createServer(function (req, res) {
  const urlParse = new urllib.URL(req.url, `http://127.0.0.1:${port}/`);
  const { searchParams } = urlParse;
  const callback = searchParams.get('callback');
  const name = searchParams.get('name');
  if (callback) {
    const hit = data.find(x => x.name === name);
    const result = `${callback}(${JSON.stringify(hit)})`;
    setTimeout(() => {
      res.end(result);
    }, 30000);
  }
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
