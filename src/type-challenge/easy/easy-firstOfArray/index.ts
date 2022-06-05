
// extends 条件判断
// type First<T extends any[]> = T extends [] ? never : T[0];

type test1 = First<[]>; // undefined

// 通过获取tuple里length判断
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// T['length']相当于arr.length;

// inter 推断
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;
//                           相当于数组解构[f, ...rest] = arr;

// 
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
//                            1 extends 1  T[number]: 1 | 2 | 3
//                            1 extends 2
//                            1 extends 3




