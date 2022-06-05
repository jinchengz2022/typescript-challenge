import type { Equal } from '@type-challenges/utils';


export type Includes<T extends readonly unknown[], U> = 
T extends [infer F, ...infer R] ? Equal<F, U> extends true ? true : Includes<R, U> : false;

// const fakeArr = (arr: unknown[], ele: unknown) => {
//   const _fake = (_arr: unknown[], _ele: unknown) => {
//     if(_arr.length === 0) return false;
//     const [F, ...R] = _arr;
//     if(F === _ele) return true;
//     _fake([R], _ele);
//   }
//   _fake(arr, ele);
// }