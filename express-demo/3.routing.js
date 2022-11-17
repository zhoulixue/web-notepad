const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

// path-to-regexp 
// abd and abcd
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
// abcd abbcd abbbcd ...
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})
// abcd abxcd abRANDOMcd ab123cd ...
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})
// abe abcde
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})
// a
app.get(/a/, (req, res) => {
  res.send('/a/')
})
// butterfly dragonfly
app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})

// route parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }

// Route path: /plantae/:genus.:species
// Request URL: http://localhost:3000/plantae/Prunus.persica
// req.params: { "genus": "Prunus", "species": "persica" }

// Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
// req.params: {"userId": "42"}


// route handler
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})
// an array of callback function
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
// a combination of independent functions
app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})

// response methods
// res.download()
// res.end()
// res.json()
// res.jsonp()
// res.redirect()
// res.render()
// res.send()
// res.sendFile()
// res.sendStatus()
