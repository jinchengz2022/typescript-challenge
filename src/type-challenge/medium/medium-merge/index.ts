type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
  // a:                                     false ?    string;
  // b:                                     true ?    string;
  // c:                                     true ?    string;
  // b:                                     true ?    string;
};

// {
//   a: string;
//   b: number;
// }
// {
//   c: string;
//   b: string;
// }