// 参数装饰器
// type ParameterDecorator = (
//   target: Object,
//   propertyKey: string | symbol,
//   parameterIndex: number
// ) => void;

// @参数
// 1. target 对于静态成员来说是类的构造器，对于实例成员来说是类的原型链
// 2. propertyKey 属性名（注意是方法的名称，而不是参数的名称）
// 3. parameterIndex 参数在方法中所处位置的下标
// @返回
// 返回的值将会被忽略
import "reflect-metadata";

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.log(Reflect.getMetadata("design:type", target, propertyName))
    console.log(Reflect.getMetadata("design:paramtypes", target, propertyName))
    console.log(Reflect.getMetadata("design:returntype", target, propertyName))
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }

        return method?.apply(this, arguments);
    }
}

class Greeter {
  greeting: string;

  constructor(message: string) {
      this.greeting = message;
  }

  @validate
  greet(@required name: string, n?: number): string {
      return "Hello " + name + ", " + this.greeting;
  }
}

const g = new Greeter('123')

g.greet('')