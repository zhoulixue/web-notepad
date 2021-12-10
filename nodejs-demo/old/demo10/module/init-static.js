const file = require('./file');
const util = require('./util');

const initStatic = async (req, res, staticPath = 'static') => {
  const { url } = req;
  const filePath = `${staticPath}${url}`;
  const { err, data } = await file.readFile(filePath);
  if (!err) {
    const mimeType = await util.getMimeType(url);
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  }
}
module.exports = {
  initStatic,
};
