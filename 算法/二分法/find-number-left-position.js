// 在一个有序数组中，找到 >= 某个数最左侧的位置

function findNumberLeftPosition(array, num, left, right, resIndex = null) {
  const leftIndex = left || 0;
  const rightIndex = right || array.length - 1;
  // 边界条件
  if (rightIndex - leftIndex <= 1) {
    return array[leftIndex] >= num ? leftIndex : (array[rightIndex] >= num ? rightIndex : null)
  }

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  const middle = array[middleIndex];

  // 左边没有 >= num 的了，直接看右边
  if (middle < num) {
    return findNumberLeftPosition(array, num, middleIndex + 1, rightIndex, resIndex)
  }
  // 找到了一个 >= num 的位置，看左边还有没有更靠前的
  if (middle >= num) {
    return findNumberLeftPosition(array, num, leftIndex, middleIndex - 1, middleIndex)
  }
}

const testArray = [1,1,2,2,2,3,3,3,3,4,4]

const res = findNumberLeftPosition(testArray, 2)
console.log(res)
const res2 = findNumberLeftPosition(testArray, 3)
console.log(res2)
const res3 = findNumberLeftPosition(testArray, 0)
console.log(res3)
