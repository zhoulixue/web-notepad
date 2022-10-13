var express = require('express');
var router = express.Router();

const mw1 = function (req, res, next) {
  console.log('局部生效的中间件')
  next();
}
const mw2 = function (req, res, next) {
  console.log('局部生效的中间件22')
  next();
}
/* GET users listing. */
router.get('/', [mw1, mw2], function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
