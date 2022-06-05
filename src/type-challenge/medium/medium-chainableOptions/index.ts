//            T extends {} = {} 函数参数初始值~
type Chainable<T = {}> = {
  // 1. 约束key value 类型
  // 2. 键值 存在 对象中时返回never
  option<K extends string, V extends unknown>(key: K extends keyof T ? never : K, value: V): 
  // [P in K]: V  这里的V不是value 时类型 尴尬
  Chainable<T & { [P in K]: V}>;
  get(): T;
}

// TODO:  