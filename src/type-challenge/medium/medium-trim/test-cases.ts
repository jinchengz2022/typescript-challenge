import type { Equal, Expect } from '@type-challenges/utils';

// type Trim<T extends string> = T extends `${'\n' | '\t' | ' '}${infer R}` ?
//  Trim<R> : T extends `${infer Q}${'\n' | '\t' | ' '}` ? Trim<Q> : T;

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]