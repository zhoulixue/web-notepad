// Application-level middleware
const express = require('express')
const app = express()

// 1. no mount path executed every time
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
// 2. mounted on the /user/:id path
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
// 3. router handler
app.get('/user/:id', (req, res, next) => {
  res.send('USER')
})
// 4. series middleware
app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
// 5. multiple routes

app.get('/user/:id', (req, res, next) => {
  console.log('ID:', req.params.id)
  next()
}, (req, res, next) => {
  res.send('User Info')
})

// never called
app.get('/user/:id', (req, res, next) => {
  res.send(req.params.id)
})
/// 6. next('route') skip the rest of the middleware functions
app.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
  res.send('special')
})
// 7. array with middleware
function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
  res.send('User Info')
})