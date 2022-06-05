type Flatten<T extends unknown[]> = T extends [infer F, ...infer R] ? 
F extends unknown[] ? 
[...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>] : [];

// 第一项判断为array则递归把最终递归的结果结构出来，在递归剩余项
// 若第一项不是则递归剩余项

// const flattenFunc = (arr: unknown[]) => {
//     arr.map((item) => {
//       if(item instanceof Array) {
//         flattenFunc(item);
//       } else {
//         return item;
//       }
//     })
// }
