// 类
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter('world');
console.log(greeter.greet());

// 继承
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m.`);
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  };
  move(distance: number = 5) {
    console.log('slithering');
    super.move(distance);
  }
}
const sam = new Snake('sammy')
sam.move();

// 公共，私有与受保护的修饰符
// 默认public
// private 私有不能在外部访问
// protected 不能在类外访问，但是可以在子类内访问

class Person {
  protected name: string;
  protected constructor(name: string) { // 构造函数protected，类不能被实例化
    this.name = name;
  }
}
class Employee extends Person {
  constructor(name: string) {
    super(name);
  }
  public getName(): string {
    return this.name; // 子类可以访问protected
  }
}

// readonly
class Octopus {
  constructor(readonly name: string){}
}
const octopus = new Octopus('tom');
console.log(octopus.name);

// 存取器
class Emp {
  constructor(private _fullname: string = '') {}
  get fullName(): string {
    return this._fullname;
  }
  set fullName(newName: string) {
    this._fullname = newName + 'aaa';
  }
}
const emp = new Emp();
emp.fullName = 'jerry';
console.log(emp.fullName);

// 静态属性
class Grid {
  static origin = { x: 0, y: 0 };
}
console.log(Grid.origin);

// 抽象类
abstract class Animal2 {
  abstract printMethod(): void;
}