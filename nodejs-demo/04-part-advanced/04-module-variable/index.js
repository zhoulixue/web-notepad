const { Foo } = require('./foo')

const foo = new Foo('Tom', 18)
console.log(foo.getName())
console.log(foo.getAge())

foo.setName('jerry')
foo.setAge(14)
console.log(foo.getName())
console.log(foo.getAge())

console.log(foo.name)
console.log(foo.age)

foo.name = 'kity'
foo.age = 12

console.log(foo.name)
console.log(foo.age)
console.log(foo.__proto__.name)
console.log(foo.__proto__.age)

console.log(Foo.staticName)
Foo.staticFunc()
