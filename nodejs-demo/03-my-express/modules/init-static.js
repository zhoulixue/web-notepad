const { readFile, getMimeType } = require('./util')

const initStatic = async (req, res, staticPath = 'static') => {
  const { url } = req
  const filepath = `${staticPath}${url}`
  const { err, data } = await readFile(filepath)
  if (!err) {
    const mimeType = await getMimeType(url)
    res.writeHead(200, { 'Content-Type': mimeType })
    res.end(data)
  }
}

module.exports = initStatic
