import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<never>, []>>,
];

// type unionArr = ['A' | 'B'];

// type Ttype1<T> = [T] extends [never] ? 'true' : 'false';
// type Ttype2<T> = T extends never ? 'true' : 'false';
// type p1 = Ttype1<never>; true;
// type p2 = Ttype2<never>; never;


// type testType<T> = T extends T ? never : T;
// type p3 = testType<'A' | 'B' | 'C'>
