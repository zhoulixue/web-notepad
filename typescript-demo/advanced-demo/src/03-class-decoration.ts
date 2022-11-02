// 类装饰器
// @参数
// 1. target 类的构造器
// @返回
// 如果类装饰器返回了一个值，它将会被用来代替原有的类构造器的声明
// 类装饰器适用于继承一个现有的类，并添加一些属性和方法

// type ClassDecorator = <TFunction extends Function> (target: TFunction) => TFunction | void;
type Constuctor = { new (...args: any[]): any };

function toString<T extends Constuctor>(BaseClass: T) {
  return class extends BaseClass {
    toString() {
      return JSON.stringify(this);
    }
  };
}

@toString
class C2 {
  public foo = "foo";
  public num = 24;
}

const c2 = new C2()
console.log(c2.toString())
