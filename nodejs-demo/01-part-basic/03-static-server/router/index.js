const file = require('../module/file')
const utils = require('../module/utils')

const static = async (req, res, staticPath = 'static') => {
  const { url } = req
  if (url !== '/favicon.ico') {
    const filePath = `${staticPath}${url}`;
    const { err, data } = await file.readFile(filePath)
    console.log(filePath, err, data)
    if (!err) {
      const mimeType = await utils.getMimeType(url)
      res.writeHead(200, { 'Content-Type': mimeType })
      res.end(data)
    }
  }
}

module.exports = {
  static
}
