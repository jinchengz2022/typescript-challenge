/* eslint-disable @typescript-eslint/no-unused-vars */

export const dayTypescript = () => {
  // 布尔类型
  const isDone: boolean = true; // false

  // 字符串
  const isString: string = 'string!';

  // 数字,ts除了支持十进制和十六进制还支持es5中的二进制和八进制
  const isNum: number = 123; // oxf00d、 0b1010、0o744...

  // 数组
  const isArray1: string[] = ['1,', '2,']; // 元素类型[]
  const isArray2: Array<string> = ['1,', '2,']; // Array<元素类型>

  // 元祖:表示一个元素已知的数量和类型，各元素类型可不相同
  let tuple: [number, string];
  tuple = [10, '123'];
  tuple[1].slice();
  // tuple[2] = '333'; // Okay 元素越界会使联合类型替代  string | number
  // tuple[3] = true; // Error

  // 枚举
  enum CODE {
    A = 'ABC'
  }
  const code: CODE = CODE.A

  // ANY
  const anyData: any = {};

  // void: 表示没有任何类型，当一个函数没有返回值时
  const func: () => void = () => { };

  // NULL UNDEFINED:所有类型的子类型，可赋值给number类型的变量。指定--strictNullChecks标记后只能赋值给void给他们自己
  const nullType: null = null;
  const undefinedType: undefined = undefined;

  // never: 表示永不存在的值，是总会抛出异常或根本不会有返回值的函数表达式的类型（除了never，any也不可赋值给never类型）
  const errorFunc = () => {
    throw new Error('!!!!!!')
  }

  // object 表示非原始类型
  const objType: object = { type: 'obj' };

  // 类型断言: as     <>
  let duan_1 = 1 as number;
  let duan_2: Record<string, any> = {};

  //接口
  interface LabelProp {
    name: 'Beauty';
    readonly age: 12; // 只读属性
  }

  const arrReandOnly: ReadonlyArray<number> = [1, 2, 3]; // [1, 2, 3] as const
  let arrCopy: number[] = [];
  // arrCopy = arrReandOnly // 添加只读属性后不给赋值给其他数组 --->
  arrCopy = arrReandOnly as number[]; // 但可用类型断言重写
  // readonly 与 as const,看用作变量还是属性，变量则用 as const，属性则用readonly

  // 索引签名
  interface StringArr {
    [num: string]: string; // 用number去索引得到string返回值
    // [age: number]: string; testArr = [1, 2, 3] stringReturn = testArr[0]
  }
  const testArr: StringArr = { a: '2'};
  const stringReturn: string = testArr['a'];

  interface NumberDiction {
    [index: string]: number;
    // name: string; // name类型与索引签名的返回值类型不一致
    age: number;
  }

  // 接口继承
  interface JiCheng extends LabelProp{
    jiekouName: 'hahaha';
    // name: 'Beauty';
    // readonly age: 12;
  }
};