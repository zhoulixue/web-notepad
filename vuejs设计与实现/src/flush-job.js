const { effect, ref } = require('./reactive');

const jobQueue = new Set()
const p = Promise.resolve()
let isFlushing = false
function flushJob() {
  if (isFlushing) {
    return
  }
  isFlushing = true
  p.then(() => {
    jobQueue.forEach(job => job())
  }).finally(() => {
    isFlushing = false
  })
}
const obj = ref({ bar: 1, foo: 1 })

effect(
  () => {
    console.log(obj.foo)
  },
  {
    scheduler(fn) {
      jobQueue.add(fn)
      flushJob()
    }
  }
)
obj.foo++
obj.foo++
