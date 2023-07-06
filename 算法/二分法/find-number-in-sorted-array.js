// 在一个有序数组中，找某个数是否存在

function findNumberInSortedArray(array, num, left, right) {
  console.log(left, right)
  const leftIndex = left || 0;
  const rightIndex = right || array.length - 1;
  // 边界条件，数组中只剩下1到2个值
  if (rightIndex - leftIndex <= 1) {
    return array.slice(leftIndex, rightIndex + 1).includes(num)
  }
  // 二分
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  const middle = array[middleIndex]
  console.log('middle', middleIndex)
  if (num > middle) {
    return findNumberInSortedArray(array, num, middleIndex + 1, rightIndex)
  }
  if (num < middle) {
    return findNumberInSortedArray(array, num, leftIndex, middleIndex - 1)
  }
  if (num === middle) {
    return true
  }
  return false
}

const testArray = [1,2,3,4,5,6,7,8]

const res = findNumberInSortedArray(testArray, 0)
console.log(res)
const res2 = findNumberInSortedArray(testArray, 8)
console.log(res2)

