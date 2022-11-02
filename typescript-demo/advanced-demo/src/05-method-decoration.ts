// 方法装饰器
// type MethodDecorator = <T>(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<T>
// ) => TypedPropertyDescriptor<T> | void;

// @参数
// 1. target 对于静态成员来说是构造器，对于实例成员来说是类的原型链
// 2. propertyKey 属性名
// 3. descriptor 属性描述器
// @返回
// 如果返回了值，它会被用于替代属性的描述器

function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log(`params: ${args}`)
    const result = original.call(this, ...args)
    console.log(`result: ${result}`)
    return result
  }
}

class C3 {
  @logger
  add(x: number, y: number) {
    return x + y
  }
}

const c3 = new C3()

c3.add(1, 2)