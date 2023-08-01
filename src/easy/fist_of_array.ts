import type { Equal, Expect } from '@type-challenges/utils'

type MyFirst<T extends any[]> = T extends [] ? never : T[0];

type MyFirst1<T extends any[]> = T['length'] extends 0 ? never : T[0];

type MyFirst2<T extends any[]> = T extends [infer A, ...infer R] ? A : never;

type cases = [
  Expect<Equal<MyFirst<[3, 2, 1]>, 3>>,
  Expect<Equal<MyFirst<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<MyFirst<[]>, never>>,
  Expect<Equal<MyFirst<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  MyFirst<'notArray'>,
  // @ts-expect-error
  MyFirst<{ 0: 'arrayLike' }>,
]