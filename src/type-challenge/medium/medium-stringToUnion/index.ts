// type StringToUnion<T extends string> = 
// T extends `${infer F}${infer R}` ? 
// R extends string ? 
// StringToUnion<R> : F : never;

type StringToUnion<T extends string> = 
T extends `${infer F}${infer R}` ? 
F | StringToUnion<R> : never;