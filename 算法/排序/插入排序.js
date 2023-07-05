// 找到 i 到 n 最小值的位置，跟i交换
function sort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex)
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

