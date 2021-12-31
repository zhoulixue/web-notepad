
let name = ''
let age = 0
function Foo (name, age) {
  this._name = name
  this._age = age
}
Foo.prototype.getName = function() {
  return this._name
}
Foo.prototype.setName = function(name) {
  this._name = name
}
Foo.prototype.getAge = function() {
  return this._age
}
Foo.prototype.setAge = function (age) {
  this._age = age
}
Foo.prototype.name = name
Foo.prototype.age = age

Foo.staticName = 'Static Name'
Foo.staticFunc = function () {
  console.log(Foo.staticName)
}

module.exports = {
  name,
  age,
  Foo
}
