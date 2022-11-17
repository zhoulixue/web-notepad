// synchronously throw error
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
// asynchronousy with next
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})
