const { computed, ref, effect } = require('./reactive');

const obj = ref({ bar: 1, foo: 1 })

const sumRes = computed(() => obj.foo + obj.bar)

effect(() => {
  // 目的，修改obj.foo, 此副作用函数执行
  console.log('sumRes.value', sumRes.value)
})
obj.foo = 2