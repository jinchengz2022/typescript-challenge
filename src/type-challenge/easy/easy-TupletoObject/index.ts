//                           类型约束为：
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}

// [K in keyof T] 遍历对象
// [k in T[number]] 遍历数组