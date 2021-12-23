const fs = require('fs')
const path = require('path')

const readFile = (filepath) => new Promise((resolve) => {
  fs.readFile(filepath, (err, data) => {
    resolve({ err, data })
  })
})
const getMimeType = async (url) => {
  let extname = path.extname(url)
  extname = extname.split('.').slice(-1).toString()
  const { err, data } = await readFile('./modules/mime.json')
  const mimeTypeMap = err ? {} : JSON.parse(data)
  return mimeTypeMap[extname] || 'text/plain'
}

const getURL = path => {
  const url = new URL(path, 'http://example.com')
  return url
}

module.exports = {
  readFile,
  getMimeType,
  getURL
}
