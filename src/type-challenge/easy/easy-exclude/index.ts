//        T: a | b     U: a
//                    a ext a
//                    b ext a
type MyExclude<T, U> = T extends U ? never : T;

// T: a | b   U: b | c | d
  // a ext b | c | d
  // b ext b | c | d

  // type MyExcludeTest = MyExclude<'a' | 'b', 'b' | 'c' | 'd'>