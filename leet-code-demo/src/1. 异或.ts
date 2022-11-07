// 1. 异或 规则 
// n ^ n = 0
// n ^ 0 = n
// 满足交换律和结合律

// 2. 异或的本质
// 相加不进位

// 3. 问题举例

// 有n个数字，其中只有一种数出现了奇数次，其余的均出现了偶数次，找到这个数

// 根据公式 n ^ n = 0，n ^ 0 = n 将所有数异或得到的数出现了奇数次
function findOnceNumber(arr: number[]) {
  return arr.reduce((res, num) => {
    return num ^ res
  }, 0)
}

const arr = [1,1,2,2,3,3,4,4,4,5,5]

const res = findOnceNumber(arr)
console.log(res)

// 有n个数字，其中只有两种数出现了奇数次，其余的均出现了偶数次，找到这两个数
function findTwiceNumber(arr: number[]) {
  // eor = a ^ b
  // eor !== 0
  // eor 必然有一个位置上是 1
  const eor = arr.reduce((res, num) => {
    return num ^ res
  }, 0)
  // 提取出最右边的1 常用操作
  const rightOne = eor & (~eor + 1)
  // 找到所有相同位置不为 1 的数，异或得到 onlyOne
  let onlyOne = 0;
  arr.forEach(cur => {
    if((cur & rightOne) === 0) {
      onlyOne ^= cur
    } 
  })
  return [onlyOne, eor ^ onlyOne]
}

const arr2 = [1,1,2,2,3,4,5,5]
const res2 = findTwiceNumber(arr2)
console.log(res2)
