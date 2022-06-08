import type { Equal, Expect } from '@type-challenges/utils';

// type Last<T extends unknown[]> = T extends [...infer F, infer L] ? L : T;

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]