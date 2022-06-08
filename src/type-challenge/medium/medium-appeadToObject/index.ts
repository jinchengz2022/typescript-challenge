// // type AppendToObject<T, U extends string, V> = {
// //   [K in keyof T]: T[K];
// // } & {
// //   [P in U]: V;
// // }
// // type fsda = AppendToObject<{a: 1; c: 2}, 'c', string>
// // 当有重复时为never

type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
}

// // type AppendToObject<T, U extends keyof any, V> = Omit<T, U> & Record<U, V>