type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? 
Trim<R> : S extends `${infer U}${' ' | '\n' | '\t'}` ? Trim<U> : S