const fs = require('fs')
const { resolve } = require('path')

const readFile = (path) => new Promise((resolve) => {
  fs.readFile(path, (err, data) => {
    resolve({ err, data })
  })
})
module.exports = {
  readFile
}
