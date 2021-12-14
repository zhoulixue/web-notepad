const fs = require('fs')

// 检测是文件还是目录
fs.stat('./html', (err, stat) => {
  if (err) {
    return console.log(err)
  }
  const isDirectory = stat.isDirectory()
  const isFile = stat.isFile()
  console.log(isDirectory, isFile)
})
// 创建目录
fs.mkdir('./temp/test', { recursive: true }, err => {
  if (err) {
    return console.log(err)
  }
  console.log('directory make succeessful')
})
// 创建和写入文件
fs.writeFile('./temp/index.css', 'h2{color: red}\n', err => {
  if (err) {
    return console.log(err)
  }
  console.log('write successful')
})
// 追加文件内容
fs.appendFile('./temp/index.css', 'h2{color: red};\n', err => {
  if (err) {
    return console.log(err)
  }
  console.log('append file successful')
})
// 异步读取文件
fs.readFile('./temp/index.css', (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log(data)
})
// 同步读取文件
const data = fs.readFileSync('./temp/index.css')
console.log(data)
// 异步读取目录
fs.readdir('./temp', (err, files) => {
  if (err) {
    return console.log(err)
  }
  console.log(files)
})
// 同步读取目录
const files = fs.readdirSync('./temp')
console.log(files)
// 重命名
fs.rename('./temp', './ttp', err => {
  if (err) {
    return console.log(err)
  }
  console.log('rename successful')
})
// 删除文件
fs.unlink('./temp/index.css', err => {
  if (err) {
    return console.log(err)
  }
  console.log('unlink successful')
})
// 删除目录
fs.rmdir('./temp', err => {
  if (err) {
    return console.log(err)
  }
  console.log('rmdir successful')
})
// 写数据流
let str = ''
for (let i = 0; i < 1e4; i++) {
  str += `${i}\n`
}
const writeStream = fs.createWriteStream('./data/output.txt')
writeStream.write(str)
writeStream.end()
writeStream.on('finish', () => {
  console.log('write successful')
})
writeStream.on('error', err => {
  console.log(err)
})
// 读数据流
let count = 0
let str2 = ''
const readStream = fs.createReadStream('./data/output.txt')
readStream.on('data', data => {
  str += data
  count += 1
})
readStream.on('end', () => {
  console.log(str2, count)
})
readStream.on('error', err => {
  console.log(err)
})
// 管道流
const readStream2 = fs.createReadStream('./data/output.txt')
const writeStream2 = fs.createWriteStream('/data/output2.txt')
readStream2.pipe(writeStream2)
