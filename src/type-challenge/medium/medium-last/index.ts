// type Last<T extends any[]> = T extends [...infer F, infer L] ? L : never;

// js: [].length - 1;
// type Last<T extends any[]> = [undefined, ...T][T["length"]];

type Last<T extends any[]> = T extends [infer F, ...infer L] ? (L extends [] ? F : Last<L>) : never;


