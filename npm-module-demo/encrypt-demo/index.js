const {compareSync} = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//   console.log('salt', salt)
//   bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//       // Store hash in your password DB.
//       console.log('hash', hash)
//       // Load hash from your password DB.
//       bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//         // result == true
//         console.log('result 1', result)
//       });
//       bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//         // result == false
//         console.log('result 2', result)
//       });
//   });
// });

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//   // Store hash in your password DB.
//   console.log('11 hash', hash)
// });


console.log(compareSync('zlx123', '$2b$10$bga5VVF10tdG08csQ4QcHuV1KeFhNCx0/hTDrS4bvXJA9Sh9iqmC2'))