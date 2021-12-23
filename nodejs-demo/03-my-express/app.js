const http = require('http')
const initStatic = require('./modules/init-static')
const { getURL } = require('./modules/util')

const createApp = () => {
  const G = {
    GET: {},
    POST: {},
    staticPath: 'static'
  }
  const app = (req, res) => {
    initStatic(req, res, G.staticPath)
    
    const { url, method } = req
    const { pathname } = getURL(url)
    const func = G[method][pathname]
    if (func) {
      if (method === 'GET') {
        func(req, res)
      } else if (method === 'POST') {
        let postData = ''
        req.on('data', (chunk) => {
          postData += chunk
        })
        req.on('end', () => {
          req.body = postData
          func(req, res)
        })
      }
    }
  }

  // register get method
  app.get = (url, method) => {
    const { pathname } = getURL(url)
    G.GET[pathname] = method
  }
  // register post method
  app.post = (url, method) => {
    const { pathname } = getURL(url)
    G.POST[pathname] = method
  }
  // set staticPath
  app.static = (path) => {
    G.staticPath = path
  }
  app.listen = (port, cb) => {
    http.createServer(app).listen(port)
    cb()
  }
  return app
}
module.exports = createApp
