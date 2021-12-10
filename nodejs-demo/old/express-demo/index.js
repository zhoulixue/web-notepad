const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const multer = require('multer');

const app = express();
const port = 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer().array('image'));
app.use(cookieParser());

app.get('/upload.html', function(req, res) {
  res.sendFile(`${__dirname}/public/upload.html`);
});
app.post('/file_upload', function(req, res) {
  console.log(req.files, req.file);
  const { buffer } = req.files[0];
  if (buffer) {
    const des_file = `${__dirname}/upload/${req.files[0].originalname}`;
    fs.writeFile(des_file, buffer, function(err) {
      const response = err ? { code: 1, msg: 'upload failed' } : { code: 0, msg: 'upload successfully' };
      res.end(JSON.stringify(response));
    });
  } else {
    res.end('no file');
  }
  
})

app.get('/index.html', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
app.get('/process_get', (req, res) => {
  console.log('Cookies', req.cookies);
  const response = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
  };
  res.end(JSON.stringify(response));
})
app.post('/process_post', urlencodedParser, (req, res) => {
  const response = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  res.end(JSON.stringify(response));
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
