function defineReactive(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('get', data, key);
      return value;
    },
    set(newValue) {
      console.log('set', data, key)
      value = newValue
    }
  })
}
function observe(data) {
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

const obj = { a: { b: 'x' } }
observe(obj)
obj.l = 1
// obj.a = { c: 'y' }
// var a = obj.a
// a.b = 'xx'

// console.log(JSON.stringify(obj))

// const arr = [1, 2, 3]
// observe(arr)
// arr[0] = 0
