import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

// @ts-expect-error
type error = Flatten<'1'>

type Flatten<T extends any[], K extends any[] = []> = T extends [infer A, ...infer B] ? 
A extends any[] ? 
Flatten<[...A, ...B], K> : 
Flatten<[...B], [...K, A]> :
K

// type Flatten<T> = T extends [] ? 
// [] :
// T extends [infer A, ...infer B] ? 
// [...Flatten<A>, ...Flatten<B>] : 
// [T];