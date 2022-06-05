import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat1<[], []>, []>>,
  Expect<Equal<Concat1<[], [1]>, [1]>>,
  Expect<Equal<Concat1<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat1<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
];

type easyArr = Expect<Equal<FirstArrEle<['1', 2]>, '1'>>;

type easyArrLast = Expect<Equal<LastArrEle<['1', 2]>, 2>>;
