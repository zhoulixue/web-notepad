const fs = require('fs');

const readFile = (path) => new Promise((resolve) => {
  fs.readFile(path, (err, data) => {
    resolve({ err, data });
  });
});

module.exports = {
  readFile,
};
