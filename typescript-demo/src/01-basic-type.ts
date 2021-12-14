const iaMale: boolean = true; // 布尔值
const myAge: number = 18; // 数字
const myName: string = 'tom'; // 字符串
const scores: number[] = [100, 90, 80]; // 数组
const x: [string, number] = ['hello', 10]; // 元组
enum Color { Red, Green, Blue }; // 枚举
let c: Color = Color.Green;
let colorName: string = Color[2];
let notSure: any = 4; // any
function warnUser(): void {} // void
let u: undefined = undefined; // undefined
let n: null = null; // null
function err(message: string): never {
  throw new Error(message);
} // never
// 类型断言
const someValue: any = 'this is a string';
const strLen: number = (someValue as string).length;
