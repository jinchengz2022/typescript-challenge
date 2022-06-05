type DeepReadonly<T extends Record<string, any>> = {
  readonly [P in keyof T]: 
  T[P] extends string | number | Function | boolean ? T[P] : DeepReadonly<T[P]>;
}