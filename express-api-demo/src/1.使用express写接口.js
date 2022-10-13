const express = require('express')
const cors = require('cors')
const apiRouter = require('./api-router');

const app = express()
app.use(cors)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', apiRouter)
app.listen(1234, () => {
  console.log('listening at 7000')
})
