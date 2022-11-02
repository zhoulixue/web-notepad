// 属性装饰器
// @参数
// 1. target 对于静态成员来说，是类的构造器，对于实例成员来说是类的原型链
// 2. propertyKey 属性名
// @返回
// 返回结果将会被忽略
// 用途：
// 1. 用来收集信息
// 2. 用来给类添加额外的方法和属性

// type PropertyDecorator =
//   (target: Object, propertyKey: string | symbol) => void;
import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
  @format('Hello, %s')
  greeting: string;

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    let formatString = getFormat(this, 'greeting')
    return formatString.replace('%s', this.greeting)
  }
}

const g = new Greeter('john')

console.log(g.greet())
