type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [U in Exclude<keyof T, K>]: T[U];
}