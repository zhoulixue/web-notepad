const http = require('http');
const jsdom = require('jsdom')


http.createServer(function (req, res) {
  if (req.url === '/dom') {
    const { JSDOM } = jsdom;
    const dom = new JSDOM()
    global.window = dom.window
    global.document = dom.window.document
    global.navigator = dom.window.navigator
    document.cookie = 'a=111'
    console.log(window, document)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
  }
}).listen(9000);

console.log('Server running at http://127.0.0.1:9000/');
