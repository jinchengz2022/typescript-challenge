type MyReturnType<T> = 
T extends (...arg: any[]) => infer X ? X : never;
