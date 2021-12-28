const Buffer = require('buffer').Buffer;

const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4.toJSON());
const buf5 = Buffer.from([257, 257.5, -255, '1']);
console.log(buf5);

const buf = Buffer.from('hello world', 'utf-8');
console.log(buf);
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
