type AppendArgument<Fn extends (...args: any[]) => unknown, A> = 
Fn extends (...args: infer S) => infer R ? 
(...args: [...S, A]) => R : never;