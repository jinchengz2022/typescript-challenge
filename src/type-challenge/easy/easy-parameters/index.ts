type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never;
// ...args相当于结构对象中的参数，...args后 infer推断各自的类型