type StringRecursion<S extends string> = 
S extends `${infer F}${infer L}` ? 
[F, ...StringRecursion<L>] : [];
type LengthOfString<S extends string> = StringRecursion<S>['length'];

// 使用数组获取长度，string.length无法获取