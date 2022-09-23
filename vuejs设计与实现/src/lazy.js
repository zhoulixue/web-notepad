const { effect, ref } = require('./reactive');

const obj = ref({ bar: 1, foo: 1 })

const effectFn = effect(() => {
  // getter
  return obj.bar + obj.foo
}, { lazy: true })

const value = effectFn()

console.log(value)
