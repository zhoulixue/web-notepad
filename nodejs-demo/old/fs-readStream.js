const fs = require('fs');

let count = 0;
let str = '';
const readStream = fs.createReadStream('./data/output.txt');

readStream.on('data', (data) => {
  str += data;
  count += 1;
});
readStream.on('end', () => {
  console.log('read file end', str, count);
});
readStream.on('error', (err) => {
  console.error(err);
});
