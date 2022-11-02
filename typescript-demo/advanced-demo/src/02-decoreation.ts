function f(key: string): any {
  console.log("evaluate: ", key);
  return function () {
    console.log("call: ", key);
  };
}
/**
 * 装饰器求值
 * 1. 参数装饰器，方法装饰器，访问符装饰器，属性装饰器，应用到每个实例成员
 * 2. 参数装饰器，方法装饰器，访问符装饰器，属性装饰器，应用到每个静态成员
 * 3. 参数装饰器，应用到构造函数
 * 4. 类装饰器应用到类
 */

@f("Class Decorator")
class C1 {
  @f("Static Property")
  static prop?: number;

  @f("Static Method")
  static method(@f("Static Method Parameter") foo) {}

  constructor(@f("Constructor Parameter") foo) {}

  @f("Instance Method")
  method(@f("Instance Method Parameter") foo) {}

  @f("Instance Property")
  prop?: number;
}
// evaluate:  Instance Method
// evaluate:  Instance Method Parameter
// call:  Instance Method Parameter
// call:  Instance Method
// evaluate:  Instance Property
// call:  Instance Property
// evaluate:  Static Property
// call:  Static Property
// evaluate:  Static Method
// evaluate:  Static Method Parameter
// call:  Static Method Parameter
// call:  Static Method
// evaluate:  Class Decorator
// evaluate:  Constructor Parameter
// call:  Constructor Parameter
// call:  Class Decorator