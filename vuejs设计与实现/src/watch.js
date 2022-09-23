
const { effect, ref } = require('./reactive')
const { clone } = require('./utils')

const obj = ref({ bar: 1, foo: 1, time: 1000 })

function watch(source, cb, options = {}) {
  const getter = typeof source === 'function' ? source : () => traverse(source)
  let oldValue, newValue
  // 用来存储用户注册的过期回调
  let cleanup
  function onInvalidate(fn) {
    cleanup = fn
  }

  const job = () => {
    newValue = clone(effectFn())
    if (cleanup) {
      cleanup()
    }
    cb(newValue, oldValue, onInvalidate)
    oldValue = newValue
  }

  const effectFn = effect(
    () => getter(),
    {
      lazy: true,
      scheduler: () => {
        if (options.flush === 'post') {
          const p = Promise.resolve()
          p.then(job)
        } else {
          job()
        }
      }
    }
  )
  if (options.immediate) {
    job()
  } else {
    oldValue = clone(effectFn())
  }
}
function traverse(value, seen = new Set()) {
  if (typeof value !== 'object' || value === null || seen.has(value)) return
  seen.add(value)
  Object.keys(value).forEach(key => {
    traverse(value[key], seen)
  })
  return value
}
// demo
function getData(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time)
    }, time);
  })
}

watch(obj, async (newValue, oldValue, onInvalidate) => {
  console.log('数据变化了', newValue, oldValue)
  let expired = false
  onInvalidate(() => {
    expired = true
  })
  const res = await getData(newValue.time)
  if (!expired) {
    console.log(res)
  }
}, {
  immediate: true,
  flush: 'pre' // post | sync
})
// getter
// watch(
//   () => obj.foo,
//   (newVal, oldVal) => console.log('obj.foo 的值变了', newVal, oldVal)
// )

// obj.foo = 2
// obj.bar = 1
obj.time = 5000
obj.time = 3000
