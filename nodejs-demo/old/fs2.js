const fs = require('fs');

// 读取目录下的所有目录和文件
const readdir = (path) => new Promise((resolve) => {
  fs.readdir(path, (err, files) => {
    resolve({ err, files });
  });
});
// 获取文件和目录状态
const getStat = (path) => new Promise((resolve) => {
  fs.stat(path, (err, stat) => {
    resolve({ err, stat });
  });
});

const getDirectory = async (path) => {
  const { err, files } = await readdir(path);
  if (err) {
    console.log(`${path} is not a directory`);
    return;
  }
  const directorys = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = `${path}/${file}`;
    const { err, stat } = await getStat(filePath);
    if (!err && stat.isDirectory()) {
      directorys.push(file);
    }
  }
  console.log(directorys);
  return directorys;
};

getDirectory('./wwwroot');