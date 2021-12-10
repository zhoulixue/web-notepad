const file = require('../module/file');
const util = require('../module/util');

const static = async (req, res, staticPath = 'static') => {
  const { url } = req;
  if (url !== '/favicon.ico') {
    const filePath = `${staticPath}${url}`;
    const { err, data } = await file.readFile(filePath);
    if (!err) {
      const mimeType = await util.getMimeType(url);
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    }
  }
}
module.exports = {
  static,
};
