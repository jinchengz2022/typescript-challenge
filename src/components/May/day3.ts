export const app = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */

// 函数
const firstFunc: (num: number, str: string) => string = (num, str) => {
  return `num: ${num}, msg: ${str}`;
}
firstFunc(1000, 'morning~');

// 剩余参数
const secondFunc = (name: string, ...restName: string[]) => {
  return name + restName.join(',');
}
secondFunc('lucy', 'jack', 'joe', 'cady');

// this
interface FirstObj {
  firstArr: string[];
  createFunc(this: FirstObj): () => {};
}
const firstObj: FirstObj = {
  firstArr: ['morning', 'noon', 'night'],
  createFunc: function () { // 若提示this为any类型，则 function(this: FirstObj)
    // return this.firstArr[0] + 'haha~' // okey~
    // return function () {
    //   return this.firstArr[0] + 'haha~'  // error! 这里this为undefined，顶级的非方法调用this则视为undefined
    // }
    return () => {
      return this.firstArr[0] + 'haha~' // okey~ 
    }
  }
}

// this参数在回调函数中
interface ThisFunctionCall {
  handleClick(add: (this: void, e: Event) => void, k: string): () => void;
}
class CallClass {
  animal: string | undefined;
  // callFunc = (e: Event) => {
  //   this.animal = '';
  // }
  add(this: void, e: any): void { // 这里的this类型为void而不是CallClass
    console.log('e');
    // 需要this捕获animal 则使用箭头函数
  }
}
const callClass = new CallClass();
const utilFunc: ThisFunctionCall = {
  handleClick: () => () => {}
};

utilFunc.handleClick(callClass.add, '');


// 泛型
const argFunc = (num: number): number => {
  return num;  // 不用泛型前
}
const generic = <T>(num: T): T => { // 类型变量T
  return num;
}
generic(2);
const identity = <T>(arg: T): T => {
  return arg;
}

const myTest1: { <Y>(arg: Y): Y } = identity; // 使用不同泛型参数名，对应即可
// 把上边的字面量拿出来做一个接口：
interface Identity {
  <T>(age: T): T;
}
const myTest2: Identity = identity;

interface IdentityChange<T> { // 泛型参数作为整个接口的参数
 (num: T): T;
}
const myTest3: IdentityChange<string> = identity; // 这时引用接口时需要给接口加上接口参数

// 泛型类 
class GenericClass<T> {}
// 类有两部分：静态和实例部分，泛型属于实例部分

// 泛型约束
interface LengthInter {
  length: number;
}
const genericFunTest1 = <T extends LengthInter>(arg: T): T => {
  // arg.length; 若想有length属性则
  return arg;
}
genericFunTest1({ length: 333 }) // 约束后，传入值必须包含定义的属性

// 泛型类型中使用类型参数
const genericFunTest2 = <T, K>(obj: T, key: K) => {
// console.log(obj[key]);
}
const objToGeneric = { a: 2, b: 3, dd: 0 };
genericFunTest2(objToGeneric, 'a');

// 枚举
enum CODE {
  A, B = 10 , C,
}
console.log(CODE.A, CODE.C); // 枚举变量没有值时则从0开始自动增长 1 2, 若给某一个枚举变量赋值为数字则后边的变量接着这个数字递增
const a = () => 222;
enum VALUE {
  enumNum,
  fun1 = a(),
  // enumNum 未赋值的枚举变量不允许放在赋过值得变量后只能在前
}

// 异构枚举
enum YIGOU { // 混入数字和字符串的枚举，不推荐！
  NUM = 1,
  STR = 'STR'
}

// 反向枚举
enum ARROW{
  A = 10, // 不会为字符串枚举变量反向映射
}
const aStr = ARROW.A;
const bStr = ARROW[aStr];

// const枚举
const enum CONSTENUM {
  CODE = 1,
  // HUA = a() 常量枚举不允许存在计算成员
}

enum PP {
  A = 1,
  B,
  C = 2
}
console.log(PP.A, PP.B, PP.C); // 1 2 2

// 类型兼容
interface Person1 {
  name: string;
  
}
class PersonClass {
  name: string = '';
}
const person: Person1 = new PersonClass(); // okey~ 

enum Status {
  ok, error,
};
enum Mood {
  ok, bad
}
let status1 = Status.error;
// status1 = Mood.bad // 不同枚举变量间不兼容

// 静态成员和构造函数不在比较范围内,只有实例成员会被比较
class JianrongClass1 {
  sex: string = '';
  constructor(name: string) {}
}
class JianrongClass2 {
  sex: string = '';
  constructor(name: string) {}
}
let jianrong1: JianrongClass1 = new JianrongClass1('');
let jianrong2: JianrongClass2 = new JianrongClass2('');
jianrong1.sex = jianrong2.sex;
jianrong2 = jianrong1;


}