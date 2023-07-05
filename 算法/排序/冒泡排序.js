// 从 i 开始跟右侧值做比较，将较大的值交换到右侧

function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

function swap(array, i, j) {
  array[i] = array[i] ^ array[j]
  array[j] = array[i] ^ array[j]
  array[i] = array[i] ^ array[j]
}


const testArray = [2,4,1,6,2,20,3]

console.log(sort(testArray))

