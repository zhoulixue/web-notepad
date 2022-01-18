const jsonexport = require('jsonexport');
const fs = require('fs');

const reader = fs.createReadStream('data.json');
const writer = fs.createWriteStream('out.csv');

reader.pipe(jsonexport()).pipe(writer);
