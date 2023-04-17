function addExpiresHeader(req, res, next) {
  console.log(req.url)
  if (req.url === '/index.html') {
    res.setHeader('Cache-Control', 'max-age=7776000')
  }
  next();
}

module.exports = {
  addExpiresHeader
}