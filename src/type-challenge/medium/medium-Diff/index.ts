// type Diff<A, B> = {
//   [P in keyof A as P extends keyof B ? never : P]: P extends keyof B ? never : A[P];
// } & {
//   [U in keyof B as U extends keyof A ? never : U]: U extends keyof A ? never : B[U];
// }
type Diff<A, B> = {
  [P in keyof (A & B) as P extends keyof (A | B) ? never : P]: P extends keyof B ? B[P] : P extends keyof A ? A[P] : never;
} 