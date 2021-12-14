// 泛型变量
function identity<T>(arg: T[]): T[] {
  return arg;
}
// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}
// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  constructor(value: T) {
    this.zeroValue = value;
  }
}
// 泛型约束
interface Lengthwise {
  length: number;
}
function identity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 在泛型中使用类类型
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  say() {
    console.log('animal');
  }
}
class Bee extends Animal {
  constructor(name: string) {
    super(name);
  }
  say() {
    console.log('bee');
  }
}
class Lion extends Animal {
  constructor(name: string) {
    super(name);
  }
  say() {
    console.log('lion');
  }
}

function createInstance<A extends Animal>(c: new() => A): A {
  return new c();
}

export {};