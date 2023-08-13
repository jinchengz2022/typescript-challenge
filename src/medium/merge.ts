import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]

type Merge<T, K> = {
  [P in keyof T | keyof K]: P extends keyof K ? K[P] : P extends keyof T ? T[P] : never;
}