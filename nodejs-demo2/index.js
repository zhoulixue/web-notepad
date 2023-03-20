
const spring = require('css-spring').default
const { toString } = require('css-spring')
const keyframes = spring(
  { scale: 0 }, // from
  { scale: 1 }, // to
  // precision表示精度有2位
  { damping: 20.17, stiffness: 381.47, precision: 4 }
);
console.log(keyframes)
console.log(toString(keyframes))

const res = {}
for (k in keyframes) {
  const num = k.slice(0, -1) * 2 / 5;

  const key = `${Math.floor(num)}%`
  res[key] = keyframes[k]
}
console.log(res)
console.log(toString(res))

// function numFixed(num, bit) {
//   const arr = (num * (10 ** bit)).toString().split('.')
//   return arr[0] / 10 ** bit
// }