type MyAwaited1<T extends Promise<unknown>> = 
T extends Promise<infer U> ? 
U extends Promise<unknown> ?
 MyAwaited1<U> : U : never;