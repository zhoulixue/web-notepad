// 如何知道一个方法中有多少个参数，每个参数的类型是什么呢？
// tsconfig.json 中有一个配置 emitDecoratorMetadata，
// 开启该特性，
// typescript 会在编译之后自动给类、方法、访问符、属性、参数添加如下几个元数据:

// design:type：被装饰目标的类型
// 装饰器作用于成员属性：属性的标注类型
// 装饰器作用于成员方法：Function 类型
// design:paramtypes: 被装饰目标的参数类型
// 装饰器作用于成员方法：方法形参列表的标注类型
// 装饰器作用于类：构造函数形参列表的标注类型
// design:returntype
// 成员方法：函数返回值的标注类型

import "reflect-metadata";

class A {
  public static method1() {}
  public method2() {}
}

let obj = new A();

Reflect.defineMetadata("key", 1, A);
Reflect.defineMetadata("key", 2, A, "method1");
Reflect.defineMetadata("key", 3, obj);
Reflect.defineMetadata("key", 4, A, "method2");

console.log(Reflect.getMetadata("key", A));
console.log(Reflect.getMetadata("key", A, "method1"));
console.log(Reflect.getMetadata("key", obj));
console.log(Reflect.getMetadata("key", obj, "method2"));

// 
@Reflect.metadata("key", 1)
class B {
  @Reflect.metadata("key", 2)
  public static method1() {}

  @Reflect.metadata("key", 4)
  public method2() {}
}

let obj2 = new B();

console.log(Reflect.getMetadata("key", B));
console.log(Reflect.getMetadata("key", B, "method1"));
console.log(Reflect.getMetadata("key", obj2));
console.log(Reflect.getMetadata("key", obj2, "method2"));