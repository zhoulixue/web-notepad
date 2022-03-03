const fs = require('fs');
const jce2ts = require('./jce2ts');

function getKebabelCase (str) {
  const arr = str.split('.').slice(0, -1).toString().replace(/_(\w)/g, (match, $1) => `-${$1}`).split('');
  return arr.map((x, i) => {
    if (/[a-zA-a]/.test(x) && x.toUpperCase() === x) {
      return i === 0 ? x.toLowerCase() : `-${x.toLowerCase()}`
    } else {
      return x;
    }
  }).join('')
}
// jce2ts('./VmallProdPage.jce', './test2.d.ts');
fs.readdir('./jce', (err, files) => {
  if (err) {
    return console.log(err)
  }
  files.forEach(filename => {
    jce2ts(`./jce/${filename}`, `./pb/${getKebabelCase(filename)}-d.ts`);
  });
});
