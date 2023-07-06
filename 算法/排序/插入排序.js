// 0-i 是有序的，将 i + 1 插入 0-i,使之有序
function sort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >=0; j--) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      } else {
        break
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

