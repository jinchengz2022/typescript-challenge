export const app = () => {
  // 交叉类型: 多个类型合并为一个类型
type TestType1 = {
  name: string;
}
type TestType2 = {
  age: number;
}
const type1: TestType1 & TestType2 = { name: '', age: 0 };

// 联合类型
const unitType1: 'type1' | 'type2' = 'type1';
const unitType2: number | string = 'type1';

// 类型区分&类型保护
// typeof 类型保护:                parameterName is Type这种形式,parameterName必须时函数签名的一个参数名
const isNum = (num: any): num is number => {
  return typeof num === 'number';
}
const isString = (str: any): str is string => {
  return typeof str === 'string';
}
// const paddingCon = (padding: string | number) => {
//   if(isNum(padding)) {
//     return Array(padding);
//   } else {
//     return padding.repeat(3);
//   }
// }
const paddingCon = (padding: string | number) => {
  if (typeof padding === 'number') {
    return Array(padding);
  } else {
    return padding.repeat(3);
  }
}

// instanceof 类型保护
class SpaceClass {
  constructor(private name: string) {
    this.name = '';
  }

}
class StringClass {
  constructor(age: number) {
    age = 3;
  }
}
const protectFunc = (flag: boolean) => {
  return flag ? new StringClass(99) : new SpaceClass('');
}
const protectNum = protectFunc;
// instanceof右侧要求为构造函数，类型细化为：构造函数的proptype属性类型，构造签名所返回的类型联名
if (protectNum instanceof SpaceClass) {
  console.log('!!!');
}

// 类型别名
type TypeName = string | null;
type Name = { name: string };
type Func = { funcName: () => void };
type Paradox = Name & Func;
type Unio<T> = { value: T };
interface DataList {
  sigle: {
    id: string;
  }[],
}
const many: Unio<DataList> & Paradox = {
  value: {
    sigle: [{ id: '' }]
  },
  name: '',
  funcName: () => {},
}

// 接口与类型
const AType = (name: Name): Name => name;
const BType = (data: DataList): DataList => data;
// 类型别名不能用extends和implements
// 当无法通过接口来描述一个类型并且需要使用联合类型或元祖类型时会使用类型别名

// 类型索引
const indexFunc = <T, K extends keyof T>(obj: T, index: K[]) => {
  index.map((p) => obj[p]);
}
interface Person {
  name: string;
  age: number;
}
const personal: Person = {
  name: '222',
  age: 9,
}
indexFunc(personal, ['name']) // 第二个参数：数组元素必须为Person中的类型,编译器会检查name是否为Person中的属性

// 字符串索引签名
interface indexSignal {
  [index: number]: string;
}
const indexTest: indexSignal = { 90: '000' };

type Partial1<T> = {
  //         name 、 age :  string
  readonly [P in keyof T]: T[P] | null;
}
type Partial2 = Partial1<Person>;

type Create1 = 'per1' | 'per2';
type Create2 = { [P in Create1]: boolean };
// Create2 = { 'per1': false, 'per2': false }

type Partial3<T, K extends keyof T> = {
  //         name 、 age :  string
  readonly [P in K]: T[P] | null;
}
const b: Partial3<Person, 'name' | 'age'> = {
  name: null,
  age: 0
}
const c: Partial2 = {
  name: null,
  age: 0
}
// b.age = 20;
}