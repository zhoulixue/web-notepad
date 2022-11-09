// 二分法常见问题
// 1、在一个有序数组中，找某个数是否存在
// 2、在一个有序数组中，找>=某个数最左侧的位置
// 3、局部最小值问题

// 局部最小值问题，找到任意一个值，左右两边的数都比他大

function findLocalMin(arr: number[]) {
  const {length} = arr
  if (length === 0) {
    return null
  }
  if (length === 1) {
    return arr[0]
  }
  if (arr[0] < arr[1]) {
    return arr[0]
  }
  if (arr[length - 1] < arr[length - 2]) {
    return arr[length - 1]
  }

  return findLocalMin(arr.slice(0, Math.ceil(length / 2)))
}

const arr11 = []
const arr22 = [1]
const arr33 = [1, 2]
const arr44 = [2, 1]
const arr55 = [2,1,3]
const arr66 = [2,1,3,5]

console.log(findLocalMin(arr11))
console.log(findLocalMin(arr22))
console.log(findLocalMin(arr33))
console.log(findLocalMin(arr44))
console.log(findLocalMin(arr55))
console.log(findLocalMin(arr66))