const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_test_db'
})

db.query('select * from users', (err, results) => {
  console.log(11, err.message)
  console.log(results)
})

module.exports = db
