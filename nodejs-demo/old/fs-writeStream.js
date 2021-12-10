const fs = require('fs');

let str = '';
for (let i = 0; i < 1e4; i++) {
  str += `写入数据${i}\n`;
}

const writeStream = fs.createWriteStream('./data/output.txt');
writeStream.write(str);
writeStream.end();
writeStream.on('finish', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('write success');
  }
});
