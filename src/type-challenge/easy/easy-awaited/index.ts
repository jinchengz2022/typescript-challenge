type MyAwaited<T extends Promise<unknown>> = 
//   限制为Promise
T extends Promise<infer X> ?  //infer X相当于推断传入的Promise中<>的类型
X extends Promise<unknown> ?  // X 为Promise类型的话 则继续调用MyAwaited判断
MyAwaited<X> : 
X : never;