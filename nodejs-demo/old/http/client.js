const http = require('http');

const callback = function (res) {
  let body = '';
  res.on('data', (data) => {
    body += data;
  });

  res.on('end', () => {
    console.log(body);
  });
};
const options = {
  host: 'localhost',
  port: '3000',
  path: '/',
};
const req = http.request(options, callback);
req.end();
