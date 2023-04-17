const express = require('express')
// const { addExpiresHeader } = require('./middleware')

const app = express()
// app.use(addExpiresHeader);
app.use(express.static('public', { maxAge: 7776000 }));

app.listen(4000, () => {
  console.log('app listening at 4000')
})
