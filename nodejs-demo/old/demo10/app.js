const http = require('http');
const { initStatic } = require('./module/init-static');

const createApp = () => {
  const G = {
    GET: {},
    POST: {},
    staticPath: 'static',
  };

  const app = (req, res) => {
    initStatic(req, res, G.staticPath);
    const { method, url } = req;
    const cb = G[method][url]
    if (cb) {
      if (method === 'GET') {
        cb(req, res);
      } else {
        let postData = '';
        req.on('data', (chunk) => {
          postData += chunk;
        });
        req.on('end', () => {
          req.body = postData;
          cb(req, res);
        })
      }
    }
  };
  // register get method
  app.get = (url, cb) => {
    G.GET[url] = cb;
  };
  // register post method
  app.post = (url, cb) => {
    G.POST[url] = cb;
  };
  // set static directory
  app.static = (path) => {
    G.staticPath = path;
  };
  // rewrite listen method
  app.listen = (port, cb) => {
    http.createServer(app).listen(port);
    cb();
  };
  return app;
}

module.exports = createApp