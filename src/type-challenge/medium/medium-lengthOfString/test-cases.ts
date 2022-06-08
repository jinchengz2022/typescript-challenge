import type { Equal, Expect } from '@type-challenges/utils';

// type LengthChange<T extends string> = T extends `${infer F}${infer R}` ? [F, ...LengthChange<R>] : [];
// type LengthOfString<T extends string> = LengthChange<T>['length'];

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]