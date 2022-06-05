type Permutation<T, U = T> =
  [T] extends [never] ?
  [] : (T extends U ?
    [T, ...Permutation<U extends T ? never : U>] : [])

  //TODO: