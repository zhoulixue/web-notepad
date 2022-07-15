const { set } = require("lodash")

function observe(data) {
  return new Proxy(data, {
    get(target, key, receiver) {
      console.log('get', key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value,receiver) {
      console.log('set', key)
      return Reflect.set(target,key, value, receiver)
    }
  })
}
const obj = { a: { b: 'o' }, c: 'p' }
const proxyObj = observe(obj)

proxyObj.c = 'o'
proxyObj.a.b = 'pp'
proxyObj.d = {}
proxyObj.d.l = 1

// const arr = [1, 2, 3]
// const parr = observe(arr)

// parr.push(8)
// parr[7] = 0
