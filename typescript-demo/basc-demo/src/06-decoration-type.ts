/**
 * 装饰器求值
 * 1. 参数装饰器，方法装饰器，访问符装饰器，属性装饰器，应用到每个实例成员
 * 2. 参数装饰器，方法装饰器，访问符装饰器，属性装饰器，应用到每个静态成员
 * 3. 参数装饰器，应用到构造函数
 * 4. 类装饰器应用到类
 */

// 类装饰器
function sealed(): ClassDecorator {
  // target，类构造函数
  return function(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
  }
}
// 方法装饰器
function enumerable(value: boolean): MethodDecorator  {
  // target, 静态成员是类构造函数，实例成员是类的原型对象
  // porpertyKey, 成员名字
  // descriptor, 成员的属性描述符
  return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}
// 访问器装饰器
function configurable(value: boolean): MethodDecorator {
  return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  }
}
// 属性装饰器
function format(formatString: string): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    
  }
}
// 参数装饰器
function validate(): ParameterDecorator {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {

  }
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  @configurable(true)
  get x() {
    return this._x;
  }
  @configurable(false)
  get y() {
    return this._y;
  }
}


@sealed()
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @enumerable(true)
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

export {};