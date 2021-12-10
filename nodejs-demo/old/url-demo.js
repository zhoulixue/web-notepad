const url = require('url')
const querystring = require('querystring');

const address = 'http://localhost:8888/start?foo=bar&hello=world';

const res1 = url.parse(address);
const res2 = querystring.parse(res1.query);
console.log(res1);
console.log(res2);

console.log(__dirname, __filename);