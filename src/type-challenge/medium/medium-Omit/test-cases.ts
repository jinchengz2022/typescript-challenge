import type { Equal, Expect } from '@type-challenges/utils'

// type MyOmit<T, U extends keyof T> = {
//   [K in keyof T as K extends U ? never : K]: K extends U ? never : T[K];
// }

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}