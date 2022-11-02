// 访问器装饰器
// 访问器装饰器和方法装饰器很接近，唯一的区别在于描述器中有的key不同

// 方法装饰器的描述器key为：
// value
// writable
// enumerable
// configurable

// 访问器装饰器的描述器的key为
// get
// set
// enumerable
// configurable
import "reflect-metadata";

function immutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(Reflect.getMetadata("design:type", target, propertyKey))
  const original = descriptor.set
  // 重写了set方法
  descriptor.set = function(value: any) {
    return original?.call(this, { ...value })
  }
}
class C4 {
  private $point = { x: 0, y: 0 }

  @immutable
  set point(value: { x: number, y: number}) {
    this.$point = value
  }
  get point() {
    return this.$point
  }
}

const c4 = new C4()

const point = { x: 1, y: 1 }

c4.point = point

console.log(c4.point === point)