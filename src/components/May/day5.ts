export const app = () => {
  interface NumberNames {
    [key: string]: string;
  }
  // Record<string, string>
  // 区别：索引签名参数类型不能为字面量类型或泛型类型
  // [key: 'id'] : string  error!
  // Record<'id', string>
  const names: NumberNames = {
    '1': 'Joy',
    '2': 'Tom'
  }
  // keyof 用于获取类型中的键值
  type NO = keyof NumberNames; // string | number
  
  interface Vector1 {
    x: number;
  }
  interface Vector2 {
    x: number;
    y: string;
  }
  type Subtypeof<T, U> = T extends U ? true : false;
  type SubA = Subtypeof<Vector1, Vector2>; // false Vector1中不包含Vector2中的y
  type SubB = Subtypeof<Vector2, Vector1>; // true  Vector2中不包含Vector1中的x
  
  type StrA = 'N' | 'Y' | 'M';
  const StrFunc = (str: StrA) => { };
  StrFunc('M')
  
  const getProperty = <T extends Vector2, K extends keyof Vector2>(obj: T, key: K) => {
    return obj[key];
  }
  
  type N0 = string & number; // never     !!!
  type N1 = any & 1; // any
  type N2 = any & never; // never     !!!除了never，any也不可赋值给never类型
  
  type A = { name: 'i'; age: string; };
  type B = { name: 'q'; age: number; };
  type C = { name: 'h'; age: number; };
  type D = { sex: 'h'; inter: number; };
  
  type AB = A & B; // never  两类型键名相同时 age既是string有事number不存在
  type BC = C & B; // never  name为字面量类型 name既是q又是h
  
  type Func1 = (a: string, b: number) => string;
  type Func2 = (a: string, b: number) => void;
  type Func3 = (a: string, b: string) => string;
  type Func4 = (a: number, b: number) => void;
  type F1 = Func1 & Func2;
  type F2 = Func3 & Func4;
  const func1: F1 = (a: string, b: number) => '';
  const func2: F2 = (a: string | number, b: string | number) => '';
  func1('', 2);
  func2(0, 0);
  func2('0', '');
  // const func2: F2 & Func2 = (a: string | number, b: string | number) => '';
  // func2('', 0)
  type CD = C & D; // {name:   sex:  age:   inter: }
  
  type User1 = {
    name: string;
    age: number;
    sex: string;
  }
  type Simplify<T> = {
    [P in keyof T]: T[P]; 
  }
  type PartialByKeys<T, K extends keyof T> = {
    [P in K]?: T[P];
  } & Pick<T, Exclude<keyof T, K>>;
  
  type U1 = Simplify<PartialByKeys<User1,'name'>>
  // 加上 & Pick<T, Exclude<keyof T, K>>
  // type U1 = {
  //   name?: string | undefined;
  //   age: number;
  //   sex: string;
  // }
  // 没有 & Pick<T, Exclude<keyof T, K>>则为 name?: string | undefined
  
  // 泛型变量
  // T(Type) 类型
  // K(Key) 对象中键的类型
  // V(Value) 值得类型
  // E(Element) 元素类型
  
  const pickObj = { name: 'Lucy', age: 22 };
  const PickType = <T, K extends keyof T>(obj: T, keys: [K]) => {
    const ret: any = {};
    for(const key of keys) {
      ret[key] = obj[key];
    }
    return ret;
  }
  console.log(PickType(pickObj, ['age']));
  
  type MyPick = Pick<User1, 'age' | 'name'>;
  // Pick = Pick<T, K extends keyof T> = { [P in K]: T[P] }
  const pickNum: MyPick = {
    age: 22,
    name: '',
    // sex: ''
  }
  
  type T100<T> = { [K in keyof T]: T[K] };
  type T101 = T100<any>; // { [x: string]: any};
  type T102 = T100<unknown>; // { };
  // 可以把任何值赋值给any类型的变量并进行操作
  // 也可以把任何值赋值给unknown类型的变量,对于unknown类型，必须进行类型检查或者类型断言才能对变量操作
  
  type Un1 = unknown & string; // string
  type Un2 = unknown & any; // any
  type Un3 = unknown & boolean; // boolean
  
  type Un4 = unknown | string; // unknown
  type Un5 = unknown | any; // any
  type Un6 = unknown | boolean; // unknown
  
  // 检测any 和 unknown 类型：
  type isAny<T> = 0 extends 1 & T ? true : false;
  type isUnknown<T> = keyof{ [P in keyof T]: T[P] } extends never ? true : false;
  
  // infer 推断类型
  type T200 = string[];
  type inferType1<T> = T extends (infer U)[] ? U : T;
  //          string[]            infer U = string
  // infer声明 只能在extends的字句中使用
  // infet 声明的类型只能在条件判断中的true中
  // type inferType1<T> = T extends (infer U)[] ? T : U;
  type T201 = inferType1<T200>;
  
  
}