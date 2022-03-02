interface LabeledValue {
  label?: string; // 可选属性
}

function printLabel(labelObj: LabeledValue) {
  console.log(labelObj.label);
}
const myObj = { size: 10, label: 'size 10 object' };
printLabel(myObj);

interface Point {
  readonly x: number;
  readonly y: number; // 只读属性
}

const ro: ReadonlyArray<number> = [1, 2, 3, 4];

interface SquareConfig {
  color?: string,
  width?: number,
  [propName: string]: any;
}

function createSquare(config: SquareConfig): void {
  console.log(config);
}
const mySquare = createSquare({ colour: 'red', width: 100 });


// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 可索引的类型
interface StringArray {
  [index: number]: string;
}
// 类类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor() {
    this.currentTime = new Date();
  }
}
// 继承接口
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset():void;
}
function getCounter(): Counter {
  let counter = function (start:number): string {
    return `${start}`;
  } as Counter;
  counter.interval = 123;
  counter.reset = function(){};
  return counter;
}
// 接口继承类
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}
