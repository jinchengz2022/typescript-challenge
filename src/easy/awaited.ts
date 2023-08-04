import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>

/**
 * 泛型T为Promise类型
 * infer P 推断Promise返回类型
 * 若返回类型还是Promise则递归
 * 否则返回P类型
 * 若不是Promise则返回never
 */
type Thenable<T> = {
  then: (_: (arg: T) => unknown) => unknown
};

type MyAwaited<T extends Promise<any> | Thenable<any>> = T extends Promise<infer P> ?
 P extends Promise<any> ? 
 MyAwaited<P> : 
 P : 
 T extends Thenable<infer U> ?
 U : 
 never;

//  type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer P> ?
//  P extends PromiseLike<any> ? 
//  MyAwaited<P> : 
//  P : 
//  never;