const fs = require('fs');

const readStream = fs.createReadStream('./data/output.txt');
const writeStream = fs.createWriteStream('./data/output2.txt');

readStream.pipe(writeStream);
