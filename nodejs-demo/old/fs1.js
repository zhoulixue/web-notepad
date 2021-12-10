const { create } = require('domain');
const fs = require('fs');

// 创建文件夹
const mkdir = (path) => new Promise((resolve) => {
  fs.mkdir(path, (err) => {
    resolve({ err });
  });
});
// 获取文件状态
const getStat = (path) => new Promise((resolve) => {
  fs.stat(path, (err, stat) => {
    resolve({ err, stat });
  })
});
// 删除文件
const unlink = (path) => new Promise((resolve) => {
  fs.unlink(path, (err) => {
    resolve({ err })
  })
});

const createDir = async (path) => {
  const { err, stat } = await getStat(path);
  if (!err && stat.isDirectory()) {
    console.log(`directory ${path} is already exist.`);
    return;
  }
  if (!err && stat.isFile()) {
    console.log(`unlink file ${path}`);
    await unlink(path);
  }
  const { err: mkdirErr } = await mkdir(path);
  if (!mkdirErr) {
    console.log(`create directory ${path}`);
  } else {
    console.error(`create directory error ${mkdirErr.toString()}`);
  }
};

createDir('./upload');
