type If<C extends boolean, T, F> = C extends true ? T : F;

// null 在严格模式和非严格模式下得区别
// 非严格模式下：
// type error = If<null, 'a', 'b'>;  返回 'a'
