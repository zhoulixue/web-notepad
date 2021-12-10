const path = require('path');
const file = require('./file');

const getMimeType = async (url) => {
  let extname = path.extname(url);
  extname = extname.split('.').slice(-1).toString();
  const { err, data } = await file.readFile('./module/mime.json');
  const mimeTypeMap = err ? {} : JSON.parse(data);
  return mimeTypeMap[extname] || 'text/plain';
}
module.exports = {
  getMimeType,
};
