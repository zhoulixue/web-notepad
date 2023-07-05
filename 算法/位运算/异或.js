// 异或可以理解为——无进位相加
/**
 * 1. 0 ^ N = N; N ^ N = 0
 * 2. 满足交换结合律 a ^ b = b ^ a; (a ^ b) ^ c = a ^ (b ^ c)
 */

// 数组中有一种数出现了奇数次，其他的都出现了偶数次，找到出现奇数次的数
function findOdd(arr) {
  return arr.reduce((pre, curr) => {
    return pre ^ curr
  }, 0)
}
const testArray1 = [1,1,1,1,2,2,2,3,3,3,3,4,4]
console.log('findOdd', findOdd(testArray1))
// 数组中有二种数出现了奇数次，其他的都出现了偶数次，找到出现奇数次的数
function findOdd2(arr) {
  // 假设两个数为 a,b. arr异或后得到 a ^ b
  const eor = arr.reduce((pre, curr) => {
    return pre ^ curr
  }, 0)
  // eor = a ^ b 且 eor != 0
  // eor 必然有一个位置上是1
  const rightOne = eor & (~eor + 1) // 提取出最右侧的1

  // 根据rightOne 将 array 分成两部分，一部分有a, 一部分会有 b
  // 分别异或求 a b
  let a = 0
  let b = 0
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if ((item & rightOne) === 0) {
      a ^= item
    } else {
      b ^= item
    }
  }
  return [a, b]
}

const testArray2 = [1,1,1,1,2,2,2,3,3,3,3,4]
console.log('findOdd2', findOdd2(testArray2))
