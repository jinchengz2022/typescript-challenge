export const app = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */

// 条件类型与分布式条件类型
// 分布式：
type Naked<T> = T extends boolean ? '1' : '2';
type T0 = Naked<string | boolean>; // '1' | '2' 分布式条件类型

// 条件式：
// 若类型T被包装过则不属于分布式
type Wrapper1<T> = [T] extends string ? 'Y' : 'N';
type Wrapper2<T> = T[] extends string ? 'T' : 'U';
type Wrapper3<T> = Promise<T> extends Promise<string> ? 'Q' : 'A';
type T1 = Wrapper1<string | boolean>; // N
type T2 = Wrapper2<string | boolean>; // U
type T3 = Wrapper3<string | boolean>; // A

// 拓展：
interface User2 {
  name: string;
  age: number;
  getName: () => void;
  getAge: () => void;
}
interface User3 {
  count: number;
  0: void;
  sex: string;
  inter: string;
  // getCount: () => number;
}
// 若是函数则返回该函数名
type MyExcludeName<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T];
// 返回该函数的键值集合
type MyExcludeFunc<T> = Pick<T, MyExcludeName<T>>; // Pick<{getName...}, "getName" | "getAge">
type ResultName = MyExcludeName<User2>; // "getName" | "getAge"
type ResultFunc = MyExcludeFunc<User2>;

// 内置工具类型实现
// Exclude
type ReExclude<T, U> =  T extends U ? never : T;
//                      '1' extends '2' | '3' ?
//                      '2' extends '2' | '3' ?
type ReExclude1 =  ReExclude<'get' | 'age', 'name' | 'age'>;

// Extract: 获取共有部分
type ReExtract<T, U> = T extends U ? T : never;
type ReExtract1 = ReExtract<'Y' | 'N' | 'P', 'Y' | 'U' | 'P'>; // Y, P

// NonNullable: 得到除了null undefined之外的类型
type ReNonNullable<T> = T extends null | undefined ? never : T;
type NonNullable1 = ReNonNullable<undefined>;

// Parameters: 返回函数类型中参数的类型数组
type ReParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type Parameters1 = ReParameters<(name: string, age: number) => string[]> // [name: string, age: number]

// Retype: 获取函数的返回值类型
type ReRetype<T extends (...args: any) => any> = T extends (...arg: any) => infer R ? R : any;
type Retype1 = ReRetype<(name: string) => string> // string

// Record
type ReRecord<K extends keyof T, T> = {
  [P in K]: T;
}

// Required
type ReRequired<T> = {
  [K in keyof T]-?: T[K];
}

// Partial
type RePartial<T> = {
  [P in keyof T]?: T[P];
}
type P1 = RePartial<User3>
type P2 = ReRequired<P1>

// Pick = Pick<T, K extends keyof T> = { [P in K]: T[P] }

// 模板字面类类型 ${T} T的类型可为string number Boolean bigint
type Dicretion = 'left' | 'right' | 'top' | 'botton';
type PaddingType = `padding-${Dicretion}`;
type MarginType = `margin-${Dicretion}`;

// 处理字符串工具类型
type StringChange1<T extends string> = `to${Capitalize<T>}`;
type StringChange4<T extends string> = `to${Uncapitalize<T>}`;
type StringChange2<T extends string> = `to${Uppercase<T>}`;
type StringChange3<T extends string> = `to${Lowercase<T>}`;
type implateName1 = StringChange1<'name'>; // toName
type implateName4 = StringChange4<'Name'>; // toname
type implateName2 = StringChange2<'name'>; // NAME
type implateName3 = StringChange3<'NamE'>; // name

type InferRoot<T> = T extends `${infer R}${Capitalize<Dicretion>}` ? R : T;
//                              infet R 推断为 margin
type InferRoot1 = InferRoot<'marginLeft'>

// Key Remapping 对键重新映射
// type MappedTypeWithNewKeys<T> = {
//   [K in keyof T as NewkeyType]: T[K];
// }
type Getters<T> = {
  //                                    & 过滤非string类型的键
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] ;
}
type useGetters = Getters<User3>

// Omit工具类型
// 内部实现
type ReOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
                                      // Pick<name age get...,Exclude<name | age | get, get>> 
type UseOmit = Omit<User2, 'getName' | 'getAge'>; // 过滤Uesr2中的getName age属性
// 使用Omit过滤后重写
interface User4 extends Omit<User2, 'name'> {
  name: Date;
}
}