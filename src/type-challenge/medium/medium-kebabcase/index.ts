
type recognize = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
type KebabCase<S extends string, U extends boolean = true> =
  S extends `${infer F}${infer R}` ?
  `${F extends recognize ?
  `${U extends true ? '' : '-'}${Lowercase<F>}${KebabCase<R, false>}` :
  `${F}${KebabCase<R, false>}`}` :
  S;

